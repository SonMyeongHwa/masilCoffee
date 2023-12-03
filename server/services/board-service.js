const Board = require("../models/board-schema");
const paginate = require("../utils/pagination");
const User = require("../models/user-schema");
const CommentService = require("./comment-service");
const LikeService = require("./like-service");

class BoardService {
  // 게시글 생성
  static async createBoard(boardData) {
    try {
      const user = await User.findById(boardData.userId);
      if (!user) {
        throw new Error("사용자를 찾을 수 없습니다.");
      }

      const imagePaths = boardData.image ? boardData.image : [];
      const newBoard = new Board({
        user: user.id,
        nickname: boardData.nickname,
        category: boardData.category,
        post: boardData.post,
        image: imagePaths,
        tags: boardData.tags,
      });

      const savedBoard = await newBoard.save();
      return savedBoard;
    } catch (error) {
      throw error;
    }
  }

  // 모든 게시글 조회
  static async getAllBoards(currentPage, pageSize, search, userId) {
    try {
      if (search && search.length < 2) {
        throw new Error("검색어는 두 글자 이상 입력해야 합니다.");
      }

      let query = {};
      if (search) {
        const tagSearch = { tags: { $in: [search] } };
        query = {
          $or: [
            { nickname: { $regex: `.*${search}.*`, $options: "i" } },
            { post: { $regex: `.*${search}.*`, $options: "i" } },
            tagSearch,
          ],
        };
      }

      const totalItems = await Board.countDocuments(query);
      const boards = await Board.find(query)
        .sort({ createdAt: -1 })
        .skip((currentPage - 1) * pageSize)
        .limit(pageSize);

      const boardsWithCounts = await Promise.all(
        boards.map(async (board) => {
          const commentCount = await CommentService.commentCount(board._id);
          const likeCount = await LikeService.likeCount(board._id);
          const isLiked = userId
            ? await LikeService.isLiked(board._id, userId)
            : false;

          return {
            ...board.toObject(),
            commentCount,
            likeCount,
            isLiked,
          };
        })
      );

      const paginatedResult = paginate(
        boardsWithCounts,
        currentPage,
        pageSize,
        totalItems
      );

      return paginatedResult;
    } catch (error) {
      throw error;
    }
  }

  // 본인이 작성한 모든 게시글 조회
  static async getAllBoardsByUserId(userId, currentPage, pageSize) {
    try {
      const query = { user: userId };
      const totalItems = await Board.countDocuments(query);

      const boards = await Board.find(query)
        .sort({ createdAt: -1 })
        .skip((currentPage - 1) * pageSize)
        .limit(pageSize);

      const boardsWithCounts = await Promise.all(
        boards.map(async (board) => {
          const commentCount = await CommentService.commentCount(board._id);
          const likeCount = await LikeService.likeCount(board._id);
          const isLiked = await LikeService.isLiked(board._id, userId);
          return {
            ...board.toObject(),
            commentCount,
            likeCount,
            isLiked,
          };
        })
      );

      const paginatedResult = paginate(
        boardsWithCounts,
        currentPage,
        pageSize,
        totalItems
      );
      return paginatedResult;
    } catch (error) {
      throw error;
    }
  }

  // // 카테고리 별 게시글 조회
  // static async getBoardsByCategory(category, currentPage, pageSize) {
  //   try {
  //     const query = { category };
  //     const totalItems = await Board.countDocuments(query);

  //     const boards = await Board.find(query)
  //       .sort({ createdAt: -1 })
  //       .skip((currentPage - 1) * pageSize)
  //       .limit(pageSize);

  //     const paginatedResult = paginate(
  //       boards,
  //       currentPage,
  //       pageSize,
  //       totalItems
  //     );
  //     return paginatedResult;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // 특정 카테고리의 게시글 조회
  static async getBoardsByCategory(
    category,
    currentPage,
    pageSize,
    search,
    userId
  ) {
    try {
      const query = { category };

      if (search && search.length >= 2) {
        const tagSearch = { tags: { $in: [search] } };
        query.$or = [
          { nickname: { $regex: `.*${search}.*`, $options: "i" } },
          { post: { $regex: `.*${search}.*`, $options: "i" } },
          tagSearch,
        ];
      }

      const totalItems = await Board.countDocuments(query);

      const boards = await Board.find(query)
        .sort({ createdAt: -1 })
        .skip((currentPage - 1) * pageSize)
        .limit(pageSize);

      const boardsWithCounts = await Promise.all(
        boards.map(async (board) => {
          const commentCount = await CommentService.commentCount(board._id);
          const likeCount = await LikeService.likeCount(board._id);
          const isLiked = userId
            ? await LikeService.isLiked(board._id, userId)
            : false;

          return {
            ...board.toObject(),
            commentCount,
            likeCount,
            isLiked,
          };
        })
      );

      const paginatedResult = paginate(
        boardsWithCounts,
        currentPage,
        pageSize,
        totalItems
      );

      return paginatedResult;
    } catch (error) {
      throw error;
    }
  }

  // 특정 게시글 갖고오기
  static async getBoardById(boardId, userId) {
    try {
      const board = await Board.findById(boardId);
      if (!board) {
        return null;
      }
      const commentCount = await CommentService.commentCount(boardId);
      const likeCount = await LikeService.likeCount(boardId);
      const isLiked = userId
        ? await LikeService.isLiked(boardId, userId)
        : false;

      const boardWithCounts = {
        ...board.toObject(),
        commentCount,
        likeCount,
        isLiked,
      };
      return boardWithCounts;
    } catch (error) {
      throw error;
    }
  }

  // 게시글 수정
  static async updateBoard(userId, boardId, updatedData, imagePaths) {
    try {
      const existingBoard = await Board.findById(boardId);
      if (!existingBoard) {
        throw new Error("게시글을 찾을 수 없습니다.");
      }
      const userIdOfBoard = existingBoard.user.toString();
      if (userId !== userIdOfBoard) {
        throw new Error("권한이 없습니다.");
      }

      // 이미지가 있는 경우 기존 이미지와 함께 새로운 이미지 추가
      const updatedImage = imagePaths;
      if (updatedImage.length > 4) {
        throw new Error("이미지는 최대 4개까지만 허용됩니다.");
      }

      const updatedBoard = await Board.findByIdAndUpdate(
        boardId,
        {
          ...updatedData,
          image: updatedImage,
        },
        { new: true }
      );

      return updatedBoard;
    } catch (error) {
      throw error;
    }
  }

  // 게시글 삭제
  static async deleteBoard(boardId) {
    try {
      const board = await Board.findById(boardId);
      if (!board) {
        return new Error("게시물을 찾을 수 없습니다.");
      }
      const result = await Board.findByIdAndDelete(boardId);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getBoardAuthorId(boardId) {
    try {
      const board = await Board.findById(boardId);
      if (!board) {
        throw new Error("게시글을 찾을 수 없습니다.");
      }

      return board.user.toString();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = BoardService;

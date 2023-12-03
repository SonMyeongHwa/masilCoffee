const Comment = require("../models/comment-schema");
const User = require("../models/user-schema");

class CommentService {
  static async getMyComments(userId) {
    try {
      const myComments = await Comment.find({ author: userId });
      return myComments;
    } catch (error) {
      throw error;
    }
  }

  static async getCommentAuthorId(commentId) {
    try {
      const comment = await Comment.findById(commentId);
      if (!comment) {
        throw new Error("댓글을 찾을 수 없습니다.");
      }

      // Comment 모델의 author 필드에서 userid 값을 가져옴
      const commentAuthorId = comment.author._id;
      return commentAuthorId;
    } catch (error) {
      throw error;
    }
  }
  // 댓글 생성
  static async createComment(commentData) {
    try {
      const userId = commentData.author;

      const user = await User.findById(userId);
      if (!user) {
        throw new Error("사용자를 찾을 수 없습니다.");
      }

      commentData.nickname = user.nickname;

      const newComment = new Comment(commentData);
      const savedComment = await newComment.save();
      return savedComment;
    } catch (error) {
      throw error;
    }
  }

  // 특정 게시글의 모든 댓글 가져오기
  static async getCommentsByBoardId(boardId) {
    try {
      const comments = await Comment.find({ board: boardId }).populate(
        "author"
      );
      return comments;
    } catch (error) {
      throw error;
    }
  }

  // 댓글 삭제하기 (작성자, 관리자)
  static async deleteComment(commentId) {
    try {
      const comment = await Comment.findById(commentId);
      if (!comment) {
        throw new Error("댓글을 찾을 수 없습니다.");
      }

      const result = await Comment.findByIdAndDelete(commentId);
      return result;
    } catch (error) {
      throw error;
    }
  }

  // 댓글 수정
  static async updateComment(commentId, updatedData, userId) {
    try {
      const comment = await Comment.findById(commentId);
      if (!comment) {
        throw new Error("댓글을 찾을 수 없습니다.");
      }
      if (comment.author.toString() !== userId.toString()) {
        throw new Error("댓글 작성자만 수정할 수 있습니다.");
      }
      const updatedComment = await Comment.findByIdAndUpdate(
        commentId,
        updatedData,
        { new: true }
      );
      return updatedComment;
    } catch (error) {
      throw error;
    }
  }

  static async commentCount(boardId) {
    try {
      const commentCount = await Comment.countDocuments({ board: boardId });
      return commentCount;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CommentService;

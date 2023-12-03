const express = require("express");
const BoardRouter = express.Router();
const BoardService = require("../services/board-service");
const imageUploader = require("../middlewares/s3-handler");
const asyncHandler = require("../middlewares/async-handler");
const ResponseHandler = require("../middlewares/res-handler");
const JwtMiddleware = require("../middlewares/jwt-handler");

// 특정 카테고리의 게시글 가져오기 (검색포함)
BoardRouter.get(
  "/categories/:category",
  JwtMiddleware.checkTokenOrNull,
  asyncHandler(async (req, res) => {
    const category = req.params.category;
    const { currentPage, pageSize, search } = req.query;
    const userId = req.tokenData ? req.tokenData._id : null;
    const boards = await BoardService.getBoardsByCategory(
      category,
      currentPage,
      pageSize,
      search,
      userId
    );
    ResponseHandler.respondWithSuccess(res, boards);
  })
);

// 특정 board ID의 게시글 가져오기
BoardRouter.get(
  "/board/:boardId",
  JwtMiddleware.checkTokenOrNull,
  asyncHandler(async (req, res) => {
    try {
      const userId = req.tokenData ? req.tokenData._id : null;
      const board = await BoardService.getBoardById(req.params.boardId, userId);
      if (!board) {
        return ResponseHandler.respondWithNotfound(res);
      }
      ResponseHandler.respondWithSuccess(res, board);
    } catch (error) {
      console.error(error);
      ResponseHandler.respondWithError(res);
    }
  })
);

// 모든 게시글 가져오기 (모든 사용자, 모든 게시물) (검색포함) (좋아요여부)
BoardRouter.get(
  "/search",
  JwtMiddleware.checkTokenOrNull,
  asyncHandler(async (req, res) => {
    const userId = req.tokenData ? req.tokenData._id : null;
    const { currentPage, pageSize, search } = req.query;
    const boards = await BoardService.getAllBoards(
      currentPage,
      pageSize,
      search,
      userId
    );
    ResponseHandler.respondWithSuccess(res, boards);
  })
);

// 본인이 작성한 모든 게시글 가져오기
BoardRouter.get(
  "/mypost",
  JwtMiddleware.checkToken,
  asyncHandler(async (req, res) => {
    const userId = req.tokenData._id;
    const { currentPage, pageSize } = req.query;
    const boards = await BoardService.getAllBoardsByUserId(
      userId,
      currentPage,
      pageSize
    );
    ResponseHandler.respondWithSuccess(res, boards);
  })
);

// 새로운 게시글 생성
BoardRouter.post(
  "/",
  imageUploader.array("file"),
  JwtMiddleware.checkToken,
  asyncHandler(async (req, res) => {
    const userId = req.tokenData._id;
    const nickname = req.tokenData.nickname;
    const { category, post, tags } = req.body;
    const imagePaths = req.files.map((file) => file.location);
    const boardData = {
      userId,
      nickname,
      category,
      post,
      image: imagePaths,
      tags,
    };
    const newBoard = await BoardService.createBoard(boardData);
    ResponseHandler.respondWithSuccess(res, newBoard);
  })
);

// 특정 ID의 게시글 수정 (본인만 가능)
BoardRouter.put(
  "/:boardId",
  JwtMiddleware.checkToken,
  imageUploader.array("file"),
  asyncHandler(async (req, res) => {
    const uploadedFiles = req.files || [];
    const imagePaths = req.body.file
      ? Array.isArray(req.body.file)
        ? req.body.file
        : [req.body.file]
      : [];
    imagePaths.push(...uploadedFiles.map((file) => file.location));

    // 기존에 존재한 이미지 유지하기
    const existingBoard = await BoardService.getBoardById(req.params.boardId);
    const previousImagePaths = existingBoard.image || [];
    const finalImagePaths =
      imagePaths.length > 0 ? imagePaths : previousImagePaths;

    const updatedBoard = await BoardService.updateBoard(
      req.tokenData._id,
      req.params.boardId,
      req.body,
      finalImagePaths
    );
    ResponseHandler.respondWithSuccess(res, updatedBoard);
  })
);

// 특정 ID의 게시글 삭제
BoardRouter.delete(
  "/:boardId",
  JwtMiddleware.checkToken,
  asyncHandler(async (req, res) => {
    const boardId = req.params.boardId;
    try {
      const boardAuthorId = await BoardService.getBoardAuthorId(boardId);
      if (
        req.tokenData._id == boardAuthorId.toString() ||
        req.tokenData.role == "Admin"
      ) {
        const deletedBoard = await BoardService.deleteBoard(boardId);
        ResponseHandler.respondWithSuccess(res, deletedBoard);
      } else {
        throw new Error("권한이 없습니다.");
      }
    } catch (error) {
      ResponseHandler.respondWithError(res, 400, error.message);
    }
  })
);

module.exports = BoardRouter;

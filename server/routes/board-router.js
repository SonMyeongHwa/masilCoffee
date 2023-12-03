const express = require("express");
const BoardRouter = express.Router();
const BoardService = require("../services/board-service");
const asyncHandler = require("../middlewares/async-handler");
const ResponseHandler = require("../middlewares/res-handler");
const JwtMiddleware = require("../middlewares/jwt-handler");

// // 모든 게시글 가져오기 (모든 사용자, 모든 게시물)
// BoardRouter.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     const user = req.TokenData._id;
//     const boards = await BoardService.getAllBoards(user);
//     ResponseHandler.respondWithSuccess(res, boards);
//   })
// );

// 본인이 작성한 모든 게시글 가져오기
BoardRouter.get(
  "/",
  JwtMiddleware.checkToken,
  asyncHandler(async (req, res) => {
    const user = req.tokenData._id;
    console.log (user);
    const boards = await BoardService.getAllBoardsByUserId(user);
    ResponseHandler.respondWithSuccess(res, boards);
  })
);

// 특정 카테고리의 게시글 가져오기
BoardRouter.get(
  "/category/:category",
  asyncHandler(async (req, res) => {
    const boards = await BoardService.getBoardsByCategory(req.params.category);
    ResponseHandler.respondWithSuccess(res, boards);
  })
);

// 특정 board ID의 게시글 가져오기
BoardRouter.get(
  "/:boardId",
  asyncHandler(async (req, res) => {
    const board = await BoardService.getBoardById(req.params.boardId);
    if (!board) {
      return ResponseHandler.respondWithNotfound(res);
    }
    ResponseHandler.respondWithSuccess(res, board);
  })
);

// 새로운 게시글 생성
BoardRouter.post(
  "/",
  JwtMiddleware.checkToken,
  asyncHandler(async (req, res) => {
    const user = req.tokenData._id;
    const {category, post, image, tags} = req.body;
    const boardData = {
      user,
      category,
      post,
      image,
      tags
    }
    const savedBoard = await BoardService.createBoard(boardData);
    ResponseHandler.respondWithSuccess(res, savedBoard);
  })
);

// 특정 ID의 게시글 수정
BoardRouter.put(
  "/:boardId",
  asyncHandler(async (req, res) => {
    const updatedBoard = await BoardService.updateBoard(
      req.params.boardId,
      req.body
    );
    ResponseHandler.respondWithSuccess(res, updatedBoard);
  })
);

// 특정 ID의 게시글 삭제
BoardRouter.delete(
  "/:boardId",
  asyncHandler(async (req, res) => {
    const deletedBoard = await BoardService.deleteBoard(req.params.boardId);
    ResponseHandler.respondWithSuccess(res, deletedBoard);
  })
);

module.exports = BoardRouter;

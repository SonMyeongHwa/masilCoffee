const express = require("express");
const CommentRouter = express.Router();
const asyncHandler = require("../middlewares/async-handler");
const ResponseHandler = require("../middlewares/res-handler");
const JwtMiddleware = require("../middlewares/jwt-handler");
const CommentService = require("../services/comment-service");

// 댓글 작성
CommentRouter.post(
  "/board/:boardId",
  JwtMiddleware.checkToken,
  asyncHandler(async (req, res) => {
    try {
      const userId = req.tokenData._id;
      const boardId = req.params.boardId;
      const { comment } = req.body;
      const commentData = {
        board: boardId,
        author: userId,
        comment,
      };
      const newComment = await CommentService.createComment(commentData);
      ResponseHandler.respondWithSuccess(res, newComment);
    } catch (error) {
      ResponseHandler.respondWithError(res, 400, error.message);
    }
  })
);

// 특정 게시글의 모든 댓글 가져오기
CommentRouter.get(
  "/board/:boardId",
  asyncHandler(async (req, res) => {
    try {
      const boardId = req.params.boardId;
      const comments = await CommentService.getCommentsByBoardId(boardId);
      ResponseHandler.respondWithSuccess(res, comments);
    } catch (error) {
      ResponseHandler.respondWithError(res, 400, error.message);
    }
  })
);

// 댓글 삭제하기 (작성자 본인만) 혹은 관리자
CommentRouter.delete(
  "/:commentId",
  JwtMiddleware.checkToken,
  asyncHandler(async (req, res) => {
    const commentId = req.params.commentId;
    try {
      const commentAuthorId = await CommentService.getCommentAuthorId(
        commentId
      );
      if (
        req.tokenData._id == commentAuthorId.toString() ||
        req.tokenData.role == "Admin"
      ) {
        const result = await CommentService.deleteComment(commentId);
        ResponseHandler.respondWithSuccess(res, result);
      } else {
        throw new Error("권한이 없습니다.");
      }
    } catch (error) {
      ResponseHandler.respondWithError(res, 400, error.message);
    }
  })
);

// 댓글 수정하기 (작성자 본인만)
CommentRouter.put(
  "/:commentId",
  JwtMiddleware.checkToken,
  asyncHandler(async (req, res) => {
    const userId = req.tokenData._id;
    const commentId = req.params.commentId;
    const updatedData = req.body;
    try {
      const result = await CommentService.updateComment(
        commentId,
        updatedData,
        userId
      );
      ResponseHandler.respondWithSuccess(res, result);
    } catch (error) {
      ResponseHandler.respondWithError(res, 400, error.message);
    }
  })
);

// 내가 작성한 댓글 가져오기
CommentRouter.get(
  "/mycomments",
  JwtMiddleware.checkToken,
  asyncHandler(async (req, res) => {
    try {
      const userId = req.tokenData._id;
      const myComments = await CommentService.getMyComments(userId);
      ResponseHandler.respondWithSuccess(res, myComments);
    } catch (error) {
      ResponseHandler.respondWithError(res, 400, error.message);
    }
  })
);

module.exports = CommentRouter;

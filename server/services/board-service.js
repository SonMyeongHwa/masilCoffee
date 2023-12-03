const Board = require('../models/board-schema');

class BoardService {

  // 게시글 생성
  static async createBoard(boardData) {
    try {
      const newBoard = new Board(boardData);
      const savedBoard = await newBoard.save();
      return savedBoard;
    } catch (error) {
      throw error;
    }
  }

  // 모든 게시글 조회
  static async getAllBoards() {
    try {
      const boards = await Board.find();
      return boards;
    } catch (error) {
      throw error;
    }
  }

  // 본인 모든 게시글 조회
  static async getAllBoardsByUserId(userId) {
    try {
      const boards = await Board.find({ user: userId });
      return boards;
    } catch (error) {
      console.error("모든 게시글 가져오기 중 오류 발생:", error);
      throw error;
    }
  }

  static async getBoardById(boardId) {
    try {
      const board = await Board.findById(boardId);
      return board;
    } catch (error) {
      throw error;
    }
  }

  static async getBoardsByCategory(category) {
    try {
      const boards = await Board.find({ category });
      return boards;
    } catch (error) {
      throw error;
    }
  }


  static async updateBoard(boardId, updatedData) {
    try {
      const updatedBoard = await Board.findByIdAndUpdate(
        boardId,
        updatedData,
        { new: true }
      );
      return updatedBoard;
    } catch (error) {
      throw error;
    }
  }

  static async deleteBoard(boardId) {
    try {
      const deletedBoard = await Board.findByIdAndDelete(boardId);
      return deletedBoard;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = BoardService;

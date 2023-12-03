const Like = require("../models/like-schema");

class LikeService {
  // 사용자의 특정 게시글 좋아요 조회
  static async findLike(userId, boardId) {
    try {
      const existingLike = await Like.findOne({ user: userId, board: boardId });
      return existingLike;
    } catch (error) {
      throw error;
    }
  }

  // 좋아요 추가
  static async createLike(likeData) {
    try {
      const newLike = new Like(likeData);
      const savedLike = await newLike.save();
      return savedLike;
    } catch (error) {
      throw error;
    }
  }

  // 좋아요 삭제
  static async deleteLike(userId, boardId) {
    try {
      const deletedLike = await Like.findOneAndDelete({
        user: userId,
        board: boardId,
      });
      return deletedLike;
    } catch (error) {
      throw error;
    }
  }

  static async likeCount(boardId) {
    try {
      const likeCount = await Like.countDocuments({ board: boardId });
      return likeCount;
    } catch (error) {
      throw error;
    }
  }

  static async isLiked(boardId, userId) {
    try {
      const existingLike = await Like.findOne({ user: userId, board: boardId });
      return !!existingLike;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = LikeService;

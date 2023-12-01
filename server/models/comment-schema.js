const mongoose = require("mongoose");

const { Schema } = mongoose;

const CommentSchema = new Schema(
  {
    board: {
      type: Schema.Types.ObjectId,
      ref: "Board",
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    nickname: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;

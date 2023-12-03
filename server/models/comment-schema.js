const mongoose = require("mongoose");

const { Schema } = mongoose;

const CommentSchema = new Schema(
  {
    comment: {
      type: String,
      required: false,
    },
    board: {
      type: Schema.Types.ObjectId,
      ref: "Board",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;

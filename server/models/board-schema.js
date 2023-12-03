const mongoose = require("mongoose");

const { Schema } = mongoose;

const boardSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    category: {
      type: String,
      required: true,
      enum: ["에스프레소", "논커피", "스무디", "티", "에이드"],
    },
    post: {
      type: String,
      required: true,
    },
    image: [
      {
        type: String,
        required: false,
      },
    ],
    tags: [
      {
        type: String,
        required: false,
      }
    ]
  },
  {
    timestamps: true,
  }
);

boardSchema.path('image').validate(function (value) {
  return value.length <= 4;
}, '이미지 갯수는 최대 4개까지만 허용됩니다.');

const Board = mongoose.model("Board", boardSchema);

module.exports = Board;

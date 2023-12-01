const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["에스프레소", "논커피", "스무디", "티", "에이드"],
    },
    size: {
      type: String,
      required: true,
      enum: ["없음", "Tall", "Large"],
      default: "없음",
    },
    temp: {
      type: String,
      required: true,
      enum: ["없음", "Ice", "Hot"],
      default: "없음",
    },
    info: {
      type: String,
      required: false,
    },
    kcal: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    recipe: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

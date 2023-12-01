const mongoose = require("mongoose");

const { Schema } = mongoose;

const OrderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderDetail: [
      {
        name: String,
        options: String,
        price: Number,
      },
    ],
    date: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["재료소진", "고객요청", "가게사정", "주문완료", "제조완료"],
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    request: {
      type: String,
    },
    packagingOption: {
      type: String,
      enum: ["매장식사", "방문포장"],
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;

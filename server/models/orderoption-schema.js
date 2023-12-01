const mongoose = require("mongoose");

const { Schema } = mongoose;

const OrderOptionSchema = new Schema(
  {
    shot: [
      {
        name: String,
        price: Number,
      },
    ],
    drizzle: [
      {
        name: String,
        price: Number,
      },
    ],
    iceAmount: [
      {
        name: String,
        price: Number,
      },
    ],
    whipping: [
      {
        name: String,
        price: Number,
      },
    ],
    syrup: [
      {
        name: String,
        price: Number,
      },
    ],
    milk: [
      {
        name: String,
        price: Number,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const OrderOption = mongoose.model("OrderOption", OrderOptionSchema);

module.exports = OrderOption;

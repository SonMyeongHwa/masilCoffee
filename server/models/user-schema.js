const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      maxlength: 10,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      enum: ["Admin", "User"],
      default: "User",
    },
    nickname: {
      type: String,
      maxlength: 10,
      unique: true,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      unique: true,
      trim: true,
    },
    customRecipe: [
      {
        name: String,
        options: String,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;

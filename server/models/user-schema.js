const mongoose = require("mongoose");
const Joi = require("joi");

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
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

const userValidationSchema = Joi.object({
  name: Joi.string().max(10).pattern(/^[A-Za-z가-힣]+$/).required(), // eng or kor
  email: Joi.string().email().required(),
  password: Joi.string().max(10).regex(/^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/), // eng(소문자), 숫자, 특수문자 (8글자 내)
  role: Joi.string().valid("Admin", "User"),
  nickname: Joi.string().max(10).pattern(/^[A-Za-z가-힣]+$/).required(), // eng or kor
  phone: Joi.string().pattern(/^\d{3}-\d{4}-\d{4}$/), // 000-0000-0000 전화번호 형식에 맞게
});


module.exports = { User, userValidationSchema };

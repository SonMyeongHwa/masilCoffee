const { User } = require("../models/user-schema");
const { sendMail } = require("../utils/email-send");
const bcrypt = require("bcrypt");

class UserService {
  emailVerificationcode = {};

  // 이메일 인증 번호 생성
  generateRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // 이메일 인증 코드 발송
  async transportVerificationCode(email, res) {
    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
      throw new Error("이미 가입된 이메일 입니다.");
    }

    const verificationCode = this.generateRandomNum(11111, 99999);
    this.emailVerificationcode[email] = verificationCode;
    await sendMail(res, email, this.emailVerificationcode[email]);
  }

  async verifyCode(email, code) {
    const savedCode = this.emailVerificationcode[email];
    if (savedCode === code) {
      delete this.emailVerificationcode[email];
    } else {
      throw new Error("유효하지 않은 코드입니다.");
    }
  }

  async findUserByEmail(email) {
    try {
      return await User.findOne({ email });
    } catch (error) {
      console.error("이메일로 사용자 찾기 중 오류 발생:", error);
      throw error;
    }
  }

  async findUserByNickname(nickname) {
    return User.findOne({ nickname });
  }

  async createUser(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;
    const user = await User.create(userData);
    return user;
  }

  async authenticateUser(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
      return { success: false, fail: "email" };
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return { success: false, fail: "password" };
    }
    return { success: true, user };
  }

  async getAllUsers() {
    return User.find();
  }

  // 관리자 권한
  async getUserById(userId) {
    return await User.findById(userId);
  }

  // 사용자 권한, req.token.userId == getUserById
  async getUserByToken(tokenUserId) {
    const user = await User.findById(tokenUserId);

    if (!user) {
      return null; // 사용자를 찾지 못한 경우 null 반환
    }

    return user.toObject(); // toObject 메서드 호출
  }

  // 사용자 권한
  async updateUser(userId, updates) {
    const user = await User.findByIdAndUpdate(userId, updates, {
      new: true,
      runValidators: true,
    });
    if(!user){
      throw new Error("해당하는 유저를 찾을 수 없습니다.");
    }
    return user;
  }

  async deleteUser(userId) {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      throw { status: 404, message: "User not found" };
    }
    return user;
  }
}

module.exports = new UserService();

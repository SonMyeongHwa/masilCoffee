const User = require("../models/user-schema");
const { sendMail } = require("../utils/email-send");
const bcrypt = require("bcrypt");

class UserService {
  emailVerificationcode = {};

  // 이메일 인증 번호 생성
  generateRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // 이메일 인증 코드 발송
  async transportVerificationCode(email) {
    try {
      const checkEmail = await User.findOne({ email });
      if (checkEmail) {
        return { success: false, message: "이미 가입된 이메일입니다." };
      }

      const verificationCode = this.generateRandomNum(11111, 99999);
      const mailResult = await sendMail(email, verificationCode);

      if (mailResult.success) {
        const { sentTime, expireTime } = mailResult;

        this.emailVerificationcode[email] = {
          code: verificationCode,
          sentTime: sentTime,
          expireTime: expireTime,
        };
        return {
          success: true,
          message: "인증 코드가 성공적으로 전송되었습니다.",
        };
      } else {
        console.error("이메일 발송 실패:", mailResult.message);
        return { success: false, message: "인증 코드 전송에 실패했습니다." };
      }
    } catch (error) {
      console.error("인증 코드 전송 중 오류 발생:", error);
      return { success: false, message: "인증 코드 전송에 실패했습니다." };
    }
  }

  async verifyCode(email, code) {
    const savedCode = this.emailVerificationcode[email];
    if (savedCode && savedCode.code === code) {
      const currentTime = new Date();
      const elapsedTime = currentTime - savedCode.sentTime;

      if (elapsedTime <= savedCode.expireTime) {
        // 유효 시간 내 코드 확인 o
        delete this.emailVerificationcode[email];
        return {
          success: true,
          message: "이메일 인증이 성공적으로 완료되었습니다.",
        };
      } else {
        // 시간 만료
        return {
          success: false,
          message: "인증 코드의 유효 시간이 만료되었습니다.",
        };
      }
    } else {
      // 코드 다름
      return { success: false, message: "인증 코드가 일치하지 않습니다." };
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
    if (!user) {
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

  // 비밀번호 x , 꿀조합 수정
  async updateUserRecipe(userId, userData) {
    try {
      const updatedUser = await User.findByIdAndUpdate(userId, { $set: userData }, { new: true });
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserService();

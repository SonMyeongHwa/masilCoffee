const express = require("express");
const UserRouter = express.Router();
const userService = require("../services/user-service");
const asyncHandler = require("../middlewares/async-handler");
const ResponseHandler = require("../middlewares/res-handler.js");
const JwtMiddleware = require("../middlewares/jwt-handler");
const bcrypt = require("bcrypt");
const JWT = require("../utils/jwt-token");

// 회원가입 (인증코드발송) 및 비밀번호 변경
UserRouter.post("/signup/send-mail", async (req, res) => {
  try {
    const { email } = req.body;
    const result = await userService.transportVerificationCode(email);

    if (result.success) {
      res.status(200).json({
        success: true,
        message: "인증 코드가 성공적으로 전송되었습니다.",
      });
    } else {
      res.status(500).json({ success: false, message: "인증 코드 전송에 실패했습니다." });
    }
  } catch (error) {
    console.error("인증 코드 전송 중 오류 발생:", error);
    res.status(500).json({ success: false, message: "인증 코드 전송에 실패했습니다." });
  }
});

// 회원가입 (인증코드 확인) 및 비밀번호 변경
UserRouter.post("/signup/verify-code", async (req, res) => {
  const { email, code } = req.body;
  try {
    const verificationResult = await userService.verifyCode(email, code);
    if (verificationResult.success) {
      res.status(200).json({ message: "이메일 인증이 완료되었습니다." });
    } else {
      res.status(400).json({ error: verificationResult.message });
    }
  } catch (error) {
    res.status(500).json({ error: "서버 오류" });
  }
});

// 회원가입
UserRouter.post("/signup", async (req, res) => {
  try {
    const { name, email, nickname, phone, password } = req.body;

    // 필수 필드가 누락되지 않았는지 확인
    if (!name || !email || !nickname || !phone || !password) {
      return res.status(400).json({ error: "모든 필수 정보를 입력하세요." });
    }

    // 이메일 형식이 올바른지 확인
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "올바른 이메일 형식이 아닙니다." });
    }

    // 이메일 중복 확인
    const existingEmailUser = await userService.findUserByEmail(email);
    if (existingEmailUser) {
      return res.status(400).json({ error: "이미 등록된 이메일 주소입니다." });
    }

    // 닉네임 중복 확인
    const existingNicknameUser = await userService.findUserByNickname(nickname);
    if (existingNicknameUser) return res.status(400).json({ error: "이미 사용 중인 닉네임입니다." });

    const newUser = await userService.createUser({
      name,
      email,
      nickname,
      phone,
      password,
    });
    res.status(201).json({ message: "회원가입이 완료되었습니다.", user: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "서버 오류" });
  }
});

// 사용자 로그인
UserRouter.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const authUser = await userService.authenticateUser(email, password);
    // 로그인 실패
    if (!authUser.success) {
      if (authUser.fail == "email") {
        // 이메일 실패
        return ResponseHandler.respondWithError(res, "가입되지 않은 이메일 입니다.", 401);
      } else {
        // 비밀번호 실패
        return ResponseHandler.respondWithError(res, "로그인 실패. 비밀번호가 올바르지 않습니다.", 401);
      }
    }
    // 로그인 성공
    const tokenPayload = { user: authUser.user };
    const token = JWT.createToken(tokenPayload);
    ResponseHandler.respondWithSuccess(res, {
      user: authUser.user.role,
      token,
    });
  })
);

// 사용자 로그아웃 , 클라에서 토큰 삭제해야함!
UserRouter.post("/logout", JwtMiddleware.checkToken, (req, res) => {
  ResponseHandler.respondWithSuccess(res, {
    message: "로그아웃이 완료되었습니다.",
  });
});

// 사용자 로그인 상태 확인
UserRouter.get("/check-login", JwtMiddleware.checkToken, (req, res) => {
  try {
    if (JWT.isTokenPresent(req)) {
      res.status(200).json({ isLoggedIn: true, user: req.user });
    } else {
      res.status(200).json({ isLoggedIn: false });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "서버 오류" });
  }
});

// ---------------- User -------------------- //

// 본인 상세 정보
UserRouter.get(
  "/",
  JwtMiddleware.checkToken,
  asyncHandler(async (req, res) => {
    const userIdFromToken = req.tokenData._id;
    const user = await userService.getUserByToken(userIdFromToken);
    if (!user) {
      return ResponseHandler.respondWithError(res, "사용자를 찾을 수 없습니다.", 404);
    }
    ResponseHandler.respondWithSuccess(res, user);
  })
);

// 회원 정보 수정 (사용자)
UserRouter.patch(
  "/",
  JwtMiddleware.checkToken,
  asyncHandler(async (req, res) => {
    const user = await userService.getUserById(req.tokenData._id);
    const checkPasswordMatch = await bcrypt.compare(req.body.checkPassword, user.password);
    const updatedUserData = {
      ...req.body,
      role: user.role,
    };
    if (checkPasswordMatch) {
      const updatedUser = await userService.updateUser(req.tokenData._id, updatedUserData);
      ResponseHandler.respondWithSuccess(res, updatedUser);
    } else {
      ResponseHandler.respondWithError(res, 401, "비밀번호가 일치하지 않습니다.");
    }
  })
);

// 회원탈퇴 (사용자)
UserRouter.delete(
  "/",
  JwtMiddleware.checkToken,
  asyncHandler(async (req, res) => {
    const user = await userService.deleteUser(req.tokenData._id);
    ResponseHandler.respondWithSuccess(res, user);
  })
);

// ---------------- Admin -------------------- //

// 모든 사용자 가져오기 (관리자)
UserRouter.get(
  "/admin",
  JwtMiddleware.checkToken,
  JwtMiddleware.checkAdmin,
  asyncHandler(async (req, res) => {
    try {
      const users = await userService.getAllUsers();
      ResponseHandler.respondWithSuccess(res, { users, token: req.user });
    } catch (error) {
      console.error("모든 사용자 가져오기 중 오류 발생:", error);
      ResponseHandler.respondWithError(res, 500, "사용자 정보를 가져오는 중 오류가 발생했습니다.");
    }
  })
);

// 특정 사용자 가져오기 (관리자)
UserRouter.get(
  "/admin/:userId",
  JwtMiddleware.checkToken,
  JwtMiddleware.checkAdmin,
  asyncHandler(async (req, res) => {
    try {
      const user = await userService.getUserById(req.params.userId);
      if (!user) {
        return ResponseHandler.respondWithNotfound(res);
      }
      ResponseHandler.respondWithSuccess(res, user);
    } catch (error) {
      console.error("특정 사용자 가져오기 중 오류 발생:", error);
      ResponseHandler.respondWithError(res, 500, "사용자 정보를 가져오는 중 오류가 발생했습니다.");
    }
  })
);

// 회원 정보 수정 (관리자)
UserRouter.patch(
  "/admin/:userId",
  JwtMiddleware.checkToken,
  JwtMiddleware.checkAdmin,
  asyncHandler(async (req, res) => {
    try {
      const user = await userService.updateUser(req.params.userId, req.body);
      ResponseHandler.respondWithSuccess(res, user);
    } catch (error) {
      console.error("회원 정보 수정 중 오류 발생:", error);
      ResponseHandler.respondWithError(res, 500, "회원 정보를 수정하는 중 오류가 발생했습니다.");
    }
  })
);

// 회원탈퇴 (관리자)
UserRouter.delete(
  "/admin/:userId",
  JwtMiddleware.checkToken,
  JwtMiddleware.checkAdmin,
  asyncHandler(async (req, res) => {
    try {
      const user = await userService.deleteUser(req.params.userId);
      ResponseHandler.respondWithSuccess(res, user);
    } catch (error) {
      console.error("회원 탈퇴 중 오류 발생:", error);
      ResponseHandler.respondWithError(res, 500, "회원을 탈퇴하는 중 오류가 발생했습니다.");
    }
  })
);

// 회원정보 수정(꿀조합)
UserRouter.patch(
  "/userRecipe",
  JwtMiddleware.checkToken,
  asyncHandler(async (req, res) => {
    try {
      const userData = req.body;
      const updatedUser = await userService.updateUserRecipe(req.tokenData._id, userData);
      if (!updatedUser) {
        return ResponseHandler.respondWithNotFound(res, "User not found");
      }
      ResponseHandler.respondWithSuccess(res, updatedUser);
    } catch (err) {
      ResponseHandler.respondWithError(res, 500, "유저 정보를 수정하는 중 오류가 발생했습니다.");
    }
  })
);

module.exports = UserRouter;

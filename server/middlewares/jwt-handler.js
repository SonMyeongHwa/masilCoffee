const JWT = require("../utils/jwt-token");

class JwtMiddleware {
  static checkToken(req, res, next) {
    const authorizationHeader = req.header("Authorization");

    if (!authorizationHeader) {
      return res.status(401).json({ error: "인증 실패 (토큰이 없습니다)" });
    }

    try {
      const token = authorizationHeader.split(" ")[1];
      req.tokenData = JWT.verifyToken(token);
      next();
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  }

  // 토큰이 없어도 일단 Null 보내기
  static checkTokenOrNull(req, res, next) {
    const authorizationHeader = req.header("Authorization");

    try {
      if (!authorizationHeader) {
        req.tokenData = null;
        return next();
      }

      const token = authorizationHeader.split(" ")[1];
      req.tokenData = JWT.verifyToken(token);
      next();
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  }

  // 관리자 권환 확인하기
  static checkAdmin(req, res, next) {
    if (req.tokenData.role === "Admin") {
      next();
    } else {
      return res.status(403).json({ error: "권한이 없습니다." });
    }
  }
}

module.exports = JwtMiddleware;

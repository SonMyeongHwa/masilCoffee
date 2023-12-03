const JWT = require("../utils/jwt-token");

class JwtMiddleware {
  // 토큰 유무 확인하기, Header에서 토큰만 추출
  static checkToken(req, res, next) {
    if (!JWT.isTokenPresent(req)) {
      return res.status(401).json({ error: "인증 실패 (토큰이 없습니다)" });
    }
    try {
      const token = req.header("Authorization").split(" ")[1];
      req.tokenData = JWT.verifyToken(token);
      next();
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  }

  // 관리자 혹은 본인
  static checkGrant(req, res, next) {
    if (req.tokenData.role === "Admin") {
      next();
    } else {
      return res.status(403).json({ error: "권한이 없습니다." });
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

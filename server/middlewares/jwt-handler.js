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

  // 본인 또는 관리자 확인
  static checkOwnOrAdmin(req, res, next) {
    const { role, _id } = req.tokenData;
    const { userId } = req.params;

    if (role === "Admin" || _id === userId) {
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

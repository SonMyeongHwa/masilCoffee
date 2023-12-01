const { Router } = require("express");

const PingRouter = Router();

PingRouter.get("/", (req, res) => {
  res.send("Pong");
});

module.exports = PingRouter;

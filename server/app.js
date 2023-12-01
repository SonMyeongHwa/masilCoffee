const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const imageUploader = require("./middlewares/s3-handler");

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());

const PingRouter = require("./routes/ping-router");
const ProductRouter = require("./routes/product-router");
const BoardRouter = require("./routes/board-router");
const UserRouter = require("./routes/user-router");
const CommentRouter = require("./routes/comment-router");
const LikeRouter = require("./routes/like-router");
const OrderRouter = require("./routes/order-router");
const OrderOptionRouter = require("./routes/orderoption-router");

// mongoose
mongoose
  .connect(process.env.MONGO_URL, {
    dbName: process.env.MONGO_DB_NAME,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//router
app.use("/api/v1", PingRouter);
app.use("/api/v1/products", ProductRouter);
app.use("/api/v1/boards", BoardRouter);
app.use("/api/v1/users", UserRouter);
app.use("/api/v1/comment", CommentRouter);
app.use("/api/v1/like", LikeRouter);
app.use("/api/v1/order", OrderRouter);
app.use("/api/v1/orderOption", OrderOptionRouter);

//PORT
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

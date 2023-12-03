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
// single("여기이름이랑") Key 값이 일치해야함
// posturl : http://localhost:5000/test/image?directory=product
// /test/image 는 라우터 호출하는 주소,
// ? 뒤부터는 directory 는 aws 에 저장되는 폴더
// product는 그 폴더명
app.post("/test/image", imageUploader.single("image"), (req, res) => {
  if (req.file) {
    // 이미지 업로드 성공
    res.send("good");
  } else {
    // 이미지 업로드 실패
    console.error("Image upload failed");
    res.status(500).send("Image upload failed");
  }
});

//PORT
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

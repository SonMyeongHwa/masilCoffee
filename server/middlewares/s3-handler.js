const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

AWS.config.update({
  region: "ap-northeast-2",
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const s3 = new AWS.S3();
const allowedExtensions = [".png", ".jpg", ".jpeg", ".bmp"];

const imageUploader = multer({
  storage: multerS3({
    s3,
    bucket: process.env.AWS_BUCKET_NAME,
    key: (req, file, callback) => {
      const uploadDirectoy = req.query.directory ?? "";
      const extension = path.extname(file.originalname);
      if (!allowedExtensions.includes(extension)) {
        return callback(new Error("wrong Extension"));
      }
      callback(null, `${uploadDirectoy}/${Date.now()}_${file.originalname}`);
    },
  }),
});

module.exports = imageUploader;

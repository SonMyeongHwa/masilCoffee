const nodemailer = require("nodemailer");
require("dotenv").config();

const NAVER_EMAIL = process.env.NAVER_EMAIL;
const NAVER_PASSWORD = process.env.NAVER_PASSWORD;

const smtpTransporter = nodemailer.createTransport({
  pool: true,
  maxConnections: 1,
  service: "naver",
  host: "smtp.naver.com",
  port: 587,
  auth: {
    user: NAVER_EMAIL,
    pass: NAVER_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendMail = async (res, to, num) => {
  const mailOptions = {
    from: NAVER_EMAIL,
    to,
    subject: "MasilCoffee: 인증 관련 메일 입니다.",
    html: `<h1>아래 인증번호를 입력해주세요 \n</h1> <h3> [ ${num} ] </h3>`,
  };

  try {
    const result = await smtpTransporter.sendMail(mailOptions);
    res.status(200).json({ message: "이메일이 발송 되었습니다." });
  } catch (error) {
    res.status(500).json({ message: "이메일 발송 실패" });
  }
};

module.exports = { sendMail };

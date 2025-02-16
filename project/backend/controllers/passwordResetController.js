const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const nodemailer = require("nodemailer");

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.requestPasswordReset = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }

    const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: "1h" });

    const resetLink = `http://localhost:3000/password-reset/${token}`;
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Сброс пароля",
      text: `Перейдите по ссылке для сброса пароля: ${resetLink}`,
    });

    res.json({ message: "Ссылка для сброса пароля отправлена" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ошибка сервера" });
  }
};

exports.confirmPasswordReset = async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const user = await User.findByPk(decoded.userId);
    if (!user) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await user.update({ password: hashedPassword });

    res.json({ message: "Пароль успешно изменен" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ошибка сервера" });
  }
};

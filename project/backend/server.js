// server.js (Основной сервер)
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const authRoutes = require("./routes/authRoutes");
const heroRoutes = require("./routes/heroRoutes");
const userRoutes = require("./routes/userRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/heroes", heroRoutes);
app.use("/users", userRoutes);
app.use("/notifications", notificationRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  console.log("✅ База данных подключена");
  app.listen(PORT, () => console.log(`🚀 Сервер запущен на порту ${PORT}`));
});

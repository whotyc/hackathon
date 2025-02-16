const Notification = require("../models/Notification");

exports.getUserNotifications = async (req, res) => {
  try {
    const notifications = await Notification.findAll({ where: { userId: req.params.userId } });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
};

exports.sendNotification = async (req, res) => {
  try {
    const notification = await Notification.create(req.body);
    res.status(201).json({ message: "Уведомление отправлено", notification });
  } catch (err) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
};

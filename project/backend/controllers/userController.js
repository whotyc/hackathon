const banUser = async (req, res) => {
  try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      if (!user) return res.status(404).json({ message: "Пользователь не найден" });

      user.isBanned = true;
      await user.save();

      res.json({ message: "Пользователь заблокирован" });
  } catch (error) {
      res.status(500).json({ message: "Ошибка сервера" });
  }
};

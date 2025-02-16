const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

const login = async (req, res) => {
    const { login, password } = req.body;

    try {
        const user = await User.findOne({ where: { login } });
        if (!user) {
            return res.status(404).json({ message: "Пользователь не найден" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Неверный пароль" });
        }

        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
        );

        res.json({ token, role: user.role });
    } catch (error) {
        res.status(500).json({ message: "Ошибка сервера" });
    }
};

const logout = (req, res) => {
    res.json({ message: "Выход выполнен" });
};

module.exports = { login, logout };

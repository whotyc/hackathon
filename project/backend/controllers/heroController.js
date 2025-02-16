const getPendingHeroes = async (req, res) => {
  const heroes = await Hero.findAll({ where: { status: "pending" } });
  res.json(heroes);
};

const approveHero = async (req, res) => {
  const { id } = req.params;
  const hero = await Hero.findByPk(id);
  if (!hero) return res.status(404).json({ message: "Боец не найден" });

  hero.status = "approved";
  await hero.save();
  res.json({ message: "Форма одобрена" });
};

const rejectHero = async (req, res) => {
  const { id } = req.params;
  const hero = await Hero.findByPk(id);
  if (!hero) return res.status(404).json({ message: "Боец не найден" });

  hero.status = "rejected";
  await hero.save();
  res.json({ message: "Форма отклонена" });
};
const updateHero = async (req, res) => {
  const { id } = req.params;
  const hero = await Hero.findByPk(id);
  if (!hero) return res.status(404).json({ message: "Боец не найден" });

  await hero.update(req.body);
  res.json({ message: "Данные обновлены" });
};

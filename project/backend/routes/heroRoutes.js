router.get("/pending", heroController.getPendingHeroes);
router.put("/approve/:id", heroController.approveHero);
router.put("/reject/:id", heroController.rejectHero);

router.put("/update/:id", heroController.updateHero);

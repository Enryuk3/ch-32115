const { Router } = require("express");
const productsController = require("../controllers/productsController");
const router = Router();

router.get("/", productsController.getAll);
router.get("/add", productsController.form);
router.post("/add", productsController.add);

module.exports = router;

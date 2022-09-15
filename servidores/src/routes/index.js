const { Router } = require("express");
const router = Router();
const productsController = require("../controllers/productsController");

const {
  getAll,
  findProduct,
  deleteById,
  addProduct,
} = productsController;

router.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/src/files/index.html");
});

router.get("/api/productos", getAll);

router.get("/api/productos/:id", findProduct);

router.post("/api/productos", addProduct);

router.delete("/api/productos/:id", deleteById);

module.exports = router;

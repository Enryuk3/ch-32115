let productos = [];
let id = 1;
exports.getAll = (req, res, next) => {
  res.render("productos", { productos });
};
exports.add = (req, res, next) => {
  const { nombre, precio, img } = req.body;
  const newProduct = { id, nombre, precio, img };
  productos.push(newProduct);
  id = id + 1;

  res.render("form");
};

exports.form = (req, res, next) => {
  try {
    res.render("form");
  } catch (e) {
    next(e);
  }
};

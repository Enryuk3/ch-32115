const fs = require('fs');

const productsArray = [];

const products = JSON.parse(fs.readFileSync('src/productos.json', 'utf-8'));

const getAll = (req, res) => {
  res.send(products);
};

const findProduct = (req, res) => {
  const { id } = req.params;
  console.log(products);

  const findProduct = products.find((num) => {
    return (num.id = id);
  });
  console.log(findProduct);
  res.send(findProduct);
};

const deleteAll = (req, res) => {
  products = [];
  res.send(products);
};

const deleteById = (req, res) => {
  const { id } = req.params;

  const filterArray = products.filter((num) => {
    return (num.id = id);
  });
  console.log(filterArray);
  res.send(filterArray);
};

const addProduct = (req, res) => {
  const { body } = req;

  try {
    // if (!body.producto || !body.precio || !body.stock) return res.send('Error, debes ingresar información valida');

    productsArray.length > 0 ? (body.id = productsArray.length + 1): (body.id = 1);
    productsArray.push(body);
    console.log(productsArray)
    res.send(`Se agrego correctamente el producto : ${JSON.parse(body)}`);

    fs.writeFileSync("/src/productos.json", JSON.stringify(productsArray));
  } catch (error) {
    res.status(400).send(`Se produjo un error : ${error}`);

  }
};

const editProduct = (req, res, next) => {
  const { id } = req.params;
  const { nombre, precio, cantidad } = req.body;
  try {
    const prodEdit = productos.find((producto) => producto.id == id);
    if (!prodEdit) {
      res.send({ error: "producto no encontrado" });
    } else {
      products.pop(prodEdit);
      const editado = { id: id, nombre, cantidad, precio };
      products.push(editado);
      res.send(editado);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  deleteById,
  findProduct,
  deleteAll,
  addProduct,
  editProduct,
};

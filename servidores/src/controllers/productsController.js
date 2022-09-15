const fs = require("fs");

let productsArray = [];

const readProductFile = async () => {
  try {
    const productFile = await fs.promises.readFile(
      "src/productos.json",
      "utf-8"
    );
    productsArray = JSON.parse(productFile);
  } catch (error) {
    console.log(error);
  }
};
const getAll = async(req, res) => {
  await readProductFile();
  res.send(productsArray);
};

const findProduct = async(req, res) => {
  const { id } = req.params;
  await readProductFile();
  try {
    const findProduct = productsArray.find((product) => product.id == id);
    if (!findProduct) {
      res.send({ error: "producto no encontrado" });
    } else{
      res.send(findProduct);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteAll = (req, res) => {
  productsArray = [];
  res.send(productsArray);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  await readProductFile();
  try {
    const filterArray = productsArray.filter((product) => product.id == id);
    res.send(filterArray);
    res.status(200).json({mensaje: 'Producto eliminado con éxito', productos: productsArray});
  } catch (error) {
    res.status(400).json(error);
  }
};

const addProduct = async (req, res) => {
  const { body } = req;
  await readProductFile();
  try {
    // const newProduct = {
      //   producto: body.producto,
      //   precio: body.precio,
      //   stock: body.stock,
      //   id: productsArray.length + 1,
      // };
      let id = productsArray.length === 0 ? 1 : productsArray[productsArray.length - 1].id + 1;
      productsArray.push({...body, id});
      await fs.promises.writeFile("src/productos.json", JSON.stringify(productsArray));
      res.status(200).json({mensaje: 'Producto agregado con éxito', productos: productsArray});
    // res.send("Producto agregado con éxito", {productos: productsArray});
  }
  catch (error) {
    res.status(400).json(error);
  }

    // if (!body.producto || !body.precio || !body.stock) return res.send('Error, debes ingresar información valida');

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

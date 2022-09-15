import Contenedor from "./contenedor.js";
import express from "express";

const contenedor = new Contenedor("productos.txt");
const app = express();

app.get("/productos",async (req, res) => {
  const productos = await contenedor.getAll();
  res.json(productos);

  // contenedor.getAll().then((data) => res.json(data));
});

app.get('/productoRandom', async(req, res) => {
  const random = Math.floor(Math.random() * 3) + 1;
  const producto = await contenedor.getById(random)
  res.json(producto);

  // contenedor.getAll().then((data) => {
  //   const random = Math.floor(Math.random() * data.length);
  //   res.json(data[random]);
  // });
})

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// server.on('error', error => console.log(`Server error: ${error}`))

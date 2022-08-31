// Implementar programa que contenga una clase llamada Contenedor que reciba el nombre del archivo con el que va a trabajar e implementarse los siguientes métodos

const fs = require("fs").promises;

class Contenedor {
  constructor(nombreArchivo) {
    this.nombreArchivo = nombreArchivo;
  }

  async save(objeto) {
    let info;
    try {
      info = await fs.readFile(this.nombreArchivo, "utf-8");
    } catch {
      info = "[]";
    }
    const contenido = JSON.parse(info);

    if (contenido.length == 0) {
      // Si el archivo está vacío, el primer objeto tendrá id 1
      objeto.id = 1;
    } else {
      // Si el archivo no está vacío, el id del objeto será el último id + 1
      objeto.id = contenido[contenido.length - 1].id + 1;
    }
    contenido.push(objeto);

    console.log("id", objeto.id, "guardado con éxito");
    await fs.writeFile(this.nombreArchivo, JSON.stringify(contenido));
  }

  async getById(id) {
    try {
      const info = await fs.readFile(this.nombreArchivo, "utf-8");
      const contenido = JSON.parse(info);
      const producto = contenido.find((objeto) => objeto.id === id);
      producto ? console.log(producto) : console.log("null");
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    try {
      const info = await fs.readFile(this.nombreArchivo, "utf-8");
      const contenido = JSON.parse(info);
      console.log(contenido);
      return contenido;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteById(id) {
    try {
      const info = await fs.readFile(this.nombreArchivo, "utf-8");
      const contenido = JSON.parse(info);
      const infoFiltrada = contenido.filter((objeto) => objeto.id !== id);
      await fs.writeFile(this.nombreArchivo, JSON.stringify(infoFiltrada));
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteAll() {
    try {
      await fs.writeFile(this.nombreArchivo, JSON.stringify([]));
    } catch (error) {
      throw new Error(error);
    }
  }
}

let productos = new Contenedor("productos.txt");
productos.save(
  {
    title: "Mochila",
    price: 456.78,
    thumbnail:
    "https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Backpack-512.png/",
  }
);

// productos.getById(3)

// productos.getAll();

// productos.deleteById(4);

// productos.deleteAll()

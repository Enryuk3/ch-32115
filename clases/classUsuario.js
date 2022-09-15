class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }
  addMascotas(mascota){
    this.mascotas.push(mascota);
  }
  countMascotas(){
    return `El número de mascotas es ${this.mascotas.length}`;
  }
  addBook(nombre, autor) {
    this.libros.push({
      nombre,
      autor
    });
  }
  getBookNames() {
    return this.libros.map(libro => libro.nombre);
  }
}

const usuario1 = new Usuario('Juan', 'Perez', [{nombre: 'El señor de los anillos', autor: 'J.R.R.Tolkien'},{nombre: 'El corazón de la piedra', autor: 'José María García López' }], ["Perro", "Gato", "Conejo"]);

console.log(usuario1.getFullName());
usuario1.addMascotas("Pajarito");
console.log(usuario1.countMascotas());
usuario1.addBook("El Canto Gregoriano", "Juan Carlos Ascencio");
console.log(usuario1.getBookNames());
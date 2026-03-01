/*9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado.
 */

class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  emitirSonido() {
    console.log(`El animal hace`);
  }
}

class Perro extends Animal {
  emitirSonido() {
    console.log(`guau🐶`);
  }
}

class Gato extends Animal {
  emitirSonido() {
    console.log(`miau🐈`);
  }
}

const perro = new Perro("Claudio", "3 años");
const gato = new Gato("Gris", "5 años");

perro.emitirSonido();
gato.emitirSonido();

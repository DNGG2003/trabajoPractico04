/*8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".
 */

class Persona {
  constructor(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
  }

  saludar() {
    document.writeln(
      `Hola mi nombre es ${this.nombre}, tengo ${this.edad} años y mi profesión es ${this.profesion} <br>`,
    );
  }

  despedirse() {
    document.writeln(`Adios, que tengan un excelente día <br>`);
  }
}

const persona1 = new Persona("Exequiel", 36, "Contador público");
const persona2 = new Persona("Nicole", 25, "Profesora de ingles");

persona1.saludar();
persona1.despedirse();
persona2.saludar();
persona2.despedirse();

/*eneraciones - Dificultad:  🟢🟡🔴

5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:



esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
 */

class Persona {
  #dni;
  constructor(nombre, edad, dni, sexo, peso, altura, anioDeNacimiento) {
    this._nombre = nombre;
    this._edad = edad;
    this.#dni = dni;
    this._sexo = sexo;
    this._peso = peso;
    this._altura = altura;
    this._anioDeNacimiento = anioDeNacimiento;
  }

  mostrarGeneracion() {
    if (this._anioDeNacimiento > 1994 && this._anioDeNacimiento < 2010) {
      document.writeln(
        `Perteneces a la generación Z. Rasgo: Irreverencia😋 <br><hr>`,
      );
    } else if (this._anioDeNacimiento > 1981 && this._anioDeNacimiento < 1193) {
      document.writeln(
        `Perteneces a la generación Y. Rasgo: Frustración😖 <br><hr>`,
      );
    } else if (this._anioDeNacimiento > 1969 && this._anioDeNacimiento < 1980) {
      document.writeln(
        `Perteneces a la generación X. Rasgo: Obsesión por el éxito😎 <br><hr>`,
      );
    } else if (this._anioDeNacimiento > 1949 && this._anioDeNacimiento < 1968) {
      document.writeln(
        `Perteneces a la generación Baby Boom. Rasgo: Ambición🤑 <br><hr>`,
      );
    } else if (this._anioDeNacimiento > 1981 && this._anioDeNacimiento < 1193) {
      document.writeln(
        `Perteneces a la generacion "Silent generation". Rasgo: Austeridad😐 <br><hr>`,
      );
    } else {
      document.writeln(`No perteneces a ninguna generación`);
    }
  }

  mostrarDatos() {
    document.writeln(`
      <p>
        <b>Nombre: </b>${this._nombre} <br><hr>
        <b>Edad: </b> ${this._edad} <br><hr>
        <b>DNI: </b> ${this.#dni} <br><hr>
        <b>Sexo: </b> ${this._sexo} <br><hr>
        <b>Peso: </b> ${this._peso} <br><hr>
        <b>Altura: </b> ${this._altura} <br><hr>
        <b>Año de nacimiento: </b> ${this._anioDeNacimiento} <br><hr>
      </p>
    `);
  }

  esMayorDeEdad() {
    if (this._edad >= 18) {
      document.writeln(`${this._nombre} sos mayor de edad<br><hr>`);
    } else {
      document.writeln(`${this._nombre} sos menor de edad<br><hr>`);
    }
  }

  generarDni() {
    return document.writeln(`DNI generado: 
      ${Math.floor(10000000 + Math.random() * 90000000)} <br> <hr>
    `);
  }
}

const persona1 = new Persona(
  "Diego",
  22,
  44703931,
  "Masculino",
  "90k",
  "1.75m",
  2003,
);

persona1.mostrarDatos();
persona1.mostrarGeneracion();
persona1.generarDni();
persona1.esMayorDeEdad();

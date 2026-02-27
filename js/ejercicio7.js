/*Agenda telefónica - Dificultad:  🟢🟡🔴

7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola. */

class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

class Agenda {
  constructor(tamanio = 10) {
    this.tamanio = tamanio;
    this.contactos = [];
  }

  agendaLlena() {
    return this.contactos.length === this.tamanio;
  }

  aniadirContacto(contacto) {
    if (this.agendaLlena()) {
      console.log(`La agenda está llena`);
      return;
    }
    
    this.contactos.push(contacto);
    console.log(`El contacto ${contacto.nombre} fue agregado correctamente`);

    if (this.existeContacto(contacto)) {
      console.log(`El contacto ${contacto.nombre} ya existe`);
      return;
    }
  }

  listarContactos() {
    if (this.contactos.length === 0) {
      console.log(`La agenda está vacia`);
      return;
    }

    console.log(`Lista de contactos:`);

    this.contactos.forEach((contacto) => {
      console.log(
        `Nombre: ${contacto.nombre} - Teléfono: ${contacto.telefono}`,
      );
    });
  }

  existeContacto(contacto) {
    return this.contactos.some(
      (contactoActual) =>
        contactoActual.nombre.toLowerCase() === contacto.nombre.toLowerCase(),
    );
  }

  buscarContacto(nombre) {
    const contactoEncontrado = this.contactos.find(
      (contactoActual) =>
        contactoActual.nombre.toLowerCase() === nombre.toLowerCase(),
    );

    if (contactoEncontrado) {
      console.log(
        `Nombre: ${contactoEncontrado.nombre} - teléfono: ${contactoEncontrado.telefono}`,
      );
    } else {
      console.log(`El contacto ${nombre} no fue encontrado`);
    }
  }

  eliminarContacto(contacto) {
    const indice = this.contactos.findIndex(
      (contactoActual) =>
        contactoActual.nombre.toLowerCase() === contacto.nombre.toLowerCase(),
    );
    if (indice !== -1) {
      this.contactos.splice(indice, 1);
      console.log(`El contacto ${contacto.nombre} fue eliminado correctamente`);
    } else {
      console.log(`El contacto ${contacto.nombre} no existe`);
    }
  }

  huecosLibres() {
    return this.tamanio - this.contactos.length;
  }
}

const agenda = new Agenda();
let opcion;

do {
  opcion = prompt(
    `📱Agenda telefonica
      1 - Añadir contacto
      2 - Listar contacto
      3 - Buscar contacto
      4 - Eliminar contacto
      5 - Ver si agenda esta llena
      6 - Ver huecos libres
      0 - salir
    `,
  );
  switch (opcion) {
    case "1":
      const nombre = prompt(`Ingrese el nombre:`);
      const telefono = prompt(`Ingrese el teléfono`);
      const nuevoContacto = new Contacto(nombre, telefono);
      agenda.aniadirContacto(nuevoContacto);
      break;

    case "2":
      agenda.listarContactos();
      break;

    case "3":
      const buscarContacto = prompt(
        `Ingresa el nombre para buscar el contacto`,
      );
      agenda.buscarContacto(buscarContacto);
      break;

    case "4":
      const nombreContacto = prompt(
        `Ingresa el nombre para eliminar el contacto`,
      );
      const eliminarContacto = new Contacto(nombreContacto, "");
      agenda.eliminarContacto(eliminarContacto);
      break;

    case "5":
      if (agenda.agendaLlena()) {
        console.log(`La agenda está llena.`);
      } else {
        console.log(`La agenda no está llena`);
      }
      break;

    case "6":
      console.log("Huecos libres:", agenda.huecosLibres());
      break;

    case "0":
      console.log(`Saliendo del programa...`);
      break;

    default:
      console.log(`Opción invalida.`);
      break;
  }
} while (opcion !== "0");

/*
console.log(agenda);
*Verificacion de la agenda llena, nos devuelve true si es que esta llena o false si esta vacia o incompleta
console.log(agenda.agendaLlena());

*Verificacion si es que el contacto se agrego correctamente
const contacto1 = new Contacto("Diego", 1304);
agenda.aniadirContacto(contacto1);
console.log(agenda);

*Verificacion de la funcion listarContactos
agenda.listarContactos();

*Verificacion de la funcion existeContacto, nos devuelve true si es que el contacto ya existe o false si el contacto no existe
console.log(agenda.existeContacto(new Contacto("Diego", 1304)));
console.log(agenda.existeContacto(new Contacto("Juan", 1000)));

*Verificacion de la funcion buscarContacto
agenda.buscarContacto("Maria");
agenda.buscarContacto("Diego");

*Verificacion de la funcion eliminarContacto
agenda.eliminarContacto(new Contacto("Diego", 1304));
agenda.listarContactos();

*Verificacion de la funcion huecosLibres
console.log("Huecos libres: ", agenda.huecosLibres());
*/

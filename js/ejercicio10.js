/*10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.

 */

class Aeropuerto {
  constructor(nombreAeropuerto) {
    this.nombreAeropuerto = nombreAeropuerto;
    this.listaDeAviones = [];
  }

  agregarAvion(avion) {
    this.listaDeAviones.push(avion);
  }

  buscarAvion(nombre) {
    const avionEncontrado = this.listaDeAviones.find(
      (avion) => avion.nombre === nombre,
    );
    if (avionEncontrado) {
      console.log(
        `El avión ${nombre} fue encontrado. Destino: ${avionEncontrado.destino}`,
      );
      return avionEncontrado;
    } else {
      console.log(`El avión ${nombre} no fue encontrado`);
      return null;
    }
  }
}

class Avion {
  constructor(nombre, capacidad, destino) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.destino = destino;
    this.listaDePasajeros = [];
  }

  abordar(pasajero) {
    if (this.listaDePasajeros.length < this.capacidad) {
      this.listaDePasajeros.push(pasajero);
      console.log(
        `El pasajero ${pasajero} abordo correctamente al avión ${this.nombre}`,
      );
    } else {
      console.log(
        `El avión ${this.nombre} esta lleno. El pasajero ${pasajero} no pudo abordar al avion`,
      );
    }
  }
}

//Creo el objeto aeropuerto
const aeropuerto = new Aeropuerto("Aeropuerto Internacional");

//Creo los objetos aviones
const avion1 = new Avion("A1", 3, "Argentina");
const avion2 = new Avion("A2", 2, "Noruega");
const avion3 = new Avion("A3", 1, "Argentina");

//Agrego aviones al aeropuerto
aeropuerto.agregarAvion(avion1);
aeropuerto.agregarAvion(avion2);
aeropuerto.agregarAvion(avion3);

// Busco el avion dentro del aeropuerto
const avionBuscado = aeropuerto.buscarAvion("A2");

//Uso el metodo de abordar
if (avionBuscado) {
  avionBuscado.abordar("Dario");
  avionBuscado.abordar("Rocio");
  avionBuscado.abordar("Franco");
  avionBuscado.abordar("Rosa");
}

/*Dificultad:  🟢
1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:

objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó
*/

const auto = {
  color: "gris",
  marca: "volkswagen",
  modelo: "gol trend",
  estado: false, //True = encendido y false = apagado

  encenderAuto: function () {
    this.estado = true;
    document.writeln(`El auto está encendido</br>`);
  },

  apagarAuto: function () {
    this.estado = false;
    document.writeln(`El auto está apagado</br>`);
  },
};

// auto.encenderAuto();
// auto.apagarAuto();

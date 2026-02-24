/*Cuenta bancaria - Dificultad:  🟢🟡
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
 */

const cuentaBancaria = {
  titular: "Alex",
  saldo: 0,

  informar: function () {
    document.writeln(`
      <p>
        <b>Titular: </b> ${this.titular} </br>
        <b>Saldo: </b> ${this.saldo} </br>
      </p>
    `);
  },

  ingresar: function (cantidad) {
    this.saldo = cantidad + this.saldo;
    document.writeln(`
      <p>
        <b>Dinero ingresado:</b> ${this.saldo}
      </p>
    `);
  },

  extraer: function (cantidad) {
    this.saldo = this.saldo - cantidad;
    document.writeln(`
      <p>
        <b>Saldo extraido:</b> ${this.saldo}
      </p>
    `);
  },
};

cuentaBancaria.informar();
cuentaBancaria.ingresar(10000);
cuentaBancaria.extraer(5000);
cuentaBancaria.informar();

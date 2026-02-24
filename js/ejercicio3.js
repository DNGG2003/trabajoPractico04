/*Dificultad:  🟢
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
 */

class Rectangulos {
  constructor(alto, ancho) {
    this._alto = alto;
    this._ancho = ancho;
  }

  get ancho() {
    return this._ancho;
  }

  set ancho(nuevoAncho) {
    if (nuevoAncho > 0) {
      this._ancho = nuevoAncho;
    } else {
      alert(`El ancho debe ser mayor a 0`);
    }
  }

  get alto() {
    return this._alto;
  }

  set alto(nuevoAlto) {
    if (nuevoAlto > 0) {
      this._alto = nuevoAlto;
    } else {
      alert(`El alto debe ser mayor a 0`);
    }
  }

  calcularArea() {
    return this._alto * this._ancho;
  }

  calcularPerimetro() {
    return 2 * (this._alto + this._ancho);
  }

  mostrarPropiedades() {
    document.writeln(`
      <p>
        <b>Alto:</b> ${this._alto} <br> <hr>
        <b>Ancho:</b> ${this.ancho} <br> <hr>
      </p>
    `);
  }
}

const rectangulo1 = new Rectangulos(10, 20);

rectangulo1.mostrarPropiedades();
document.writeln(`
  <p>
    <b>Area: </b> ${rectangulo1.calcularArea()} <br> <hr>
    <b>Perimetro: </b> ${rectangulo1.calcularPerimetro()} <br> <hr>
  </p>
`);

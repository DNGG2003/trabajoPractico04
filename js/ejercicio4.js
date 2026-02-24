/*Producto - Dificultad:  🟢🟡

4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

 */

class Producto {
  constructor(codigo, nombre, precio) {
    this._codigo = codigo;
    this._nombre = nombre;
    this._precio = precio;
  }

  visualizarDatos() {
    document.writeln(`
    <p>
    <b>Nombre del producto: </b> ${this._nombre} <br><hr>
    <b>Codigo del producto: </b> ${this._codigo} <br><hr>
      <b>Precio del producto: </b> ${this._precio} <br><hr>
    </p>
  `);
  }
}

const producto1 = new Producto(1304, "Aceite Cañuelas", 3200);
const producto2 = new Producto(1305, "Fresh 1.5L", 1500);
const producto3 = new Producto(1306, "Coca cola retornable 2.5", 3500);

const productos = [producto1, producto2, producto3];

for (let i = 0; i < productos.length; i++) {
  productos[i].visualizarDatos();
}

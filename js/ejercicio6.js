/*Libros - Dificultad:  🟢🟡🔴
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
 */

class Libro {
  constructor(isbn, titulo, autor, numeroDePaginas) {
    this._isbn = isbn;
    this._titulo = titulo;
    this._autor = autor;
    this._numeroDePaginas = numeroDePaginas;
  }

  get isbn() {
    return this._isbn;
  }

  set isbn(nuevoIsbn) {
    if (nuevoIsbn > 0) {
      this._isbn = nuevoIsbn;
    }
  }

  get titulo() {
    return this._titulo;
  }

  set titulo(nuevoTitulo) {
    if (nuevoTitulo.trim().length > 0) {
      this._titulo = nuevoTitulo;
    }
  }

  get autor() {
    return this._autor;
  }

  set autor(nuevoAutor) {
    if (nuevoAutor.trim().length > 0) {
      this._autor = nuevoAutor;
    }
  }

  get numeroDePaginas() {
    return this._numeroDePaginas;
  }

  set numeroDePaginas(nuevaCantidadDePaginas) {
    if (nuevaCantidadDePaginas > 0) {
      this._numeroDePaginas = nuevaCantidadDePaginas;
    }
  }

  mostrarLibro() {
    document.writeln(`
      <p>
        El libro <b>${this.titulo}</b> con ISBN <b>${this.isbn}</b> por el autor <b>${this.autor}</b> tiene <b> ${this.numeroDePaginas}</b> páginas
      </p> <hr>
    `);
  }
}

const libro1 = new Libro(1302, "La historia de Diego", "Diego Giménez", 1302);
const libro2 = new Libro(1303, "La historia de Nicole", "Nicole Soria", 1303);
const libro3 = new Libro(
  1304,
  "La historia de Nicole y Diego",
  "Nicole y Diego",
  1304,
);

libro1.mostrarLibro();
libro2.mostrarLibro();
libro3.mostrarLibro();

if (
  libro1.numeroDePaginas > libro2.numeroDePaginas &&
  libro1.numeroDePaginas > libro3.numeroDePaginas
) {
  document.writeln(
    `El libro <b>${libro1.titulo}</b> con <b>${libro1.numeroDePaginas}</b> páginas</b>`,
  );
} else if (
  libro2.numeroDePaginas > libro1.numeroDePaginas &&
  libro2.numeroDePaginas > libro3.numeroDePaginas
) {
  document.writeln(
    `El libro <b>${libro2.titulo}</b> con <b>${libro2.numeroDePaginas}</b> páginas</b>`,
  );
} else {
  document.writeln(
    `El libro <b>${libro3.titulo}</b> con <b>${libro3.numeroDePaginas}</b> páginas</b>`,
  );
}

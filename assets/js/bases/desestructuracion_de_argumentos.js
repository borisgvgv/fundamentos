// La "desestructuración de argumentos" en JavaScript es una técnica que te permite extraer valores de un objeto o un array directamente como parámetros en una función. Esto puede hacer que tu código sea más limpio y legible al evitar la necesidad de acceder a propiedades específicas de objetos o elementos de un array dentro de la función.

// En este ejemplo, la función imprimirDatosUsuario toma un objeto como argumento y utiliza la desestructuración para extraer las propiedades nombre y edad directamente. La función imprimirFrutas toma un array como argumento y desestructura los elementos para obtener las dos primeras frutas.

// Esto puede ser particularmente útil cuando trabajas con funciones que tienen muchos argumentos o cuando deseas evitar el acceso repetitivo a propiedades o elementos de arrays dentro de la función. Ten en cuenta que la desestructuración de argumentos también te permite proporcionar valores predeterminados en caso de que alguna propiedad o elemento no esté presente en el objeto o array que estás desestructurando.

function imprimirDatosUsuario({ nombre, edad }) {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}

const usuario = {
  nombre: 'Juan',
  edad: 30,
};

imprimirDatosUsuario(usuario);

// Usando arrays
function imprimirFrutas([fruta1, fruta2]) {
  console.log(`Fruta 1: ${fruta1}, Fruta 2: ${fruta2}`);
}

const frutas = ['manzana', 'banana'];

console.log(frutas);

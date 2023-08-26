// La "desestructuración de argumentos" en JavaScript es una técnica que te permite extraer valores de un objeto o un array directamente como parámetros en una función. Esto puede hacer que tu código sea más limpio y legible al evitar la necesidad de acceder a propiedades específicas de objetos o elementos de un array dentro de la función.

// Aquí tienes un ejemplo de cómo se ve la desestructuración de argumentos en JavaScript:
// Usando objetos

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

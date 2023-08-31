function crearPersona(nombre, apellido) {
  return {
    nombre: nombre,
    apellido: apellido,
  };
}
const persona = crearPersona("Boris", "Garcés");
console.log(persona);

// Cuando el objeto que se retorna es == al argumento no es necesaria la Key
function crearPersona2(nombre, apellido) {
  return {
    nombre,
    apellido,
  };
}
const persona2 = crearPersona2("Boris", "Garcés");
console.log(persona2);

//Ejemplo anterior como función de flecha
const crearPersona3 = (nombre, apellido) => ({ nombre, apellido });
//Cuando se trara de retornar un objeto se debe encerrar este entre paréntesis, => ({ nombre, apellido });

const persona3 = crearPersona2("Boris", "Garcés");
console.log(persona3);

//--------------------------------

function imprimeArgumentos() {
  console.log(arguments);
}
imprimeArgumentos(10, true, false, "Boris ", "Hola");

//Ejemplo anterior con función de flecha
const imprimeArgumentos2 = (...arguments) => {
  console.log(arguments);
};
imprimeArgumentos2(10, true, false, "Boris ", "Hola");

//-----------------------------------

const imprimeArgumentos3 = (...arguments) => {
  return arguments;
};
let argumentos = imprimeArgumentos3(10, true, false, "Boris ", "Hola");
console.log({ ...argumentos });

//-----------------------------------

const imprimeArgumentos4 = (...arguments) => {
  return arguments;
};
let [edad, vivo, casado, nombre, apellido] = imprimeArgumentos3(
  10,
  true,
  false,
  "Boris ",
  "Hola"
);
console.log({ edad, vivo, casado, nombre, apellido });

//Variación de los tres ejemplos primeros, cambiando el apellido
const { apellido: nuevoApellido } = crearPersona("Boris", "Rasputín");
console.log({ nuevoApellido });

//-----------------------------------------------

let boris = {
  nombre: "Boris",
  apellidos: "Garcés Vernier",
  vivo: true,
  //edad: 40,
  trajes: ["MarK I", "Mark V", "Hulkbuster"],
};

// const imprimePropiedades = (personaje) => {
//   console.log("Nombre:", personaje.nombre);
//   console.log("Apellidos:", personaje.apellidos);
//   console.log("Vivo:", personaje.vivo);
//   console.log("Edad:", personaje.edad);
//   console.log("Trajes:", personaje.trajes);
// };
// imprimePropiedades(boris);

const imprimePropiedades = ({ nombre, apellidos, vivo, edad = 0, trajes }) => {
  console.log({ nombre });
  console.log({ apellidos });
  console.log({ vivo });
  console.log({ edad });
  console.log({ trajes });
};
imprimePropiedades(boris);

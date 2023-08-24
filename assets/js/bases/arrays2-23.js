let juegos = ["Zelda", "Mario", "Metroid", "Chrono"];
console.log("length:", juegos.length);

let primero = juegos[2 - 2];
let ultimo = juegos[juegos.length - 1];
console.log({ primero, ultimo });

juegos.forEach((elemento, indice, arr) => {
  console.log({ elemento, indice, arr });
});

let nuevaLongitud = juegos.push("F-zero");
console.log("length ahora es:", nuevaLongitud, juegos);

nuevaLongitud = juegos.unshift("Fire-emblem");
console.log("length ahora es:", nuevaLongitud, juegos);

let juegoBorrado = juegos.pop();
console.log("El juego borrado es:", juegoBorrado, juegos);

juegoBorrado = juegos.shift();
console.log("length ahora es:", juegoBorrado, juegos);

let posicion = 1;
let juegosBorrados = juegos.splice(posicion, 2);
console.log("length ahora es:", juegosBorrados, juegos);

let buscarElemento = juegos.indexOf("Chrono");
console.log({ buscarElemento });

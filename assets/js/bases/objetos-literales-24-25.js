//sintaxis
//let nombreDelObjeto = { key: valor, }

let personaje = {
  nombre: "Boris",
  apellidos: "Garcés Vernier",
  vivo: false,
  edad: 40,
  coord: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ["MarK I", "Mark V", "Hulkbuster"],
  direccion: {
    zip: "1080, 2095",
    ubicacion: "Malibu, California",
  },
  "ultima-pelicula": "Star War",
};

console.log(personaje);

console.log("Nombre:", personaje.nombre);
console.log("Apellidos:", personaje.apellidos);
console.log("Edad:", personaje.edad);
console.log("Vivo:", personaje.vivo);
console.log("Coordenadas:", personaje.coord);
console.log("Latitud:", personaje.coord.lat);

console.log("Trajes:", personaje.trajes);
console.log("Cantidad de trajes:", personaje.trajes.length);
console.log("Último traje:", personaje.trajes[3 - 1]);
console.log("Dirección:", personaje.direccion);

const x = "vivo";
console.log("Vivo: ", personaje[x]);
console.log("Última película:", personaje["ultima-pelicula"]);

delete personaje.edad;
console.log(personaje);

personaje.casado = true; //añado una nueva key
//convierte el objeto en un array
const entriesPares = Object.entries(personaje);
console.log(entriesPares);
console.log(entriesPares[1]);

Object.freeze(personaje); // después de esta propiedad no podré añadir ni quitar keys pero si modificar propiedades de objetos que ya están
personaje.dinero = 10000000000;
personaje.casado = false;
personaje.direccion.ubicacion = "Costa Rica"; //modificando una key que ya está
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
console.log(propiedades);

const valores = Object.values(personaje);
console.log(propiedades, valores);

let a = 10;
let b = a;
a = 30;
console.log({ a, b });

let juan = { nombre: "juan" };
let ana = { ...juan }; //usar ... para separar los objetos capt 32
ana.nombre = "Ana";
console.log({ juan, ana });

//-------------------

//usar ... para separar los objetos capt 32
const cambiaNombre = ({ ...persona }) => {
  persona.nombre = "tony";
  return persona;
};

let peter = { nombre: "Peter" };
let tony = cambiaNombre(peter);

console.log({ peter, tony });

////

const frutas = ["pera", "manzana", "piña"];
const otrasFrutas = [...frutas]; // se puede usar frutas.slice() pero ... es mucho más rápido

otrasFrutas.push("mango");
console.table({ frutas, otrasFrutas });

const fer = {
  nombre: "Fernando",
  edad: 30,
  imprimir() {
    console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
  },
};

// const pedro = {
//   nombre: "Pedro",
//   edad: 15,
// };

// const melissa = {
//   nombre: "Melissa",
//   edad: 40,
// };

//---------Forma incorrecta---------------------

function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.imprimir = () => {
    console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
  };
}

const maria = new Persona("Maria", 50);
console.log(maria);
const pedro = new Persona("Pedro", 15);
console.log(pedro);

maria.imprimir();
pedro.imprimir();


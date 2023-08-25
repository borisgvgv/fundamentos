class Person {
  constructor() {
    this._name = 'Rita';
  }

  set name(value) {
    this._name = value.toUpperCase();
  }

  get name() {
    return this._name;
  }
}

const person = new Person();
person.name = 'Boris'; // Using the setter to set the 'name' property

console.log(person.name);


//// ----------------------------------------------------------------


class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }

  set nombreCompleto(nombreCompleto) {
    const nombres = nombreCompleto.split(' ');
    this._nombre = nombres[0];
    this._apellido = nombres[1];
  }

  get nombreCompleto() {
    return this._nombre + ' ' + this._apellido;
  }
}

// La constante persona toma en valos de "new Persona('Juan', 'Pérez')"
const persona = new Persona('Juan', 'Pérez');
console.log(persona.nombreCompleto); // Muestra "Juan Pérez"

// Cambiamos el valor de la constante persona.nombreCompleto
persona.nombreCompleto = 'María García';
console.log(persona.nombreCompleto); // Muestra "María García"

//    -----------------------

// class Trabajador {
//   constructor(nombre, ocupacion) {
//     this._nombre = nombre;
//     this._ocupacion = ocupacion;
//   }

//   // set settrabajador(trabajador) {
//   //   const edad = trabajador;
//   //   this.edad = edad;
//   // }

//   get gettrabajador() {
//     return `Nombre: ${this._nombre}, Ocupación: ${this._ocupacion}`;
//   }
// }

// const trabajador_1 = new Trabajador('Boris', 'Mecánico');
// console.log(trabajador_1.gettrabajador);

// trabajador_1.gettrabajador = '45';
// console.log(trabajador_1.gettrabajador);

////       -----------------------


class Person {
  constructor(name) {
    this._name = name;
  }

  set setname(value) {
    this._name = value.toUpperCase();
  }

  get getname() {
    return `Nombre: ${this._name}`;
  }
}

const person = new Person('Boris');
console.log(person.getname);

person.setname = 'Boris'; // Using the setter to set the 'name' property
console.log(person.getname);

//// ----------------------------------------------------------------

class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }

  set setNombreCompleto(valor) {
    const nombres = valor.split(' ');
    this._nombre = nombres[0].toUpperCase();
    this._apellido = nombres[1].toUpperCase();
    this._segundoApellido = nombres[2];
  }

  get getNombreCompleto() {
    return (
      this._nombre.toUpperCase() +
      ' ' +
      this._apellido +
      ' ' +
      this._segundoApellido
    );
  }
}

const persona = new Persona('Juan', 'Pérez');
console.log(persona.getNombreCompleto); // Muestra "Juan Pérez"

persona.setNombreCompleto = 'María García Dominguez';
console.log(persona.getNombreCompleto); // Muestra "María García"

//    -----------------------

class Trabajador {
  constructor(nombre, ocupacion, edad = '') {
    this._nombre = nombre;
    this._ocupacion = ocupacion;
    this._edad = edad;
  }

  set settrabajador(valor) {
    const edad = valor;
    this._edad = edad;
  }

  get gettrabajador() {
    if (!this._edad || this._edad <= 15) {
      return `Nombre: ${this._nombre}, Ocupación: ${this._ocupacion}`;
    } else {
      return `Nombre: ${this._nombre}, Ocupación: ${this._ocupacion}, Edad: ${this._edad} `;
    }
  }
}

const trabajador_1 = new Trabajador('Boris', 'Mecánico', 50);
const trabajador_2 = new Trabajador('Boris', 'Chapista');
console.log(trabajador_1.gettrabajador);

trabajador_2.settrabajador = '17';
console.log(trabajador_2.gettrabajador);

////       -----------------------

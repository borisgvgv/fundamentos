class Circulo {
  constructor(radio) {
    this._radio = radio;
  }

  get area() {
    return Math.PI * this._radio * this._radio;
  }
}

const miCirculo = new Circulo(5);
console.log(miCirculo.area); // Calcula y devuelve el área del círculo

//---------------Ejemplo 2

class Person {
  constructor(nombre, edad, nacionalidad) {
    this._nombre = nombre;
    this._edad = edad;
    this._nacionalidad = nacionalidad;
  }

  get getPerson() {
    return `Nombre: ${this._nombre}, Edad: ${this._edad}, Nacionalidad: ${this._nacionalidad}`;
  }
}

const person_1 = new Person('Boris', 45 + ' años', 'Cuba');
const person_2 = new Person('Cecilia', 24 + ' años', 'Cuba');

console.log(person_1.getPerson);
console.log(person_2.getPerson);

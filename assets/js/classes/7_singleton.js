class Persona {
  //campos opcionales
  static instancia; // undefine
  nombre = '';

  constructor(nombre = '') {
    // console.log(Persona.instancia);//undefined

    if (!!Persona.instancia) {
      return Persona.instancia;
    }
    Persona.instancia = this;
    this.nombre = nombre;
    // return this;
  }
}

const instancia_1 = new Persona("Ironman");
const instancia_2 = new Persona("Spiderman");
const instancia_3 = new Persona("BlackPanther");

console.log(` El nombre de la instancia 1 es: ${instancia_1.nombre}`);
console.log(` El nombre de la instancia 2 es: ${instancia_2.nombre}`);
console.log(` El nombre de la instancia 3 es: ${instancia_3.nombre}`);

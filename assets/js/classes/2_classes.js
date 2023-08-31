// Es recomendable poner nombre de la clase con la primera letra en mayúscula

class Persona {
  nombre = "";
  codigo = "";
  frase = "";

  constructor(nombre, codigo, frase) {
    if (!nombre) {
      throw Error("No existe esta persona");
    }
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }

  myId() {
    console.log(`Soy ${this.nombre}, Codigo: ${this.codigo}`);
  }

  myIdConFrase() {
    this.myId();
    console.log(`${this.frase}`);
  }
}

const persona_1 = new Persona("Boris");
const persona_2 = new Persona("Cecilia", 1100, "Frase de Cecilia");
const persona_3 = new Persona(15, 1100, "Frase de Grisel");


console.log(persona_1);
console.log(persona_2);
console.log(persona_3);


console.warn("Id y código");
persona_1.myId();
persona_2.myId();

console.warn("Id, código y frase");
persona_1.myIdConFrase();
persona_2.myIdConFrase();

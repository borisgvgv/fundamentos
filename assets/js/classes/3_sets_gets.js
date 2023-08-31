// Es recomendable poner nombre de la clase con la primera letra en mayúscula

class Persona {
  
  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  constructor(nombre="Sin nombre", codigo="Sin código", frase="Sin frase") {
    if (!nombre) {
      throw Error("No existe esta persona");
    }
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

  }

  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }
  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  // Métodos
  myId() {
    console.log(`Soy ${this.nombre}, Codigo: ${this.codigo}`);
  }

  myIdConFrase() {
    this.myId();
    console.log(`${this.frase}`);
  }
}

console.warn("Devolución de instancias");
const persona_1 = new Persona("Boris", 1000, "Frase de Boris");
const persona_2 = new Persona("Cecilia", 1100, "Frase de Cecilia");
const persona_3 = new Persona("Grisel", 1110, "Frase de Grisel");


persona_1.setComidaFavorita = "El pie de cerezas de la tía May";

// No recomendado
// persona_1.nemesis = "Duende verde";
// persona_1.colorOjos = "Negros"

console.log(persona_1);
console.log(persona_2);
console.log(persona_3);

console.log(persona_1.getComidaFavorita);

// Devolución de métodos
console.warn("Devolución de métodos: Nombre + id");
persona_1.myId();
persona_2.myId();
persona_3.myId();

console.warn("Devolución de métodos: Nombre + Id + frase");
persona_1.myIdConFrase();
persona_2.myIdConFrase();
persona_3.myIdConFrase();

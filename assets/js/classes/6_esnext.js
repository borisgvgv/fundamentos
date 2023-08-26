// Cuidado esto aun no está implementado aun totalmente ¡¡¡¡

class Rectangulo {
    #area = 0; // el símbolo de almohadilla convierte a esta propiedad en privada y no es modificable desde fuera
  constructor(base = 0, altura = 0) {
    this.base = base;
    this.altura = altura;

    this.#area = base * altura;
  }

  duplicarArea(){
    console.log(this.#area * 2);
  }
}


// creamos instancia de la clase
const rectangulo = new Rectangulo(10, 15);

// rectangulo.#area= 100; // No se puede modificar porque es un método privado modificable solo desde la clase. 
console.log(rectangulo);
rectangulo.duplicarArea();

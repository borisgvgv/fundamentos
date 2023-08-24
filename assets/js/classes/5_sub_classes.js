// Es recomendable poner nombre de la clase con la primera letra en mayúscula

class Persona {
  
    static _conteoDeInstancias = 0;
    static get conteo(){
        return Persona._conteoDeInstancias + " instancias";
    }

    static mensaje(){
      console.log(this.nombre); //undefined
      console.log('Hola, soy un método estatico');
    }
  
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
  
      Persona._conteoDeInstancias++;
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
  

  class Heroe extends Persona{

    // nombre;
    // codigo;
    //Etas dos propiedades las tomaré de la classe persona
    clan = "Sin Clan"; 

    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);

        this.clan = "Los Avengers";
    }

    quienSoy(){
        console.log( `Soy: ${this.nombre}  y mi clan es ${this.clan} `);
        super.myId();
    }

  }

  console.warn("Devolución de instancias");
  const persona_1 = new Heroe("boris", 1000 , "Frase de Boris");
  console.log(persona_1);
  persona_1.quienSoy();

  




  
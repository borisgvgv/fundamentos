// Creamos un objeto llamado 'persona'
const persona = {
    // Propiedad privada para almacenar la edad
    _edad: 0,
  
    // Getter para obtener la edad
    get edad() {
      console.log('Obteniendo edad...');
      return this._edad;
    },
  
    // Setter para establecer la edad
    set edad(nuevaEdad) {
      if (nuevaEdad >= 0 && nuevaEdad <= 120) {
        console.log('Estableciendo edad...');
        this._edad = nuevaEdad;
      } else {
        console.log('Error: La edad debe estar entre 0 y 120.');
      }
    }
  };
  
  // Usamos el getter para obtener la edad
  console.log(persona.edad); // Output: Obteniendo edad... 0
  
  // Usamos el setter para establecer una nueva edad
  persona.edad = 25; // Output: Estableciendo edad...
  
  // Intentamos establecer una edad inválida
  persona.edad = 150; // Output: Error: La edad debe estar entre 0 y 120.
  
  // Volvemos a usar el getter para obtener la edad actualizada
  console.log(persona.edad); // Output: Obteniendo edad... 25
  
  

//   En este ejemplo, el objeto  persona tiene propiedades privadas _nombre y _edad, 
//   y definimos los métodos get y set para acceder y establecer estos valores. 
//   Cuando usamos el getter nombre o edad, obtendremos el valor actual de la propiedad correspondiente. 
//   Cuando usamos el setter nombre o edad, podemos realizar validaciones antes de asignar el nuevo valor a la propiedad.
//   Recuerda que JavaScript tiene una convención para indicar que una propiedad es privada al colocar un guion bajo al principio del nombre, 
//   pero esto no impide el acceso directo a la propiedad. Los getters y setters nos permiten tener un control 

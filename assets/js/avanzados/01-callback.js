// Función que realiza una operación matemática y llama al callback con el resultado
function realizarOperacion(a, b, operacion, callback) {
  let resultado;
  if (operacion === 'suma') {
    resultado = a + b;
  } else if (operacion === 'resta') {
    resultado = a - b;
  } else if (operacion === 'multiplicacion') {
    resultado = a * b;
  } else if (operacion === 'division') {
    resultado = a / b;
  } else {
    return callback('Operación no válida', a, b, operacion, null);
  }

  callback(null, a, b, operacion, resultado);
}

// Función de callback para mostrar el resultado
function mostrarResultado(error, a, b, operacion, resultado) {
  if (error) {
    console.error('Error:', a, b, operacion, error);
  } else {
    console.log('Resultado:', a, b, operacion, resultado);
  }
}

// Llamada a la función de operación con un callback
realizarOperacion(10, 5, 'suma', mostrarResultado);
realizarOperacion(20, 4, 'division', mostrarResultado);
realizarOperacion(8, 3, 'potencia', mostrarResultado);

/* En este ejemplo, la función "realizarOperacion" realiza
 diferentes operaciones matemáticas (suma, resta, multiplicación y división)
 en función de la operación proporcionada. Luego, llama al callback
 con el resultado o un mensaje de error si la operación no es válida.
 La función "mostrarResultado" es el callback que imprime el resultado
 en la consola si no hay errores, o muestra un mensaje de error en caso contrario.
 Al ejecutar el código, verás los resultados de las operaciones de suma y división,
 y también un mensaje de error para la operación de potencia,
 que no está definida en la función "realizarOperacion". 
 
 En el ejemplo anterior, el valor null se utiliza como un indicador en los callbacks 
 para representar que no hay un error. Los callbacks en JavaScript a menudo siguen 
 una convención en la que el primer parámetro del callback se utiliza para transmitir 
 información sobre errores, y el segundo parámetro (o posteriores) se utiliza para transmitir 
 los resultados o datos deseados.

 1 - Cuando se llama a la función realizarOperacion y se realiza una operación válida, 
 el callback mostrarResultado se llama de la siguiente manera:

 ---- callback(null, resultado);

 En este caso, null se pasa como el primer argumento, lo que indica que no hay error. 
 El segundo argumento (resultado) es el resultado de la operación matemática. 
 En el callback mostrarResultado, se verifica si el primer argumento es null y, 
 en ese caso, se muestra el resultado.

 2 - Cuando se llama a la función realizarOperacion con una operación no válida, 
 el callback mostrarResultado se llama de la siguiente manera:

 ---- callback("Operación no válida", null);

 En este caso, se pasa un mensaje de error como el primer argumento y 
 se pasa null como el segundo argumento, ya que no hay un resultado válido. 
 En el callback mostrarResultado, se verifica si el primer argumento no es null y, 
 en ese caso, se muestra el mensaje de error.

Esta convención permite a los callbacks transmitir información sobre el estado 
de la operación (éxito o error) y, si es exitoso, también 
transmitir los resultados relevantes.


 */



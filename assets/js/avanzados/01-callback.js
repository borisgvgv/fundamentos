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

// En este ejemplo, la función "realizarOperacion" realiza
// diferentes operaciones matemáticas (suma, resta, multiplicación y división)
// en función de la operación proporcionada. Luego, llama al callback
// con el resultado o un mensaje de error si la operación no es válida.
// La función "mostrarResultado" es el callback que imprime el resultado
// en la consola si no hay errores, o muestra un mensaje de error en caso contrario.
// Al ejecutar el código, verás los resultados de las operaciones de suma y división,
// y también un mensaje de error para la operación de potencia,
// que no está definida en la función "realizarOperacion".

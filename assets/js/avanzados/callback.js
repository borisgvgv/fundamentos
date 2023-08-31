// Función simulada de lectura de archivo asincrónico
function leerArchivo(nombreArchivo, callback) {
  setTimeout(function () {
    // Simulamos la lectura del archivo después de 2 segundos
    const contenido = 'Contenido del archivo: ¡Hola, mundo!';
    callback(contenido);
  }, 2000);
}

// Función de devolución de llamada para manejar el contenido del archivo
function manejarContenido(contenido) {
  document.write(contenido);
}

// Llamamos a la función leerArchivo y pasamos la función de devolución de llamada
leerArchivo('archivo.txt', manejarContenido);

document.write('Leyendo el archivo...');

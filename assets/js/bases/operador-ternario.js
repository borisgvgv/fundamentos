// dias entre semana abrimos a las 11
// fines de semana abrimo a las 09
//comprobar si está abrierto el sitio
const dia = 1;
const horaActual = 12;

let horaApertura;
let diasemana;
let mensaje; // Está, abierto, Está cerrado, abrimos a las XX

// if (dia === 0 || dia === 6) {
//   horaApertura = 09;
//   console.log("Es fin de semana");
//   if (horaActual >= horaApertura) {
//     mensaje = "el local está abierto";
//   } else {
//     mensaje = `el local aun está cerrado, abrimos a las: ${horaApertura}`;
//   }
// } else {
//   horaApertura = 11;
//   console.log("Es entre semana");
//   if (horaActual >= horaApertura) {
//     mensaje = "el local está abrierto";
//   } else {
//     mensaje = `el local aun está cerrado, abrimos a las: ${horaApertura}`;
//   }
// }

diasemana = [0, 6].includes(dia) ? "Es fin de semana" : "Es entre semana";
horaApertura = [0, 6].includes(dia) ? 9 : 11;

// if (horaActual >= horaApertura) {
//   mensaje = "el local está abierto";
// } else {
//   mensaje = `el local aun está cerrado, abrimos a las: ${horaApertura}`;
// }

mensaje =
  horaActual >= horaApertura
    ? "el local está abierto"
    : `el local aun está cerrado, abrimos a las: ${horaApertura}`;

console.log({ diasemana, mensaje });

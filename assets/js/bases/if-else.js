const hoy = new Date(); //{}
let dia = hoy.getDay(); // 0 es Domingo hasta 6 que es sábado
console.log({ dia });

const dias = {
  0: "domigo",
  1: "lunes",
  2: "martes",
  3: "miércoles",
  4: "jueves",
  5: "vienrnes",
  6: "sábado",
};

const dias2 = [
  "domigo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "vienrnes",
  "sábado",
];

let diaconObj = 1;
let diaconArray = 3;
console.log(dias[diaconObj] || "Dia no definido");
console.log(dias2[diaconArray] || "Dia no definido");

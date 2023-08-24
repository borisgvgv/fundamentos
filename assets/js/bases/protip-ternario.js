const mayor = (a, b) => {
  return a > b ? a : b;
};

console.log(mayor(5, 9));

const nota = 70;
const calificacion =
  nota >= 95
    ? "A+"
    : nota >= 80
    ? "A"
    : nota >= 70
    ? "B+"
    : nota >= 60
    ? "B"
    : "Suspenso";

console.log({ nota, calificacion });

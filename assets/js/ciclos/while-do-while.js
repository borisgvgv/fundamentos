console.warn("====While====");

const carros = ["ford", "Mazda", "Audi", "BMW", "Tractor"];

let j = 0;
while (j < carros.length) {
  console.log(carros[j]);
  j++;
}

console.warn("========");

let i = 0;
while (i < carros.length) {
  if (carros[i] == "Audi") {
    console.log(i + " " + carros[i]);
  }
  i++;
}

console.warn("====Do While====");

let y = 0;
do {
  if (carros[y] == "Audi") {
    console.log(y + " " + carros[y]);
  }
  y++;
} while (y < carros.length);

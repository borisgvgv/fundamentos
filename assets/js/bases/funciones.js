function saludar() {
  console.log("Hola mundo");
}
saludar();

const saludar2 = function () {
  console.log("Hola mundo 2");
};
saludar2();

const saludar3 = () => {
  console.log("Hola mundo 3");
};
saludar3();

//-----------------------------

function saludar4(nombre) {
  console.log("Hola " + nombre);
}
saludar4("Boris");

const saludar5 = function (nombre) {
  console.log("Hola " + nombre);
};
saludar5("Boris");

const saludar6 = (nombre, edad) => {
  console.log("Hola " + nombre + " " + edad);
};
saludar6("Boris", 40);

//------------return-----------------

function suma(a, b) {
  return a + b;
}
console.log(suma(1, 2));

const suma2 = function (a, b) {
  return a + b;
};
console.log(suma2(1, 2));

const suma3 = (a, b) => {
  return a + b;
};
console.log(suma3(1, 2));

const suma4 = (a, b) => a + b; //solo cuando tengo una línea de código
console.log(suma4(1, 2));

function saludar7(nombre) {
  return "Hola " + nombre;
}
console.log(saludar7("Boris con return"));

const saludar8 = function (nombre) {
  return "Hola " + nombre;
};
console.log(saludar8("Boris con return"));

const saludar9 = (nombre) => {
  return "Hola " + nombre;
};
console.log(saludar8("Boris con return"));

///------------------------------------------

const aleatorio = () => Math.random();
console.log("Número aleatorio: " + aleatorio());

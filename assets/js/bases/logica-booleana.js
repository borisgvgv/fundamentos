const regresaTrue = () => {
  console.log("Regresa true");
  return true;
};
const regresaFalse = () => {
  console.log("Regresa false");
  return false;
};

console.warn("Negación");
console.log(!false);

console.warn("And");
console.log(true && true); //devuelve true
console.log(true && false); //devuelve false
console.log(true && !false); //devuelve true
console.log(false && false); //devuelve false

console.warn("=============");

console.log(regresaFalse() && regresaTrue());
console.log(regresaTrue() && regresaFalse());
console.log(regresaTrue() && regresaTrue());

console.warn("Or");
console.log(regresaFalse() || regresaTrue());
console.log(regresaTrue() || regresaFalse());
console.log(regresaTrue() || regresaTrue());
console.log(regresaFalse() || regresaFalse());

console.warn("Asignaciones");

const soyIndefinido = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && "Hola mundo" && 150;
console.log({ a1 }); //devuelve el último valor evaluado con &&

const a2 = false && "Hola mundo" && 150;
console.log({ a2 }); //devuelve false porque false sería el último valor evaluado con &&

const a3 = soyFalso || "Hola mundo" || 150;
console.log({ a3 }); // Devuelve hola mundo porque es el primer valor que encuentra

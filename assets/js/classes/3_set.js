class Person {
  constructor() {
    this._name = '';
  }

  set name(value) {
    this._name = value;
  }
}

const person = new Person();
person.name = 'John'; // Using the setter to set the 'name' property

console.log(this.person);

class SkylabArray {
  elements;
  length;

  constructor() {
    this.elements = {};
    this.length = 0;
  }

  push(input) {
    this.elements[this.length] = input;
    this.length += +1;
  }
}

const superArray = new SkylabArray();

superArray.push("friends");
superArray.push("cebra");
superArray.push("pls work");
superArray.push("lapicero");

console.log(superArray.oldLength);
console.log(superArray);

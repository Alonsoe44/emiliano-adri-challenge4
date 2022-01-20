class SkylabArray {
  elements;
  length;
  i;

  constructor() {
    this.elements = {};
    this.i = 0;
    this.length = -1;
  }

  push(input) {
    this.elements[this.i] = input;
    this.length = 0;
    this.addLenght();
    this.i += +1;
  }

  addLenght() {
    for (const property in this.elements) {
      this.length += 1;
    }
  }
}

const superArray = new SkylabArray();

superArray.push("friends");
superArray.push("cebra");
superArray.push("pls work");
superArray.push("lapicero");

console.log(superArray.length);
console.log(superArray);

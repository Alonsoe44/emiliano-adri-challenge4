class SkylabArray {
  elements;
  length;

  constructor() {
    this.elements = {};
  }

  pushElement(input) {
    this.elements[input] = 1;
  }
}

const superArray = new SkylabArray();

superArray.pushElement("friends");
superArray.pushElement("cebra");

console.log(superArray);

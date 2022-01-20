class SkylabArray {
  /* elements;
  length; */

  constructor() {
    for (const i in arguments) this[i] = arguments[i];
  }
}

const babyObject = new SkylabArray(
  3,
  7,
  98,
  6,
  "akdscnkd",
  "lapicero",
  54,
  "ola",
  undefined
);

console.log(babyObject);
const indexNumber = Object.getOwnPropertyNames(babyObject).slice(-1);
const realLength = Number.parseInt(indexNumber, 10) + 1;
console.log(realLength);

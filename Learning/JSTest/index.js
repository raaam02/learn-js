// Q1 Object
const person = {
  name: "Ram",
  age: 21,
  gender: "M",
};

// Q2 Arrow Function
const square = (n) => {
  return n * n;
};
console.log(square(5));

// Q3 Anonymous function
const multiplyByTwo = function (arr) {
  return arr.map((num) => num * 2);
};
console.log(multiplyByTwo([1, 2, 3, 4]));

// Q4 Filter
function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}
console.log(filterEvenNumbers([2, 5, 7, 4, 6, 8]));

// Q5 Array Methods
const array = [1, 2, 3, 4, 5];
const mapArray = array.map((num) => num * num);
const filterArray = array.filter((num) => num % 2 === 0);
const reduceArray = array.reduce((pre, cur) => pre + cur);

// Q6 Array and Object Destructuring
const arr = ["shyam", 1];
const [name, id] = arr;
console.log(name, id);

const obj = { p1: { person1: 1 }, person2: "Ram" };
const { p } = obj;
console.log(p);

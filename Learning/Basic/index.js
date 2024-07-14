// Normal Function
function add(num1, num2) {
  console.log(num1 + num2);
}

// add(2, 3);

// Return
function fact(num) {
  if (num === 1 || num === 0) {
    return 1;
  }
  return num * fact(num - 1);
}

const factorial = fact(5);
console.log(factorial);

// Anynomous Function
const sub = function (n1, n2) {
  return n1 - n2;
};
console.log(sub(5, 2));

// Arrow Function
const multiply = (n1, n2) => n1 * n2;
console.log(multiply(3, 6));

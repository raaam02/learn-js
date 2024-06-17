// forEach function
// Q1. return sqaure of number given in an array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach((num) => console.log(num * num));

// map - Map are just like forEach loop but it returns a new array
let arr1 = [1, 2, 3, 4, 5, 6];
let newarr = arr1.map((num) => num * 2);
console.log(newarr);

// filter method of array in JavaScript
/** it Filter out each value of array 
based on given condition and store that value in new array **/
let array1 = [2, 23, 43, 56, 22, 15, 125, 534];
let filteredArray = array1.filter((val) => val % 2 === 0);
console.log(filteredArray);

// reduce Method in an Array
// it iterate over an array with 2 iterator and return a reduced value based on condition
// Accumlator is that variable which store result of reduced array
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let reducedArray = arr2.reduce((sum, num) => sum + num);
console.log(reducedArray);
// return largest elemnt in array using reduce
let arr3 = [24, 345, 46, 5, 6, 22, 43, 545, 76, 76];
let largestEl = arr3.reduce((pre, cur) => (pre > cur ? pre : cur));
console.log(largestEl);
// Q1. filter out marks of student that scored 90+
let marks = [34, 54, 89, 79, , 97, 87, 987, 45, 56, 6456, 546];
let topMarks = marks.filter((num) => num > 90);
console.log(topMarks);

/****
 * Take a number n from user and make arrays from 1-n
 * and calculate sum using reduce method
 * also calculate product using reduce method
 ****/
let n = 15;
let newArray = [];
for (let i = 0; i < n; i++) {
  newArray[i] = i + 1;
}
let sum = newArray.reduce((pre, cur) => pre + cur);
console.log(sum);
let product = newArray.reduce((pre, cur) => pre * cur);
console.log(product);

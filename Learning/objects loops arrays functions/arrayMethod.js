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
// it reduce or give result of all array element based on given condition
// Accumlator is that variable which store result of reduced array
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let reducedArray = arr2.reduce((sum, num) => sum + num);
console.log(reducedArray);

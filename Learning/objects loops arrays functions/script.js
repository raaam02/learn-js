let user = {
  uName: "Ram",
  follow: true,
  posts: 16,
  followers: 569000,
  following: 4,
  Name: "Ram Prajapati",
  Bio: "BSc IT graduate | IT Professional",
};
console.log(user);

//Give Grades on the basis of marks

let num = 90;

if (num <= 100 && num >= 80) {
  alert("A");
} else if (num <= 89 && num >= 70) {
  alert("B");
} else if (num <= 69 && num >= 60) {
  alert("C");
} else if (num <= 59 && num >= 50) {
  alert("D");
} else {
  alert("F");
}

// Print all even number from 0 to 100

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Guess number game

/** let randomNum = Math.floor(Math.random() * 100);
let guessNum = prompt("Guess the Number betweem 0-100");
while (guessNum != randomNum) {
  if (guessNum > randomNum) {
    guessNum = prompt("Number was greater please try again...");
  } else {
    guessNum = prompt("Number was smaller please try again...");
  }
}
alert("Congrats you Winnnnnn!!!! \n" + "my number was " + randomNum);
**/

// Strigs

let fullName = prompt("Enter Your Full Name to Generate User Name");
let userName = "@" + fullName + fullName.length;
console.log(userName);

// Arrays
// Find Average Marks

let marks = [85, 97, 44, 37, 76, 60];
let tMarks = 0;
for (let val of marks) {
  tMarks += val;
}
let avgMks = tMarks / marks.length;
console.log(avgMks);

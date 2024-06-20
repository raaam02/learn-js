let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let redbtn = document.getElementById("red");
let greenbtn = document.getElementById("green");
let whitebtn = document.getElementById("white");
let blackbtn = document.getElementById("black");

redbtn.onclick = () => {
  let bgcolor = getComputedStyle(redbtn).backgroundColor;
  body.style.backgroundColor = bgcolor;
  h1.style.color = "";
  h3.style.color = "";
  blackbtn.style.borderColor = "";
};
greenbtn.onclick = () => {
  let bgcolor = getComputedStyle(greenbtn).backgroundColor;
  body.style.backgroundColor = bgcolor;
  h1.style.color = "";
  h3.style.color = "";
  blackbtn.style.borderColor = "";
};
whitebtn.onclick = () => {
  let bgcolor = getComputedStyle(whitebtn).backgroundColor;
  body.style.backgroundColor = bgcolor;
  h1.style.color = "";
  h3.style.color = "";
  blackbtn.style.borderColor = "";
};
blackbtn.onclick = () => {
  let bgcolor = getComputedStyle(blackbtn).backgroundColor;
  body.style.backgroundColor = bgcolor;
  h1.style.color = "white";
  h3.style.color = "white";
  blackbtn.style.borderColor = "white";
};

let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.id === "red") {
      body.id = btn.id;
      h1.style.color = "";
      h3.style.color = "";
      btn.style.borderColor = "";
    }
    if (e.target.id === "green") {
      body.id = btn.id;
      h1.style.color = "";
      h3.style.color = "";
      btn.style.borderColor = "";
    }
    if (e.target.id === "white") {
      body.id = btn.id;
      h1.style.color = "";
      h3.style.color = "";
      btn.style.borderColor = "";
    }
    if (e.target.id === "black") {
      body.id = btn.id;
      h1.style.color = "white";
      h3.style.color = "white";
      btn.style.borderColor = "white";
    }
  });
});

// redbtn.onclick = () => {
//   let bgcolor = getComputedStyle(redbtn).backgroundColor;
//   body.style.backgroundColor = bgcolor;
//   h1.style.color = "";
//   h3.style.color = "";
//   blackbtn.style.borderColor = "";
// };
// greenbtn.onclick = () => {
//   let bgcolor = getComputedStyle(greenbtn).backgroundColor;
//   body.style.backgroundColor = bgcolor;
//   h1.style.color = "";
//   h3.style.color = "";
//   blackbtn.style.borderColor = "";
// };
// whitebtn.onclick = () => {
//   let bgcolor = getComputedStyle(whitebtn).backgroundColor;
//   body.style.backgroundColor = bgcolor;
//   h1.style.color = "";
//   h3.style.color = "";
//   blackbtn.style.borderColor = "";
// };
// blackbtn.onclick = () => {
//   let bgcolor = getComputedStyle(blackbtn).backgroundColor;
//   body.style.backgroundColor = bgcolor;

// };

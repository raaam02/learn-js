let btn = document.getElementById("btn");
btn.onclick = () => {
  btn.style.backgroundColor = "";
  for (let index = 10; index >= 0; index--) {
    setTimeout(() => {
      btn.innerHTML = index;
      console.log(index);
    }, (10 - index) * 1000);
  }

  setTimeout(() => {
    btn.style.backgroundColor = "red";
    btn.innerHTML = "Hello....";
  }, 10000);
};

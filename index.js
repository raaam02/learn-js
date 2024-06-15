let btn = document.getElementById("btn");
btn.onclick = () => {
  for (let index = 10; index >= 1; index--) {
    setTimeout(() => {
      btn.innerHTML = index;
    }, (10 - index) * 1000);
    console.log(index);
  }
};

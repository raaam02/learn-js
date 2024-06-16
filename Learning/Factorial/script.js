let inputFact = document.getElementById("fact");
let btn = document.getElementById("btn");

btn.onclick = () => {
  let num = inputFact.value;

  factorial = (n) => {
    if (n == 0) {
      return 1;
    } else {
      let fact = 1;
      for (let i = 1; i <= n; i++) {
        fact = fact * i;
      }
      return fact;
    }
  };
  inputFact.value = factorial(num);
};

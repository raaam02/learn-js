const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  const adInfo = document.querySelector("#ad-info");

  if (height === "" || height <= 0 || isNaN(height)) {
    result.innerHTML = "<span>Please Provide valid height</span>";
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    result.innerHTML = "<span>Please Provide valid weight</span>";
  } else {
    const bmi = weight / ((height * height) / 10000);
    result.innerHTML = `<span>Your bmi is ${bmi.toFixed(2)}</span>`;
    if (bmi < 18.6) {
      adInfo.innerHTML = `<span style = "color = red;">You are under Weight 🔻</span>`;
    } else if (bmi > 24.9) {
      adInfo.innerHTML = `<span style = "color = red;">You are Over Weight 🔺</span>`;
    } else {
      adInfo.innerHTML = `<span style = "color = green;">Your Weight is Normal ✅😊 </span>`;
    }
  }
});

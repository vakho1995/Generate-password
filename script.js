const range = document.querySelector(".range");
let password = document.querySelector(".ganerated-password");
const generateButton = document.querySelector(".generate-button");

function rangeBackground(value) {
  const min = range.min;
  const max = range.max;
  const percentage = (value / max) * 100;
  console.log(percentage);
  range.style.background = `linear-gradient(to right, #a4ffaf ${percentage}%, #18171f ${percentage}%)`;
}

range.addEventListener("input", (e) => {
  rangeBackground(e.target.value);
  document.querySelector(".range-number").textContent = e.target.value;
});

generateButton.addEventListener("click", () => {
  password.innerText = "";
  const checkedUppercase = document.getElementById("uppercase-chekbox").checked;
  const checkedLowercase = document.getElementById("lowercase-chekbox").checked;
  const checkedNumbers = document.getElementById("numbers-chekbox").checked;
  const checkedSymbols = document.getElementById("symbols-chekbox").checked;

  const length = range.value;
  let checked = "";

  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  if (checkedUppercase) {
    checked += uppercase;
  }
  if (checkedLowercase) {
    checked += lowercase;
  }
  if (checkedNumbers) {
    checked += numbers;
  }
  if (checkedSymbols) {
    checked += symbols;
  }
  if (checked.length > 0) {
    for (let i = 0; i < length; i++) {
      let indexNum = Math.floor(Math.random() * checked.length);
      password.innerText += checked[indexNum];
    }
  }
});

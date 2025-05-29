const range = document.querySelector(".range");
let password = document.querySelector(".ganerated-password");
const generateButton = document.querySelector(".generate-button");
const checkboxArr = [...document.querySelectorAll(".checkbox")];
const strengthMeterArr = [...document.querySelectorAll(".strength-meter")];
const copyBtn = document.querySelector(".copy-image");

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

function updateStrengthMeter() {
  let activeStrengthMeter = checkboxArr.filter((checkbox) => {
    return checkbox.checked;
  }).length;

  strengthMeterArr.forEach((strengthMeter, index) => {
    if (index < activeStrengthMeter) {
      strengthMeter.classList.add("strength-active");
    } else {
      strengthMeter.classList.remove("strength-active");
    }
  });
  level();
}

checkboxArr.forEach((checkbox) => {
  checkbox.addEventListener("change", updateStrengthMeter);
});

updateStrengthMeter();

function level() {
  let num = strengthMeterArr.filter((strengthMeter) =>
    strengthMeter.classList.contains("strength-active")
  ).length;

  switch (num) {
    case 1:
      document.querySelector(".about-strength").textContent = "SIMPLE";
      break;
    case 2:
      document.querySelector(".about-strength").textContent = "MEDIUM";
      break;
    case 3:
      document.querySelector(".about-strength").textContent = "HARD";
      break;
    case 4:
      document.querySelector(".about-strength").textContent = "VERY HARD";
      break;

    default:
      document.querySelector(".about-strength").textContent = "";
  }
}

copyBtn.addEventListener("click", () => {
  const text = password.textContent;
  navigator.clipboard.writeText(text);
});

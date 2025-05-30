const range = document.querySelector(".range");
let password = document.querySelector(".ganerated-password");
const generateButton = document.querySelector(".generate-button");
const checkboxArr = [...document.querySelectorAll(".checkbox")];
const strengthMeterArr = [...document.querySelectorAll(".strength-meter")];
const copyBtn = document.querySelector(".copy-svg");

// The logic for generating the password.
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
  password.style.opacity = "1";
});

///  The logic for the background of the <input type="range"/>.
function rangeBackground(value) {
  const max = range.max;
  const percentage = (value / max) * 100;
  range.style.background = `linear-gradient(to right, #a4ffaf ${percentage}%, #18171f ${percentage}%)`;
}

range.addEventListener("input", (e) => {
  rangeBackground(e.target.value);
  document.querySelector(".range-number").textContent = e.target.value;
});

// This logic is used to evaluate how strong the password is
const strengthClassObj = {
  //
  1: "to-weak-active",
  2: "weak-active",
  3: "medium-active",
  4: "strong-active",
};
const strengthObj = {
  1: "TO WEAK",
  2: "WEAK",
  3: "MEDIUM",
  4: "STRONG",
};

function updateStrengthMeter() {
  let num = checkboxArr.filter((checkbox) => {
    return checkbox.checked;
  }).length;

  if (num === 0) {
    document.querySelector(".about-strength").textContent = "";
  }

  strengthMeterArr.forEach((strengthMeter, index) => {
    strengthMeter.classList.remove(
      strengthClassObj[1],
      strengthClassObj[2],
      strengthClassObj[3],
      strengthClassObj[4]
    );

    if (index < num) {
      strengthMeter.classList.add(strengthClassObj[num]);
      document.querySelector(".about-strength").textContent = strengthObj[num];
    }
  });
}
checkboxArr.forEach((checkbox) => {
  checkbox.addEventListener("change", updateStrengthMeter);
});
updateStrengthMeter();

// This logic is for copying the password.
copyBtn.addEventListener("click", () => {
  if (password.textContent !== "P4$5W0rD!") {
    const text = password.textContent;
    navigator.clipboard.writeText(text);
  }
});

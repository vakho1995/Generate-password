const range = document.querySelector(".range");
let password = document.querySelector(".ganerated-password");
const generateButton = document.querySelector(".generate-button");

generateButton.addEventListener("click", () => {
  password.innerText = "";
  const chekedUppercase = document.getElementById("uppercase-chekbox").checked;
  const chekedLowercase = document.getElementById("lowercase-chekbox").checked;
  const chekedNumbers = document.getElementById("numbers-chekbox").checked;
  const chekedSymbols = document.getElementById("symbols-chekbox").checked;

  const length = range.value;
  let cheked = "";

  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  let indexNum = 0;
  if (chekedUppercase) {
    cheked += uppercase;
  }
  if (chekedLowercase) {
    cheked += lowercase;
  }
  if (chekedNumbers) {
    cheked += numbers;
  }
  if (chekedSymbols) {
    cheked += symbols;
  }

  for (let i = 0; i < length; i++) {
    let indexNum = Math.floor(Math.random() * cheked.length);
    password.innerText += cheked[indexNum];
  }
});

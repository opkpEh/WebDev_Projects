const inputSlider = document.querySelector("[type='range']");
const lengthDisplay = document.querySelector(".pass-length span");
const passwordInput = document.querySelector(".input-box input");
const copyIcon = document.querySelector(".input-box span");
const passwordIndicator = document.querySelector(".pass-indicator");
const generateButton = document.querySelector(".generate-btn");
const allCheckboxes = document.querySelectorAll(".options input[type='checkbox']");

const characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "^!$%&|[](){}:;.,*+-#@<>~"
};

// Update password length display
function updateLengthDisplay() {
  lengthDisplay.innerText = inputSlider.value;
  generatePassword();
}

// Generate password based on selected options
function generatePassword() {
  let staticPassword = "";
  let randomPassword = "";
  let excludeDuplicate = false;
  let passLength = inputSlider.value;

  allCheckboxes.forEach(checkbox => {
    if (checkbox.checked) {
      if (checkbox.id === "lowercase") {
        staticPassword += characters.lowercase;
      } else if (checkbox.id === "uppercase") {
        staticPassword += characters.uppercase;
      } else if (checkbox.id === "numbers") {
        staticPassword += characters.numbers;
      } else if (checkbox.id === "symbols") {
        staticPassword += characters.symbols;
      } else if (checkbox.id === "esc-duplicate") {
        excludeDuplicate = true;
      } else if (checkbox.id === "spaces") {
        staticPassword += " ";
      }
    }
  });

  for (let i = 0; i < passLength; i++) {
    let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
    if (excludeDuplicate) {
      if (!randomPassword.includes(randomChar) || randomChar === " ") {
        randomPassword += randomChar;
      } else {
        i--;
      }
    } else {
      randomPassword += randomChar;
    }
  }

  passwordInput.value = randomPassword;
  updatePasswordIndicator();
}

// Update password indicator color based on strength
function updatePasswordIndicator() {
  passwordIndicator.id = inputSlider.value <= 8 ? "weak" :
                         inputSlider.value <= 16 ? "medium" : "strong";
}

// Copy password to clipboard
function copyPassword() {
  navigator.clipboard.writeText(passwordInput.value);
  copyIcon.innerText = "check";
  setTimeout(() => {
    copyIcon.innerText = "copy_all";
  }, 1500);
}

inputSlider.addEventListener("input", updateLengthDisplay);
allCheckboxes.forEach(checkbox => {
  checkbox.addEventListener("click", generatePassword);
});
copyIcon.addEventListener("click", copyPassword);
generateButton.addEventListener("click", generatePassword);

// Generate initial password
generatePassword();
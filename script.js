// function generatePassword(
//   length,
//   includeLowerCase,
//   includeUpperCase,
//   includeNumber,
//   includeSymbols
// ){
//   const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//   const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const numberChars = "0123456789";
//   const symbolChars = "!@#$%^&*()_+={}[]':;";

//   let allowedChars = "";
//   let password = "";

//   allowedChars += includeLowerCase ? lowercaseChars : "";
//   allowedChars += includeUpperCase ? uppercaseChars : "";
//   allowedChars += includeNumber ? numberChars : "";
//   allowedChars += includeSymbols ? symbolChars : "";

//   if (length <= 0) {
//     return `(Password length must be at least 1)`;
//   }
//   if (allowedChars.length === 0) {
//     return `(Atleast 1 Set of character needs to be selected)`;
//   }
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * allowedChars.length);
//     password += allowedChars[randomIndex]
//   }
//   return password;
// }

// const passwordLength = 12;
// const includeLowerCase = true;
// const includeUpperCase = true;
// const includeNumber = true;
// const includeSymbols = true;

// const password = generatePassword(
//   passwordLength,
//   includeLowerCase,
//   includeUpperCase,
//   includeNumber,
//   includeSymbols
// );

// console.log(`Generated password: ${password}`);


const includeLowerCase = document.getElementById("includeLowerCase");
const includeUpperCase = document.getElementById("includeUpperCase");
const includeNumber = document.getElementById("includeNumber");
const includeSymbols = document.getElementById("includeSymbols");
const passwordLengthInput = document.querySelector('input[type="number"]'); // Get the password length input
const generatedPassword = document.getElementById("generatedPassword");

function generatePassword() {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+={}[]':;";
  
  let allowedChars = "";
  let password = "";
  
  const length = parseInt(passwordLengthInput.value); // Get the password length from input

  // Add character sets based on checkboxes
  // if (includeLowerCase.checked) {
  //   allowedChars += lowercaseChars;
  // }
  // if (includeUpperCase.checked) {
  //   allowedChars += uppercaseChars;
  // }
  // if (includeNumber.checked) {
  //   allowedChars += numberChars;
  // }
  // if (includeSymbols.checked) {
  //   allowedChars += symbolChars;
  // }

  allowedChars += includeLowerCase.checked ? lowercaseChars : "";
  allowedChars += includeUpperCase.checked ? uppercaseChars : "";
  allowedChars += includeNumber.checked ? numberChars : "";
  allowedChars += includeSymbols.checked ? symbolChars : "";

  // Handle edge cases
  if (length <= 0) {
    generatedPassword.textContent = "Password length must be at least 1";
    return;
  }
  if (allowedChars.length === 0) {
    generatedPassword.textContent = "At least 1 character set needs to be selected";
    return;
  }

  // Generate the password
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  // Display the generated password
  generatedPassword.textContent = password;
}

// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// // Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// Add event listener to generate button
//generateBtn.addEventListener('click', writePassword);

// Function to prompt user for password options
function getPasswordOptions() {
  // Prompt for password length
  var length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

// Validate password length
if (isNaN(length) || length < 8 || length > 128) {
  alert("Please enter a valid password length between 8 and 128 characters.");
  return null;
}
// Prompt for character types
var includeLowercase = confirm("Include lowercase characters?");
var includeUppercase = confirm("Include uppercase characters?");
var includeNumeric = confirm("Include numeric characters?");
var includeSpecialChars = confirm("Include special characters?");

// Validate at least one character type is selected
if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecialChars) {
  alert("Please select at least one right character type.");
  return null;
}
// Object to store user choices
var passwordOptions = {
  length: length,
  includeLowercase: includeLowercase,
  includeUppercase: includeUppercase,
  includeNumeric: includeNumeric,
  includeSpecialChars: includeSpecialChars
};

return passwordOptions;

}


// Function for getting a random element from an array
  function getRandom(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    var randomElement = arr[randomIndex];
    return randomElement;

}

// Function to generate password with user input
function generatePassword() {

    var options = getPasswordOptions();
  
    if (!options) {
      // If user cancels or provides invalid input, return an empty string
      return "";
    }

// Array to store the characters to be included in the password
var charactersToInclude = [];

// Add selected character types to the charactersToInclude array
if (options.includeLowercase) {
  charactersToInclude = charactersToInclude.concat(lowerCasedCharacters);
}

if (options.includeUppercase) {
  charactersToInclude = charactersToInclude.concat(upperCasedCharacters);
}

if (options.includeNumeric) {
  charactersToInclude = charactersToInclude.concat(numericCharacters);
}

if (options.includeSpecialChars) {
  charactersToInclude = charactersToInclude.concat(specialCharacters);
}

// Generate the password
var password = "";
for (var i = 0; i < options.length; i++) {
  password += getRandom(charactersToInclude);
}

return password;
}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


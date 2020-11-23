// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword );

generateBtn.addEventListener("click", function (event) {
  event.preventDefault();
  writePassword();
});

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;

}


// define arrays for password options
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specials = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{",
  "]", "}", "\\", "|", ";", ":", "\"", ",", "<", ".", ">", "/", "?"];

var lcLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var ucLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var passwordOptions = [];

console.log("start with empty list " + passwordOptions);


//generate Password Function 
function generatePassword() {
  alert("You clicked Generate Password");

  var chosenPasswordlength = passwordlength();

  console.log("chosenPasswordlength: " + chosenPasswordlength);

  var chosenPasswordOptionsArray = choosePasswordOptions();
  console.log("The available password options are:");
  console.log(chosenPasswordOptionsArray);

  var userPassword = "";

  for (let i = 0; i < chosenPasswordlength; i++) {

    var randomNumber = Math.floor(Math.random() * chosenPasswordOptionsArray.length);

    console.log("pickRandomNumber" + randomNumber);

    userPassword += chosenPasswordOptionsArray[randomNumber];
    console.log("userPassword: " + userPassword);
  }

  alert(userPassword);
  return userPassword;
}

//set password Length 
function passwordlength() {
  var passLength = 0;
  passLength = prompt("Enter the password Length between 8-128 inclusive");
  passLengthInt = parseInt(passLength);

 
  var inputType = typeof passLengthInt;
  console.log(inputType);

  if (inputType == "number") {
    if (passLengthInt > 7 && passLengthInt < 129) {

      alert("You will get a " + passLengthInt + " character length Password");
      return passLengthInt;
    }
    else {
      alert("Please choose a number between 8 and 128")

    }
  }
  else {
    alert("Please input a number")
  }
}

//ask user and pick Password options 
function choosePasswordOptions() {

  //ask while user at least select an option
  while (passwordOptions.length == 0) {
    addPasswordOptions(numbers);
    addPasswordOptions(specials);
    addPasswordOptions(lcLetters);
    addPasswordOptions(ucLetters);
  }
  console.log("choosePasswordOptions:  " + passwordOptions);

  return passwordOptions;
}

//add selected password option 
function addPasswordOptions(characters) {

  var addCharacters = confirm("Would you like " + characters + " in your password?")

  if (addCharacters) {
    passwordOptions = passwordOptions.concat(characters)
    console.log(characters + " added into passwordOptions  ");
    console.log("passwordOptions:  " + passwordOptions);
  }
}


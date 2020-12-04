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
  disableButton("generate");
}


// define arrays for password options
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//added required special characters
var specials = [ "\"", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "\\", "|", ";", ":", "\"", ",", "<", ".", ">", "/", "?"];
var lcLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var ucLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passwordOptions = [];

console.log("start with empty list " + passwordOptions);

//generate Password Function 
function generatePassword() {
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

  return userPassword;
}

//set password Length 
function passwordlength() {
  var passLength = "";
  isInputNotNumber = false;

  //promt the questions till get a number between 8 to 28
  do {
    passLength = prompt("Enter the password Length between 8-128 inclusive");

    var inputType = typeof passLength;
    console.log("input: " + passLength + "inputType: " + inputType);

    //if the length input is a number
    if (!isNaN(passLength)) {

      passLengthInt = parseInt(passLength);

      //if the length input number is between 8 -128 
      if (passLengthInt > 7 && passLengthInt < 129) {

        alert("You will get a " + passLengthInt + " character length Password");
        isInputNotNumber = false;
        return passLengthInt;
      }
      //if the length input number is between 8 -128 
      else {
        alert("Please choose a number between 8 and 128")
        isInputNotNumber = true;

      }
      //if the length input is not a number
    }
    else {
      alert("Please input a number, try again!");
      isInputNotNumber = true;
    }

  }
  while (isInputNotNumber);

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


//disable generate Password 
function disableButton(btnId) {
  document.getElementById(btnId).disabled = 'true';
}


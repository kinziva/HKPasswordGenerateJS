// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


console.log("App connecting");


generateBtn.addEventListener("click", function (event) {
  event.preventDefault();
  alert("you clicked");

})
var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var special = ['~', '`', '!', '@', '#',
  '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{',
  ']', '}', '\\', '|', ';', ':', '\'', '"', ',', '<', '.', '>', '/',
  '?'];

var lcLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
 "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var ucLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
 "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var passwordOptions = [];

console.log(passwordOptions);

var passLength = prompt("Enter the password Length between 8-129");
passLength = parseInt(passLength);

var passLengthCoverter = parseInt(passLength)
console.log(typeof passLengthCoverter)


if (typeof passLengthCoverter === "number") {
  if (passLength < 6) {
    alert("Please choose between 6 and 128")
  }
  else {
    var addNums = confirm("Would you like numbers")

    if (addNums) {
      passwordOptions.concat(nums)
      console.log(passwordOptions);
    }


    var addSpecial = confirm("Would you like specials")

    if (addSpecial) {
      passwordOptions.concat(special)
      console.log(passwordOptions);
    }

    var addLowerCase = confirm("Would you like lower case letters")

    if (addLowerCase) {
      passwordOptions.concat(alpha)
      console.log(passwordOptions);
    }


    var addUpperCase = confirm("Would you like upper case letters")

    if (addUpperCase) {
      passwordOptions.concat(uc)
      console.log(passwordOptions);
    }


    var userCreatePassworf = "";



    for (let i = 0; i < passLength; i++) {

      var randomPassword = Math.floor(Math.rendom * passwordOptions.length);

      console.log(randomPassword);

      var passwordChar = passwordOptions[randomPassword];
      console.log(passwordChar);

    }


  }



} else {
  alert("jacj")
}


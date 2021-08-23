// Assignment Code
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number ="0123456789"
var special ="!@#$%^&*()_+"

var chars =""
 
var lowerPick = false;
var upperPick = false;
var numberPick = false;
var specialPick = false;

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password ="";
  var confirmLength = '';

  while (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128) {
        confirmLength = parseInt (prompt("What length would you like the password to be 8-128 characters"));
        if (confirmLength === null) {
            break;
        }
    }

  if (confirmLength) {
    if (confirm("Would you like to use lowercase characters?") == true) {
        chars += lower;
        lowerPick = true;
    } 

    if (confirm("Would you like to use uppercase characters?") == true) {
        chars += upper
        upperPick = true
    }

    if (confirm("Would you like to use numerical characters?") == true) {
      chars += number
      numberPick = true
  }

    if (confirm("Would you like to use special characters?") == true) {
        chars += special
        specialPick = true
    }

   
    if (lowerPick === false && upperPick === false && numberPick === false && specialPick === false) {
        alert("At least one character type must be selected")
    }

    for(var i = 0; i < confirmLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars[randomNumber]

    }
    console.log(password)
    return password;
      
}



}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) ; 






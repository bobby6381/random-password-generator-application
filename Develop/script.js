// Code is a template from w3 schools source https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_random3
// Assignment code here

/*function generatePassword() {
  return "$523C%TklSJdFKlSJ"
}*/

function generatePassword() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 8;
  var password = "";
}

// var myName = {
//   first: "bobby", 
//   last: "gallagher",
//   isDriving: true
// };
// console.log(myName.last)

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
console.log("DATA",passwordText)
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

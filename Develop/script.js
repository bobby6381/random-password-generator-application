// Assignment code here
function generatePassword() {
  return "$523C%TklSJdFKlSJ"
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

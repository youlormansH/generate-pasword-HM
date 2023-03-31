var characterlenght = 8; 
var choiceErr = []; 
var specialChar= ['!','@','#',')','&','^','%','*'];
var lowerCass= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
 'o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCass = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
 'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var number=['1','2','3','4','5','6','7','8','9','10',]
// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
getPromts() // return if true or false
  var passwordText = document.querySelector("#password");
passwordText.value= generatePassword()
}

function generatePassword() {
  // generate ps with prompts

  var password = "";
  for(var i = 0; i < characterlenght; i++) {
    var randomindex = Math.floor(Math.random() * choiceErr.length);
    password = password + choiceErr[randomindex];
  }
  return password;

}
function getPromts(){
  choiceErr = [];

  characterlenght = 0
  //nan
  while(isNaN(characterlenght) || characterlenght < 8 || characterlenght > 128) {
    // this shoud be flase
    characterlenght = parseInt(prompt("how many character you want the password to be? (8 - 128"));

  }
  if(confirm( " do you want lowercass letter in you password?")){
    choiceErr = choiceErr.concat(lowerCass);
  }
  if(confirm( " do you want uppercass letter in you password?")){
    choiceErr = choiceErr.concat(upperCass);
  }
  if(confirm( " do you want special character in you password?")){
    choiceErr = choiceErr.concat(specialChar);
  }
  if(confirm( " do you want number in you password?")){
    choiceErr = choiceErr.concat(number);
  }
  return choiceErr;
}

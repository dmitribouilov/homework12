// Assignment Code
var generateBtn = document.querySelector("#generate");

var howLong = parseInt(prompt("How Long is the Password? Needs to be between 8 and 24 characters"), 10)

try {
  if(howLong == "") throw "empty";
  if(isNaN(howLong)) throw "not a number";
    if(howLong < 8) throw "too low";
  if(howLong > 24) throw "too high";
}
catch(err) {
  alert("Input is " + err)
  location.reload()
}





var specialChrQuestion = confirm("Would you like special Characters?")


if (specialChrQuestion) {

  var whichSpecialCharacters = prompt("Which Special Characters would you like?").split('')
  
} else { alert("We need dem special characters man!!")}

var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]







// Write password to the #password input
function writePassword() {
 var password = generatePassword();
 var passwordText = document.querySelector("#password");

 passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//here is where the magic happens

function generatePassword() {

  var pwd = ''


//get a simple pwd with normal letters
for (let index = 0; index < howLong; index++) {
  
  pwd = pwd + alphabetArray[Math.floor(Math.random()*alphabetArray.length)]

  console.log(Math.floor(Math.random()*alphabetArray.length))

  console.log(pwd)

  

  
}

//split that string into array (I could have generated right into array - too lazy to change)

var pwdArray = pwd.split('')

//insert special characters at random places

for (let index = 0; index < whichSpecialCharacters.length; index++) {
  
  chr = whichSpecialCharacters[index]

  pwdArray[Math.floor(Math.random()*pwdArray.length)] = chr

  console.log(chr)
  
}


console.log(whichSpecialCharacters)

console.log(pwdArray)

//put the password array back into a string

pwdFinal = ''

for (let index = 0; index < pwdArray.length; index++) {
  pwdFinal = pwdFinal + pwdArray[index]

    
}

return pwdFinal
  
}


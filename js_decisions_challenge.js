var randomNumber
var userNumber
var guessCounter = 1
var userName

function inputName(){
  userName = prompt("Enter your name:")
  return userName
}

function getNumber() {
  randomNumber = Math.floor((Math.random()*10)+ 1)
  console.log(randomNumber);
  return randomNumber
}

getNumber()

function userGuess() {
  userNumber = prompt("Guess a number between 1 and 10\nNumber of Guess: " + guessCounter)
  if (isNaN(userNumber) ){
    alert("You must enter a number")
  }
  return userNumber
}

inputName()

while (userNumber != randomNumber && guessCounter < 4) {
  userGuess()
  guessCounter++
  // var changeToNumber = parseInt(userNumber)
  if (userNumber === null){
    alert("you quit!!\nThe number was: " + randomNumber)
    break
  }
  if (userNumber < randomNumber) {
    alert("You guessed too low!")
  } else if (userNumber > randomNumber) {
    alert("You guessed too high!")
  }
  else if (parseInt(userNumber) === randomNumber){
    alert(userName + " YOU GUESSED THE NUMBER!!!")
  } //end of if statement
} //end of while loop

alert(userName + " You failed!!\nThe number was: " + randomNumber)

// reverse program (computer guesses number) by telling computer to generate new random number within NEW min/max based on if the generated number was too high or low

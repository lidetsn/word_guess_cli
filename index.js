// dont forget to install inquirer and raandom-words npm
//npm install inquirer
//npm instal random-words

var inquirer = require("inquirer");
var wordclass = require("./word.js");
var guessesLeft = 8;
var attemtLeft = false;
var letterGuessed = new Set();


var word = new wordclass();
var letterLeft = word.letters.length;

function getLetters(){
    word.showLetters();
    inquirer.prompt([
        {
            type: "input",
            name: "letter",
            message: "Guess the letters in the word"
        }
    ]).then( function(response){
        getguessedLetters(response.letter);
        if(!attemtLeft){
            getLetters();
        }
    })
}

getLetters();


function getguessedLetters(letter){
    if(letter.length === 1){
        if(!letterGuessed.has(letter)){
            letterGuessed.add(letter);
        }
        else{
            console.log("this Letter has been guessed already!\n");
            return;
        }
        var num_correct = word.checkGuess(letter);
        console.log(num_correct);
        if( num_correct > 0){
            console.log("you Got it!\n");
            letterLeft -= num_correct;
        }
        else{
            guessesLeft--;
            console.log("wrong guess!  " + guessesLeft + " attempt remaining\n");
        }
    
        if(letterLeft === 0){
            console.log("congratulations you got all of them !");
            word.showLetters();
            attemtLeft = true;
        }
    
        if(guessesLeft === 0){
            console.log("sorry you did not get that!");
            console.log("the Word was " + word.word)
           attemtLeft = true;
        }

    }
    else{
        console.log("one letter at a time!\n");
    }
    
    
}
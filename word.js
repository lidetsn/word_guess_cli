
// dont forget to install inquirer and raandom-words npm
//npm install inquirer
//npm instal random-words
var letter = require("./letter.js");
var randomWord = require("random-words");

function getWord(){

    var letters = [];

    
    var word = randomWord();
    this.word = word;
    var wordArray = word.split("");

    wordArray.forEach( function(lett){
        var wLetter = new letter(lett);
        letters.push(wLetter);
    });

    this.letters = letters;

    this.showLetters = function(){
        var display = "";
        this.letters.forEach( function(letter){
            display += letter.getChar() + " ";
        });

        display = display.slice(0, -1);

        console.log(display);
    }

    this.checkGuess = function( guess ){
        var matcheFound = 0;
        this.letters.forEach( function(letter){
            if( letter.guessed === false && letter.checkGuess(guess) === true){
                letter.guessed = true;
                matcheFound ++;
            }
        });

        return matcheFound ;
        
    }
}

module.exports = getWord;
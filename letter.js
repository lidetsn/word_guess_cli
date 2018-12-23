// dont forget to install inquirer and raandom-words npm
//npm install inquirer
//npm instal random-words
function Letter(letter){
    this.letter = letter;
    this.guessed = false;

    
    this.getChar = function(){
        if(this.guessed === false){
            return "_";
        }
        else{
            return this.letter;
        }
    }
    
    this.checkGuess = function(guess){
        if(guess === this.letter){
            this.guessed = true;
            return true;
        }
        else{
            return false;
        }
    }

}

module.exports = Letter;
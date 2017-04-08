'use strict'

module.exports = {
 
 fizzBuzz:  function(num ){
    //check whether number is divisible by 3 and 5
        if(num % 3 === 0 && num % 5 === 0){
            return 'FizzBuzz';
        }
    // check for divisibility only by 3
        else if(num % 3 === 0){
            return 'Fizz';
        }
    //checking for divisibility only by 5
        else if(num % 5 === 0){
            return 'Buzz';
        }
    // return if not divisible
        else{
            return num;
        }
    }

}

 
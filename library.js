

module.exports = {

getPrimes: function(max) {
  if (typeof max === "string"){       //check if argument is a string
    return "Not a valid argument"
  }
  
  else{

        var x = [], i, j, primes = [];      //variables declared but not initialized
        for (i = 2,l=max; i <= l; ++i) {     
            if (!x[i]) {
                primes.push(i);             
                for (j = i << 1,l=max; j <= l; j += i) {
                    x[j] = true;
                }
            }
        }
        return primes;
    }

    }}




 
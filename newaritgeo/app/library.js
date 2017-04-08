

module.exports = {
 
 

//This function determines either a geometric progression or arithmetric progression or none

aritGeo: function(array){                 
    var a = array[0],         //Where a is the first term of the series in the array      
        d = array[1] - array[0];  //where d is the common difference
    
    if(a=== undefined ){
      return 0;
    }
    var i,
        len=array.length;
    for(i=1; i<len - 1; i++){   //loop starting from the second element in the array

      var c=array[i +1] - array[i]       //difference of i+1 element and i

        if (c === d){                   
            continue;      //if c===d , move to the next element in the array 
        }

        return gpOrNotGp(array)  //if c!=d for an element then array can either be 
                                  //geometric progression or none. Thus we call another function 
    }

    return "Arithmetic";


   function gpOrNotGp(array){ //It determines a Gp or Not a Gp
         
          var a = array[0],    //where a is the first term ofthe series in the array
              r = array[1] / array[0];  //r isthe common ratio
          var j,
              len = array.length;
          for (j=1; j<len - 1; j++){  //loop starting from the second element in the
         
            var e = array[j + 1] /array[j]  //array difference of i+1 element and i
         
            if(e === r){  //the ratio of i+1 element to i
         
              continue;   //if c===d , move to the next element in the array 
         
            }
            return  -1   //"neither Arithmetric or Geometric"
          }
          return "Geometric"
        }



    }
}    




 
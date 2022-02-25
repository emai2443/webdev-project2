// SOME //
Array.prototype.mySome = function(callBack) {
    for(let i = 0; i < this.length; i++){   //for loop each element of the array
        if(this[i] === element) {   //if current element satisfy element clause
            return true;        //return true
        }   
        else{
            return false;   //otherwise return false
        }
    }
};

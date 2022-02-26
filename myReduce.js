// REDUCE //
Array.prototype.myReduce = function(callBack, intialValue) {
    let result = intialValue;
    for(let i = 0; i < this.length; i++){
        result += this[i];
        callBack(result);
    }
    return result;
};

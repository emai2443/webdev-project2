// INDEXOF //
Array.prototype.myIndexOf = function(value, startValue) {
    if(startValue === undefined){
        startValue = 0;
    }
    for(let i = startValue; i < this.length; i++){
        if(this[i] === value){
            return i;
        }
    }
    return -1;
};
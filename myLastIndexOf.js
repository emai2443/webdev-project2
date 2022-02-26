// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(value, fromIndex) {
    if(fromIndex === undefined){
        fromIndex = 0;
    }
    for(let i = this.length-1; i = fromIndex; i--)
    {
        if(value === this[i]){
            let result = this.indexOf(i);
            return result
        }
    }
    return -1;
};  


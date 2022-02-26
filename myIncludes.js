// INCLUDES //
Array.prototype.myIncludes = function(target) {
    for(let i = 0; i < this.length; i++){
        if(this[i] === target)
        {
            return true;
        }
    }
    return false;
};


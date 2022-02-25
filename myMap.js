// MAP //
Array.prototype.myMap = function(callBack) {
    let resArr = []; //empty array
    for(let i = 0; i < this.length; i++){ //traverse the array inputed
        if(this[i] === undefined){continue;} //skip empty element
        resArr.push(callBack(this[i], i, this)); //push:(the function which holds(val, index, array) into the resulting array)
    }
    return resArr;
};

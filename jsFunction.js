Array.prototype.myEach = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {   // "this" keyword refers to the array being called.
        if (this[i] === undefined) continue;
        // callbackFn can take up to 3 input parameters:
        // element
        // element, index
        // element, index, array
        callbackFn(this[i], i, this);   // callbackFn is "console.log(x,i,myArray)" 
    }
};
// MAP //
Array.prototype.myMap = function(callBack) {
    let resArr = []; //empty array
    for(let i = 0; i < this.length; i++){ //traverse the array inputed
        if(this[i] === undefined){continue;} //skip empty element
        resArr.push(callBack(this[i], i, this)); //push:(the function which holds(val, index, array) into the resulting array)
    }
    return resArr;
};
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
// REDUCE //
Array.prototype.myReduce = function(callBack, intialValue) {
    let result = intialValue;
    for(let i = 0; i < this.length; i++){
        result += this[i];
        callBack(result);
    }
    return result;
};
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
// PUSH //
Array.prototype.myPush = function(...args) {  // Use rest parameter to accept any number of input arguments
    let args_index = 0;  // Index of new element
    let length = this.length;   // Length of "this" array
    // The last element of "this" array is at length - 1
    for (let i = length; i < length + args.length; i++) {
        this[i] = args[args_index];  // Add new element to end of "this" array
        args_index++;
    }
    return this.length;  // Return new length of "this" array
};
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
// KEYS //
Object.myKeys = function(anObj) {
    let resArr = [];
    for(let objKey in anObj){
        resArr.push(`${objKey}`);
    }
    return resArr;
};  
// VALUES //
Object.myValues = function(anObj) {
    let resArr = [];
    for(let objValue in anObj){
        resArr.push(anObj[objValue]);
    }
    return resArr;
};

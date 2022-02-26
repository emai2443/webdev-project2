// KEYS //
Object.myKeys = function(anObj) {
    let resArr = [];
    for(let objKey in anObj){
        resArr.push(`${objKey}`);
    }
    return resArr;
};  

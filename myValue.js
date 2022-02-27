// VALUES //
Object.myValues = function(anObj) {
    let resArr = [];
    for(let objValue in anObj){
        resArr.push(anObj[objValue]);
    }
    return resArr;
};

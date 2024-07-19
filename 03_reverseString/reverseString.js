const reverseString = function(text) {
    let toReverse = text.split("");
    toReverse = toReverse.reverse()
    let reversedString = "";
    for (i=0;i<toReverse.length;i++){
        reversedString += toReverse[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

const removeFromArray = function(array, ...args) {
    let newArray = [];
    for ( each of array) {
        if (!args.includes(each)) {
            newArray.push(each);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

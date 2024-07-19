const sumAll = function(start, finish) {
    let finalSum = 0;
    if (start < 0 || finish < 0) {
        return 'ERROR';
    } else if (typeof(start) == "number" && typeof(finish) == "number") {
        if (start > finish) {
            for (let i=finish;i<=start;i++) {
                finalSum += i;
            }
        } else {
            for (let i=start;i<=finish;i++) {
                finalSum += i;
            }
        }
        return finalSum;
    } else {
        return 'ERROR';
    }
    
};

// Do not edit below this line
module.exports = sumAll;

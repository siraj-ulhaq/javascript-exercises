const repeatString = function(text, number) {
    let toRepeat = text;

    if (text == '') {
        return '';
    }

    if (number == 0) {
        return "";
    } else if (number < 0) {
        return "ERROR";
    } else if (number > 0) {
        for (i = 1; i < number; i++){
            toRepeat += text;
        }
        return toRepeat;
    }
};

// Do not edit below this line
module.exports = repeatString;

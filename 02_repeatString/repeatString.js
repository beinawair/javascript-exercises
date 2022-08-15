const repeatString = function(string, number) {
    let stringHolder = "";
    
    for (let i = 0; i < number; i++) {
        stringHolder += string;
    }
    
    if(number < 0) return "ERROR";

    return stringHolder;
};

// Do not edit below this line
module.exports = repeatString;

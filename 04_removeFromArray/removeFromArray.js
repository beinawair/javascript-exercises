const removeFromArray = function(...value) {
    const arr = value[0];
    const newArray = [];

    arr.forEach(val => {
        if(!value.includes(val)) {
            newArray.push(val)
        }
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

const palindromes = function (string) {
    let palingdromeString = string.toLowerCase().replace(/[^a-z]/g, "");

    return (palingdromeString.split("").reverse().join("") === palingdromeString);
};

// Do not edit below this line
module.exports = palindromes;

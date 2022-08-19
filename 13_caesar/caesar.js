const caesar = function(word, num) {
    return word.split("").map(char => shiftWord(char, num)).join("");
};

const codeSet = code => (code < 97 ? 65 :   97);

const mod = (a, b) => (a % b + b) % b;

const shiftWord = (char, num) => {
    const code = char.charCodeAt();

    if((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        return String.fromCharCode(
            mod(code + num - codeSet(code), 26) + codeSet(code)
        )
    }
    return char;
}
// Do not edit below this line
module.exports = caesar;

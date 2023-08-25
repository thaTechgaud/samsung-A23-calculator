
function stringToNumber(arg) {
    return parseFloat(arg);
}

function charIsNaN(char) {
    return isNaN(parseFloat(char));
}

export {
    stringToNumber,
    charIsNaN,
};
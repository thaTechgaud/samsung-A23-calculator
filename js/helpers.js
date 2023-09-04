
function stringToNumber(arg) {
    return parseFloat(arg);
}

function charIsNaN(char) {
    return isNaN(parseFloat(char));
}

function valueWithoutSpaceInItFunc(inputValue) {
    return inputValue.replaceAll(' ', '');
}

export {
    stringToNumber,
    charIsNaN,
    valueWithoutSpaceInItFunc,
};
import { charIsNaN, stringToNumber, valueWithoutSpaceInItFunc } from './helpers.js';

const calcBtns = document.getElementsByClassName('calc-btn');
const userInput = document.getElementById('user-input');
const spanUserInput = document.getElementById('span-user-input');

for (let i = 0; i < calcBtns.length; i += 1) {
    calcBtns[i].addEventListener('click', function () {
        let btnContent = calcBtns[i].innerHTML;
        const btnContent_isNaN = charIsNaN(btnContent);

        const zeroInputLengthAndBtnContentIsaNumber = userInput.value.length === 0 && !btnContent_isNaN;
        const deleteBtn = calcBtns[i].getAttribute('id') === 'delete-btn';
        const equaltoOrDeleteBtn = btnContent === '=' || deleteBtn;
        const calcSigns = btnContent_isNaN && !equaltoOrDeleteBtn;
        const inputHasLengthAndIsaCalcSign = userInput.value.length && calcSigns;
        if (!btnContent_isNaN || zeroInputLengthAndBtnContentIsaNumber || inputHasLengthAndIsaCalcSign) {
            userInput.value += btnContent;
        }

        const secondToLastPosition = userInput.value.length - 2;
        const lastCharUserInput = userInput.value.charAt(userInput.value.length - 1);
        const secondTolastCharUserInput = userInput.value.charAt(secondToLastPosition);
        const lastCharIsNaN = charIsNaN(lastCharUserInput);
        const secondTolastCharIsNaN = charIsNaN(secondTolastCharUserInput);
        const thirdToLastPosition = userInput.value.length - 3;
        const thirdToLastCharUserInput = userInput.value.charAt(thirdToLastPosition);
        const thirdToLastCharIsNaN = charIsNaN(thirdToLastCharUserInput);

        const calcSignsSitSideBySideAndInputHasLength = lastCharIsNaN && secondTolastCharIsNaN && userInput.value.length;
        const twoZerosSitSideBySideAndCalcSignPreceeds = thirdToLastCharIsNaN && stringToNumber(lastCharUserInput) === 0 && stringToNumber(secondTolastCharUserInput) === 0;
        if (calcSignsSitSideBySideAndInputHasLength || twoZerosSitSideBySideAndCalcSignPreceeds) {
            userInput.value = userInput.value.slice(0, secondToLastPosition) + btnContent;
        }

        if (thirdToLastCharIsNaN && stringToNumber(secondTolastCharUserInput) === 0 && !lastCharIsNaN) {
            userInput.value = userInput.value.slice(0, secondToLastPosition) + userInput.value.slice(-1);
        }

        // Delete button should delete input content from right to left
        if (deleteBtn) {
            userInput.value = userInput.value.slice(0, -1);
        }

        // Input field should grow from right to left as content increase
        userInput.value = valueWithoutSpaceInItFunc(userInput.value);
        spanUserInput.innerHTML = valueWithoutSpaceInItFunc(userInput.value);
        userInput.style.width = `${spanUserInput.offsetWidth}px`;



    });
}


// App specifications:
// UI - related ones:
// DONE! We don't want to show = sign inside input
// DONE! We don't want to show DEL sign inside input
// DONE! Maths signs cannot be first input value
// DONE! Two Math signs cannot sit side by side instead replace the math sign in the same position
// DONE! 2 zeros cannot sit side by side
// DONE! Number 0 (Zero) cannot be first input value when input value length is greater than 1
// DONE! We don't want to be able to enter content on input - only on button click
// DONE! Input field should grow from right to left as content increase
// DONE! We want the delete button to remove the values in the input from right to left
// IN PROGRESS! Add calc title in html later - Samsung Galaxy A23 style calulator
// TODO LATER: We don't want to allow letters or any other characters in the input fields that is not on the buttons [note: We have done for empty spaces already]
// TODO LATER: Add a blinking cursor to input field UI area

// Functionality - related ones:
// We want calc to perform math calculations at the points when we we introduce +, -, / and * signs
// We want the result displayed below it as soon as calcutions take place, and/or when = sign is clicked.
// We want calculations to happen as specified above, even as the delete happens

// Reminder to use forEach for buttons instead of for Loop
// Reminder to update readme file with necessary info
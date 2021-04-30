const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate (operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
    }
}

const display = document.querySelector('.screen');
const btns = document.querySelectorAll('.btn');
/*
const oneBtn = document.querySelector('.one');
const twoBtn = document.querySelector('.two');
const threeBtn = document.querySelector('.three');
const fourbtn = document.querySelector('.four');
const fiveBtn = document.querySelector('.five');
const sixBtn = document.querySelector('.six');
const sevenBtn = document.querySelector('.seven');
const eightBtn = document.querySelector('.eight');
const nineBtn = document.querySelector('.nine');
const zeroBtn = document.querySelector('.zero');
*/

// main click function
function clickHandler (btn) {
    btn.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                currentInput = currentInput.concat(e.target.innerText)
                display.textContent = currentInput;
                break;
            case 'AC':
                currentInput = '';
                operA = 0;
                operB = 0;
                display.textContent = '0';
                break;
            case '+':
                currentInput = operate('+', operA, parseFloat(currentInput));
                display.textContent = currentInput;
                operA = parseFloat(currentInput);
                currentInput = '';
                currentOperator = '+';
                break;
            case '=':
                operB = parseFloat(currentInput);
                currentInput = operate(currentOperator, operA, operB).toString();
                display.textContent = currentInput;
                operA = parseFloat(currentInput);
                currentInput = '';
        }
    })
}

let currentInput = '';
let operA = 0;
let operB = 0;
let currentOperator = '';
btns.forEach(btn => clickHandler(btn));


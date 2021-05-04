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
        case "x":
            return multiply(a, b);
            break;
        case "÷":
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

// render function
function render (result) {
    if (result.length > 12) {
        display.textContent = parseFloat(result).toExponential(7);
    } else if (result == 'Infinity') {
        display.textContent = 'Error'
    } else {
        display.textContent = result;
    }
}

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
                if (lastBtn == 'equal') {
                    operA = 0;
                    currentInput = currentInput.concat(e.target.innerText);
                    render(currentInput);
                    lastBtn = 'num';
                } else {
                    currentInput = currentInput.concat(e.target.innerText);
                    render(currentInput);
                    lastBtn = 'num';
                }
                console.log(lastBtn);
                break;
            case 'AC':
                currentInput = '';
                operA = 0;
                operB = 0;
                render('0');
                lastBtn = 'clear';
                console.log(lastBtn);
                break;
            case '.':
                if (display.textContent.includes('.')) {
                    break;
                } else {
                    if (currentInput == '') {
                        if (lastBtn == 'equal') {
                            operA = 0;
                            currentInput = currentInput.concat('0' + e.target.innerText);
                            render(currentInput);
                            lastBtn = 'num';
                        } else {
                            currentInput = currentInput.concat('0' + e.target.innerText);
                            render(currentInput);
                            lastBtn = 'num';
                        }
                    } else {
                        if (lastBtn == 'equal') {
                            operA = 0;
                            currentInput = currentInput.concat(e.target.innerText);
                            render(currentInput);
                            lastBtn = 'num';
                        } else {
                            currentInput = currentInput.concat(e.target.innerText);
                            render(currentInput);
                            lastBtn = 'num';
                        }
                    }
                    break;
                }
            case '+/-':
                if (lastBtn == 'equal') {
                    operA = 0;
                    currentInput = (parseFloat(display.textContent) * -1).toString();
                    render(currentInput);
                    lastBtn = 'num';
                } else {
                    currentInput = (parseFloat(display.textContent) * -1).toString();
                    render(currentInput.toString());
                    lastBtn = 'num';
                }
                break;
            case '%':
                if (lastBtn == 'equal') {
                    operA = 0;
                    currentInput = (parseFloat(display.textContent) / 100).toString();
                    render(currentInput);
                    lastBtn = 'num';
                } else {
                    currentInput = (parseFloat(display.textContent) / 100).toString();
                    render(currentInput);
                    lastBtn = 'num';
                }
                break;
            case '+':
            case '-':
            case '÷':
            case 'x':
                if (lastBtn == 'clear') {
                    currentOperator = e.target.innerText;
                    lastBtn = 'operator';
                }
                else if (lastBtn == 'equal') {
                    operA = parseFloat(display.textContent);
                    currentOperator = e.target.innerText;
                    lastBtn = 'operator';
                }
                else if (lastBtn == 'operator') {
                    currentOperator = e.target.innerText;
                    lastBtn = 'operator';
                }
                else {
                    if (operA != 0) {
                        currentInput = operate(e.target.innerText, operA, parseFloat(currentInput));
                        render(currentInput);
                    }
                    operA = parseFloat(currentInput);
                    currentInput = '';
                    currentOperator = e.target.innerText;
                    lastBtn = 'operator';
                }
                console.log(lastBtn);
                break;
            case '=':
                if (lastBtn == 'clear') {
                    break;
                }
                else if (lastBtn == 'equal') {
                    operA = parseFloat(display.textContent);
                    currentInput = operate(currentOperator, operA, operB).toString();
                    render(currentInput);
                    operA = parseFloat(currentInput);
                    currentInput = '';
                    lastBtn = 'equal';
                }
                else {
                    operB = parseFloat(currentInput);
                    currentInput = operate(currentOperator, operA, operB).toString();
                    render(currentInput);
                    operA = parseFloat(currentInput);
                    currentInput = '';
                    lastBtn = 'equal';
                }
                console.log(lastBtn);
                break;
        }
    })
}

let currentInput = '';
let operA = 0;
let operB = 0;
let currentOperator = '';
let lastBtn = 'clear';
btns.forEach(btn => clickHandler(btn));


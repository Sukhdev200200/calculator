const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === 'C') {
            clearDisplay();
        } else if (value === '=') {
            calculate();
        } else if (['+', '-', '*', '/'].includes(value)) {
            setOperator(value);
        } else {
            updateDisplay(value);
        }
    });
});

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = null;
    display.textContent = '';
}

function updateDisplay(value) {
    currentInput += value;
    display.textContent = currentInput;
}

function setOperator(value) {
    if (currentInput === '') return;
    operator = value;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    if (previousInput === '' || currentInput === '' || operator === null) return;

    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    let result;

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }

    display.textContent = result;
    currentInput = result.toString();
    operator = null;
}

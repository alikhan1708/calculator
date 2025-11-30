let currentNumber = ''; 
let previousNumber = '';
let operation = null;

function appendNumber(number) {
    if (number === '.' && currentNumber.includes('.')) return; // только одна точка
    currentNumber += number;
    updateDisplay();
}

function chooseOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';  
}

function calculate() {
    let result = 0; 
    let prev = parseFloat(previousNumber);
    let curr = parseFloat(currentNumber);

    if (isNaN(prev) || isNaN(curr)) return;

    if (operation === '+') result = prev + curr;
    else if (operation === '-') result = prev - curr;
    else if (operation === '*') result = prev * curr;
    else if (operation === '/') {
        result = curr === 0 ? "Ошибка" : prev / curr;
    } else return;

    currentNumber = result.toString(); 
    operation = null;
    previousNumber = '';
    updateDisplay();
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = currentNumber || '0';
}
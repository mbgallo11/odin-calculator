let currentValue = '';
let currentOperator = '';
let displayValue = '';

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}

function appendValue(value) {
  currentValue += value;
  displayValue += value;
  updateDisplay();
}

function appendOperator(operator) {
  currentValue += ' ' + operator + ' ';
  displayValue += ' ' + operator + ' ';
  updateDisplay();
}

function appendDecimal() {
  if (!currentValue.includes('.')) {
    currentValue += '.';
    displayValue += '.';
    updateDisplay();
  }
}

function clearDisplay() {
  currentValue = '';
  displayValue = '';
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(currentValue);
    currentValue = result.toString();
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

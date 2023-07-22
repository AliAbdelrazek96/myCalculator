
//grab HTML elements
const ACButton = document.getElementById('AC');
const plusMinusButton = document.getElementById('plus-minus');
const percentageButton = document.getElementById('percentage');
const divideButton = document.getElementById('divide');

const sevenButton = document.getElementById('seven');
const eightButton = document.getElementById('eight');
const nineButton = document.getElementById('nine');
const multiplyButton = document.getElementById('multiply');

const fourButton = document.getElementById('four');
const fiveButton = document.getElementById('five');
const sixButton = document.getElementById('six');
const subtractButton = document.getElementById('subtract');

const oneButton = document.getElementById('one');
const twoButton = document.getElementById('two');
const threeButton = document.getElementById('three');
const addButton = document.getElementById('add');

const zeroButton = document.getElementById('zero');
const decimalButton = document.getElementById('decimal');
const equalsButton = document.getElementById('equals');

const display = document.getElementById('display');

// Function to update the display with the clicked number
function updateDisplay(number) {
  display.textContent += number;
}

// Clear the display when AC button is clicked
ACButton.addEventListener('click', function() {
  display.textContent = '';
});

// Click event listeners for number buttons
zeroButton.addEventListener('click', function() {
  updateDisplay('0');
});

oneButton.addEventListener('click', function() {
  updateDisplay('1');
});

twoButton.addEventListener('click', function() {
  updateDisplay('2');
});

threeButton.addEventListener('click', function() {
  updateDisplay('3');
});

fourButton.addEventListener('click', function() {
  updateDisplay('4');
});

fiveButton.addEventListener('click', function() {
  updateDisplay('5');
});

sixButton.addEventListener('click', function() {
  updateDisplay('6');
});

sevenButton.addEventListener('click', function() {
  updateDisplay('7');
});

eightButton.addEventListener('click', function() {
  updateDisplay('8');
});

nineButton.addEventListener('click', function() {
  updateDisplay('9');
});

decimalButton.addEventListener('click', function() {
  updateDisplay('.');
});







//define variables
let firstNumber;
let secondNumber;
let operator;



//basic functions
function add(a,b) {
    return a + b
}

function subtract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    return a/b 
}


function operate(a,op,b) {
    add(firstNumber,secondNumber)
}




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

//define variables
let currentValue = '';
let firstNumber;
let secondNumber;
let operator;


// Function to update the display with the clicked number
function updateDisplay(entry) {
  display.textContent += entry;
  currentValue += entry;
}

// Clear the display when AC button is clicked
ACButton.addEventListener('click', function() {
  display.textContent = '';
});

//display numbers when number buttons are displayed
const nums = document.querySelectorAll('.num')

nums.forEach((button) => {
    button.addEventListener('click', () => {
        if (!currentValue) {
            display.textContent = '';
        }
        if (!operator) {
            firstNumber = Number(button.textContent);
            updateDisplay(firstNumber);
        } else if (operator) {
            secondNumber = Number(button.textContent);
            updateDisplay(secondNumber);
        }
    })
})

//when an operator is pressed, store the number in firstNumber, 
//save which operation was chosen
//run the function(operate) when the = button is pressed
const operatorButtons = document.querySelectorAll('.operator')
//now we grabbed all operators in a nodeList


//display and select operator when it's pressed
operatorButtons.forEach((button)=> {
    button.addEventListener('click', () => {
        if (!operator) {
                operator = button.textContent; //save operator
                updateDisplay(operator)
        }
    })
})

equalsButton.addEventListener('click', operate)



//basic functions
// function add(a,b) {
//     return a + b
// }

// function subtract(a,b) {
//     return a - b
// }

// function multiply(a,b) {
//     return a * b
// }

// function divide(a,b) {
//     return a/b 
// }

function operate() {
    if (operator && typeof firstNumber !== 'undefined' && typeof secondNumber !== 'undefined') {
      switch (operator) {
        case '+':
          firstNumber += secondNumber;
          break;
        case '-':
          firstNumber -= secondNumber;
          break;
        case '*':
          firstNumber *= secondNumber;
          break;
        case '/':
          firstNumber /= secondNumber;
          break;
      }
      display.textContent = firstNumber;
      currentValue = '';
      operator = '';
      secondNumber = undefined;
    }
  }

  


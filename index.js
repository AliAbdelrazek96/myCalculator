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
let firstNumber = '';
let secondNumber = '';
let operator = '';



// // Clear the display when AC button is clicked
ACButton.addEventListener('click', clearThings);
function clearThings() {
  display.textContent = ''
  currentValue = ''
  firstNumber = ''
  secondNumber = '';
  operator='';
}

// //display numbers when number buttons are displayed
const nums = document.querySelectorAll('.num')
nums.forEach((button) => {
    button.addEventListener('click', () => {
      if (operator && !secondNumber) { //operator = '+', currentValue = '99'
         display.textContent = '';
         display.textContent += button.textContent; 
         secondNumber += display.textContent //we stop it after secondNumber is true
         secondNumber = Number(secondNumber)
      } 
      else if (operator && secondNumber) {
         display.textContent += button.textContent;
         currentValue = display.textContent
         secondNumber = Number(currentValue)
         console.log(secondNumber)
      }
      else if (!operator) {
        display.textContent += button.textContent;
        currentValue = display.textContent;
      }
    })
})

// //when an operator is pressed, store the number in firstNumber, 
// //save which operation was chosen
// //run the function(operate) when the = button is pressed
const operatorButtons = document.querySelectorAll('.operator')
operatorButtons.forEach((button)=> {
    button.addEventListener('click', () => {
        if (!operator) {
                operator = button.textContent;
                firstNumber = Number(currentValue)
                console.log(firstNumber)
                console.log(operator)
            }
    })
})

equalsButton.addEventListener('click', () => operate(operator, firstNumber, secondNumber))



  function updateDisplay(result) {
    display.textContent = result;
    console.log(result)
  }


  function add(a,b) {
    updateDisplay(a + b);
}

function subtract(a,b) {
    updateDisplay(a - b)
}

function multiply(a,b) {
    updateDisplay(a * b)
}

function divide(a,b) {
    updateDisplay(a / b); 
}


function operate(op,first,second) {
  switch (op) {
            case '+':
              add(first,second)
              break;
            case '-':
              subtract(first,second);
              break;
            case '*':
              multiply(first,second);
              break;
            case '/':
              divide(first,second);
              break;
          }
        }

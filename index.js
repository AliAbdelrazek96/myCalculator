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
  display.textContent = '';
  currentValue = ''
  firstNumber = ''
  secondNumber = '';
  operator='';
}

// //display numbers when number buttons are displayed
const nums = document.querySelectorAll('.num')
nums.forEach((button) => {
    button.addEventListener('click', () => {
      //if no numbers yet
     if (!operator) {
        display.textContent += button.textContent;
        currentValue = display.textContent;
      }
      //if there's a firstnumber but no secondnumber
      else if (operator && !secondNumber) {
        debugger; //operator = '+', currentValue = '99'
        if (!currentValue.includes('.')) { 
          display.textContent = '';
        }
        display.textContent += button.textContent; 
        secondNumber += display.textContent //we stop it after secondNumber is true
        console.log(secondNumber)
     }  
     //handling continuous calculations
     else if (operator && secondNumber) {
        display.textContent += button.textContent;
        currentValue = display.textContent
        secondNumber = currentValue;
        console.log(secondNumber)
     }
    })
})

//handling decimals
decimalButton.addEventListener('click', ()=> {
  // Check if the current display already contains a decimal point
  if (currentValue.includes('.') && !operator) {
    return;
  }
  
  if (operator && !Number(currentValue) < 1) {
  display.textContent = '';   //doesn't work width numn
  currentValue = ''; }
  display.textContent += '.';
  currentValue += '.';
})






// //when an operator is pressed, store the number in firstNumber, 
// //save which operation was chosen
// //run the function(operate) when the = button is pressed
const operatorButtons = document.querySelectorAll('.operator')
operatorButtons.forEach((button)=> {
    button.addEventListener('click', () => {
        if (!operator) {
                operator = button.textContent;
                firstNumber = currentValue
                console.log(firstNumber)
                console.log(operator)
            }
        if (operator && secondNumber && secondNumber != '.') { //both exist and instead of equals, u press another operator!
          operate(operator, firstNumber, secondNumber) //first calculate the first one
          operator = button.textContent; //then reset the operator
          secondNumber = ''; 
        }
    })
})

//calculate result
equalsButton.addEventListener('click', () => operate(operator, Number(firstNumber), Number(secondNumber)))


//display result and reset for next calculation
  function displayResult(result) {
    display.textContent = Math.round(result*1000)/1000; 
    firstNumber = result //this become first number for next calculation!
    currentValue = firstNumber
    console.log(firstNumber)
    secondNumber = ''; //secondNumber is reset;
    operator = ''; //operator is reset, will b
    }


    //basic functions
  function add(a,b) {
    displayResult(a + b);
}

function subtract(a,b) {
    displayResult(a - b)
}

function multiply(a,b) {
    displayResult(a * b)
}

function divide(a,b) {
   if (b === 0) {
    display.textContent = 'Error'
    return;}
    displayResult(a / b); 
}

//implement functionality
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

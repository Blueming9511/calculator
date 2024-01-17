const buttons_area = document.querySelector('.button-area')
buttons_area.style.gridTemplateColumns = `repeat(4, 1fr)`
buttons_area.style.gridTemplateRows = `repeat(4, 1fr)`

let previousValue = ''
let currentValue = ''
let currentOperator = ''
let isDotUsed = false
let isEqualUsed = false;
document.addEventListener('DOMContentLoaded', () => {
  let equal = document.querySelector('#equal')
  let clear = document.querySelector('#clear')
  let operators = document.querySelectorAll('.operator')
  let numbers = document.querySelectorAll('.number')
  let previousScreen = document.querySelector('.previous')
  let currentScreen = document.querySelector('.result')
  let dot = document.querySelector('.dot')
  numbers.forEach(number =>
    number.addEventListener('click', function (e) {
      currentScreen.textContent = ''
      handleNumber(e.target.textContent)
      currentScreen.textContent = currentValue
    })
  )

  equal.addEventListener('click', function () {})

  clear.addEventListener('click', function () {
    handleClear()
    currentScreen.textContent = currentValue
    previousScreen.textContent = ' '
  })

  operators.forEach(operator =>
    operator.addEventListener('click', function (e) {
      currentOperator = e.target.textContent
      handlePrevious()
      currentScreen.textContent = ''
      previousScreen.textContent = previousValue + ' ' + e.target.textContent
    })
  )

  equal.addEventListener('click', function () {
    isEqualUsed = true;
    let preNumber = Number(previousValue)
    let currNumber = Number(currentValue)
    let result = preNumber * currNumber
    currentScreen.textContent = result;
    switch (currentOperator) {
      case '/':
        previousScreen.textContent =
          previousValue + ' ' + currentOperator + ' ' + currentValue
        if (currNumber === 0) {
          currentScreen.textContent = 'Cannot devided by 0!'
        }
        result = Number((preNumber / currNumber).toFixed(5))
        currentScreen.textContent = result.toString()
        currentValue = "";
        currentValue = result.toString()
        break
        case 'x':
          previousScreen.textContent =
            previousValue + ' ' + currentOperator + ' ' + currentValue
  
          result = preNumber * currNumber
          currentScreen.textContent = result.toString();
          currentValue = "";
          currentValue = result.toString();
          break
      case '+':
        previousScreen.textContent =
          previousValue + ' ' + currentOperator + ' ' + currentValue

        result = preNumber + currNumber
        currentScreen.textContent = result.toString();
        currentValue = "";
        currentValue = result.toString();
        break
      case '-':
        previousScreen.textContent =
          previousValue + ' ' + currentOperator + ' ' + currentValue

        result = preNumber - currNumber
        currentScreen.textContent = result.toString();
        currentValue = "";
        currentValue = result.toString();
        break
      case '^':
        previousScreen.textContent =
          previousValue + ' ' + currentOperator + ' ' + currentValue

        result = preNumber ** currNumber
        currentScreen.textContent = result.toString();
        currentValue = "";
        currentValue = result.toString();
        break
      case '%':
        previousScreen.textContent =
          previousValue + ' ' + currentOperator + ' ' + currentValue

        result = preNumber % currNumber
        currentScreen.textContent = result.toString()
        currentValue = "";
        currentValue = result.toString()
        break
    }
    if(isDotUsed){
      currentValue = result.toString();
    }
  
  })

  dot.addEventListener('click', function () {
    if (!isDotUsed) {
      isDotUsed = true
      currentValue += '.'
      currentScreen.textContent += '.'
    }
  })
})

function handleNumber (num) {
  if (currentValue.length <= 5) {
    currentValue += num
  }
}

function handleClear () {
  previousValue = ' '
  currentValue = ''
  isEqualUsed = false;
  isDotUsed = false;
}
function handlePrevious () {
  previousValue = currentValue
  currentValue = ' '
}


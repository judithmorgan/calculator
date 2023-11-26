/* Functions i need 

- to clear the button
-delete item
- show zero on screen when user enters 
-the operators to work
- the. to work 
- the numbers to enter */


const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.getElementById('equalsBtn')
const clearButton = document.getElementById('clearBtn')
const deleteButton = document.getElementById('deleteBtn')
const pointButton = document.getElementById('pointBtn')
const currentDisplayScreen = document.getElementById('currentDisplayScreen')
const previousDisplayScreen = document.getElementById('previousDisplayScreen')


/* when you want to get inputs from a keyboard */
window.addEventListener('keydown', handleKeyboardInput)


equalsButton.addEventListener('click', evaluate)
clearButton.addEventListener('click', clear)
deleteButton.addEventListener('click', deleteNumber)
pointButton.addEventListener('click', appendPoint)


numberButtons.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
)

operatorButtons.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent))
)

function appendNumber(number) {
    if (currentDisplayScreen.textContent === '0' || shouldResetScreen)
        resetScreen()
    currentDisplayScreen.textContent += number
}

function resetScreen() {
    currentDisplayScreen.textContent = ''
    shouldResetScreen = false
}
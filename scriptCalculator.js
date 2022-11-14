class Calculator {
    constructor(previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText
        this.currentOperandText = currentOperandText
        this.clear()
    }
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    chooseOperator(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }
    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return


        switch (this.operation) {
            case '+' :
                computation = prev + current
                break
            case '-' :
                computation = prev - current
                break
            case 'x' :
                computation = prev * current
                break
            case '÷' :
                computation = prev / current
                break
            case '%' :
                computation = Math.abs(prev % current)
                break
            default: return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }
    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }
    sqrtOperation() {
        let x = this.currentOperand
        let result = Math.sqrt(x)
        this.currentOperand = result
    }
    memStoreRecall() {
        if(memNum) {
            this.currentOperand = memNum
        } else {
            memNum = this.currentOperand
        }
    }
    memClear() {
        memNum = ''
    }
    memMinus() {
        let computation
        computation = this.currentOperand - memNum
        console.log(computation)
        this.currentOperand = computation
    }
    memPlus() {
        let computation
        let plusOperand = this.currentOperand
        computation = parseFloat(plusOperand) + parseFloat(memNum)
        this.currentOperand = computation
    }

    updateDisplay() {
        if (this.currentOperand === '' && this.previousOperand !== '') {
            this.currentOperandText = previousOperand
        } else {
        this.currentOperandText.innerText = this.getDisplayNumber(this.currentOperand)
        }
    }
}

const previousOperandText = document.querySelector('[data-previous-operand]')
const currentOperandText = document.querySelector('[data-current-operand]')
const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-clear]')
const sqrtButton = document.querySelector('[data-sqrt]')
const memRecallClearButton = document.querySelector('[data-mem-recall]')
const memMinusButton = document.querySelector('[data-mem-minus]')
const memPlusButton = document.querySelector('[data-mem-plus]')
let memNum
const calculator = new Calculator(previousOperandText, currentOperandText)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperator(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})

clearButton.addEventListener('click', () => {
    currentOperandText.classList.remove('not-on')
    document.querySelector('.display-rect').classList.remove('dark')
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
})

sqrtButton.addEventListener('click', () => {
    calculator.sqrtOperation()
    calculator.updateDisplay()
})

memRecallClearButton.addEventListener('click', () => {
    calculator.memStoreRecall()
    calculator.updateDisplay()
})
memRecallClearButton.addEventListener('dblclick', () => {
    if (!memNum) {return}
    calculator.memClear()
    calculator.updateDisplay()
})

memMinusButton.addEventListener('click', () => {
    if (!memNum) {return}
    calculator.memMinus()
    calculator.updateDisplay()
})

memPlusButton.addEventListener('click', () => {
    if (!memNum) {return}
    calculator.memPlus()
    calculator.updateDisplay()
    
})


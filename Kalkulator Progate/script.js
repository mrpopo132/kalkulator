const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (angka) => {
    calculatorScreen.value = angka;
};

const numbers = document.querySelectorAll(".angka");



let prevNumber = "";
let calculationOpertator = "";
let currentNumber = "";


const inputNumber = (angka) => {
    if (currentNumber === "0") {
        currentNumber = angka;
    } else {
        currentNumber += angka;
    }
};

numbers.forEach((angka) => {
    angka.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});


const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    });
});


const inputOperator = (operator) => {
    if (calculationOpertator === '') {
        prevNumber = currentNumber;
    }
    calculationOpertator = operator;
    currentNumber = '0';
};


const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
});


const calculate = () => {
    let result = "";
    switch (calculationOpertator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = prevNumber - currentNumber;
            break;
        case "*":
            result = prevNumber * currentNumber;
            break;
        case "/":
            result = prevNumber / currentNumber;
            break;
        case "%":
            result = currentNumber / 100;    
        default:
            break;
    }
    currentNumber = result;
    calculationOpertator = "";
};


const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
    clearAll();
    updateScreen(currentNumber);
});

const clearAll = () => {
    prevNumber = "";
    calculationOpertator = "";
    currentNumber = "0";
};


const decimal = document.querySelector(".decimal");

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
};

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});
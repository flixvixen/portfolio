function operator(newOperator) {
    const display1 = document.getElementById('display1').value;
    const display2 = document.getElementById('display2').value;
    const currentOperator = document.getElementById('operator').value;

    if (display2 !== "") {
        const result = calculate(Number(display2), Number(display1), currentOperator || newOperator);
        document.getElementById('display2').value = result;
    } else {
        document.getElementById('display2').value = display1;
    }

    document.getElementById('display1').value = "0";
    document.getElementById('operator').value = newOperator;
}

function sum() {
    operator('+');
}

function sub() {
    operator('-');
}

function mul() {
    operator('*');
}

function div() {
    operator('/');
}

function dot() {
    const display1 = document.getElementById('display1').value;
    if (!display1.includes('.')) {
        document.getElementById('display1').value = display1 + '.';
    }
}

function equal() {
    const display1 = document.getElementById('display1').value;
    const display2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    if (display2 !== "" && operator !== "") {
        const result = calculate(Number(display2), Number(display1), operator);
        document.getElementById('display1').value = result;
        document.getElementById('display2').value = "";
        document.getElementById('operator').value = "";
    }
}

function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return num2;
    }
}

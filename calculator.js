// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

// Event listeners
document.getElementById('add').addEventListener('click', function() {
    calculate(add);
});

document.getElementById('subtract').addEventListener('click', function() {
    calculate(subtract);
});

document.getElementById('multiply').addEventListener('click', function() {
    calculate(multiply);
});

document.getElementById('divide').addEventListener('click', function() {
    calculate(divide);
});


function calculate(operation) {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = operation(number1, number2);
    document.getElementById('calculation-result').textContent = result;
}
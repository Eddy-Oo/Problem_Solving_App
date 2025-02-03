// Function to Reverse a String
function reverseString() {
    let str = document.getElementById("stringInput").value;
    let reversed = str.split("").reverse().join("");
    document.getElementById("reverseResult").innerText = "Reversed: " + reversed;
}

// Function to Find Min and Max in an Array
function findMinMax() {
    let input = document.getElementById("arrayInput").value;
    let numbers = input.split(",").map(num => parseFloat(num.trim()));

    if (numbers.some(isNaN)) {
        document.getElementById("minMaxResult").innerText = "Invalid input!";
        return;
    }

    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    document.getElementById("minMaxResult").innerText = `Min: ${min}, Max: ${max}`;
}

// Function to Calculate Sum of an Array
function calculateSum() {
    let input = document.getElementById("arrayInput").value;
    let numbers = input.split(",").map(num => parseFloat(num.trim()));

    if (numbers.some(isNaN)) {
        document.getElementById("sumResult").innerText = "Invalid input!";
        return;
    }

    let sum = numbers.reduce((acc, num) => acc + num, 0);
    document.getElementById("sumResult").innerText = "Sum: " + sum;
}

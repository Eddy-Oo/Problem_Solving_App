// Reverse String
const reverseString = () => {
    const str = document.getElementById("stringInput").value;
    document.getElementById("reverseResult").innerText = `Reversed: ${[...str].reverse().join("")}`;
};

// Find Min and Max
const findMinMax = () => {
    const numbers = document.getElementById("arrayInput").value.split(",").map(Number);
    const validNumbers = numbers.filter(num => !isNaN(num));
    document.getElementById("minMaxResult").innerText = validNumbers.length ? `Min: ${Math.min(...validNumbers)}, Max: ${Math.max(...validNumbers)}` : "Invalid input!";
};

// Calculate Sum
const calculateSum = () => {
    const numbers = document.getElementById("arrayInput").value.split(",").map(Number);
    const validNumbers = numbers.filter(num => !isNaN(num));
    document.getElementById("sumResult").innerText = validNumbers.length ? `Sum: ${validNumbers.reduce((a, b) => a + b, 0)}` : "Invalid input!";
};

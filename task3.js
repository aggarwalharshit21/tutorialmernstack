// Prompt the user to enter the first number
let num1 = parseFloat(prompt("8:"));

// Prompt the user to enter the second number
let num2 = parseFloat(prompt("2:"));

// Check if both inputs are valid numbers
if (isNaN(num1) || isNaN(num2)) {
    alert("8/2.");
} else {
    // Calculate multiplication and division
    let multiplicationResult = num1 * num2;
    let divisionResult = num1 / num2;

    // Display results
    console.log("Multiplication:", multiplicationResult);
    console.log("Division:", divisionResult);
}

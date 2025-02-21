function calculator() {
  // Ask the user for input
  const number1 = parseFloat(prompt("Enter the first number:"));
  const number2 = parseFloat(prompt("Enter the second number:"));
  const operation = prompt("Enter the mathematical operation (+, -, *, /):");

  let result;

  // This will Perform the operation based on the user's input
  switch (operation) {
      case '+':
          result = number1 + number2;
          break;
      case '-':
          result = number1 - number2;
          break;
      case '*':
          result = number1 * number2;
          break;
      case '/':
          result = number1 / number2;
          break;
      default:
          return "Invalid operation. Please enter one of +, -, *, /.";
  }

  // Return the result in the specified format
  return `${number1} ${operation} ${number2} = ${result}`;
}

// Call the function and display the result
const resultString = calculator();
console.log(resultString); // Example output: "5 + 3 = 8"
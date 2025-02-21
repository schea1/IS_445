// Create array
const months = ["Feb", "Mar", "Apr", "May"];

// Display
console.log(months); // Display array
console.log(months.length); // Display length
console.log(months[0]) // First element

// "Jun" to the end
months.push("Jun");
console.log(months); // Display array
console.log(months.length); // Display length
console.log(months[months.length - 1]) // Last element

months.unshift("Jan"); // At at beginning
console.log(months); // Display array
console.log(months.length); // Display length
console.log(months[0]) // First element

months.pop(); // Remove last element
console.log(months); // Display array

months.splice(0, 2) // Remove first two elements
console.log(months); // Display array


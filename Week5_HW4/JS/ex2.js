// Let's use method 3 and return the sum
const sum = (n1, n2) => {
  return n1 + n2;
}

// Test the function
const aSum = sum(9, 8);
console.log(`The sum of 9 + 8 = ${aSum}`);

console.log(`Another message: 3 + 5 = ${sum(3, 5)}`);

let arg1 = 2;
let arg2 = 7;
const getSum = sum(arg1, arg2);
console.log(`The sum of ${arg1} + ${arg2} = ${getSum}`);
if (getSum % 2 === 0) {
  console.log("The sum is EVEN");  
} else {
  console.log("The sum is ODD");
}
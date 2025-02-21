// Create the function
const fullName = (fn, ln) => {
  return {
    firstName: fn,
    lastName: ln,
    fullName: fn + " " + ln
  } 
}

// Test the function.  Example:
const aliceInfo = fullName("Alice", "Anderson");  // Call the function
console.log(aliceInfo.fullName); // Displays: Alice Anderson


// Experiment
console.log("The first name sent was: ", aliceInfo.firstName);

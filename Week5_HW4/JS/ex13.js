// Ask the user for a word
// For testing, use a const, then update to a prompt
//const word = "Elephant";
const word = prompt("Enter a word");

console.log(`You entered the following word: ${word}`);
console.log(`The length is: ${word.length}`);
console.log(`Lowercase value is: ${word.toLowerCase()}`);
console.log(`Uppercase value is: ${word.toUpperCase()}`);

const indexOfE = word.toLowerCase().indexOf("e");
if (indexOfE !== -1) {
  console.log(`Your word had the letter "e" at index: ${indexOfE}`)
} else {
  console.log('Your word does not contain the letter "e"');
}

// loop to display each letter
// Let's use for-of loop
console.log("===== for-of loop =====");
for (const letter of word) {
  console.log(letter);
}

// Convert to an array and use forEach loop

const wordArray = Array.from(word);
console.log("===== forEach loop =====");
wordArray.forEach(letter => {
  console.log(letter);
})

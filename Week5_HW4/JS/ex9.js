// Create array
const musketeers = ["Athos", "Porthos", "Aramis"];

// Display using for loop
console.log("===== Use for loop =====");
for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
}

// Display using forEach
console.log("===== Use forEach =====");
musketeers.forEach(musketeer => {  // You can call the variable anything, e.g. "x", but musketeer is meaningful
  console.log(musketeer);
})

// Remove Aramis
musketeers.pop();

// Display using for-of loop
console.log("===== Use for-of loop =====");
for (const musketeer of musketeers) {
  console.log(musketeer);
}

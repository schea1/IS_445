// Generate 10 random numbers between 1 - 10

// Step 1 - See what Math.random() looks like
console.log("============== STEP 1 ==============");
for (let i = 0; i < 10; i++) {
  console.log(Math.random());
}

// Step 2 - See what Math.random() * 10  looks like
console.log("============== STEP 2 ==============");
for (let i = 0; i < 10; i++) {
  console.log(Math.random() * 10);
}


// Step 3 - See what Math.random() * 10 + 1 looks like
console.log("============== STEP 3 ==============");
for (let i = 0; i < 10; i++) {
  console.log((Math.random() * 10) + 1);
}

// Step 4 - truncate (or use floor)
console.log("============== STEP 4: Complete ==============");
for (let i = 0; i < 10; i++) {
  console.log(Math.trunc((Math.random() * 10) + 1));
}
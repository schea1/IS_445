// Create account object

const account = {
  name: "Alex",
  balance: 0,
  credit(amount) {
    this.balance += amount;
  },
  describe() {
    console.log(`owner: ${this.name}, balance ${this.balance}`);
  }
};

// Test the object
account.describe();
account.credit(250);
account.credit(-80);
account.describe();
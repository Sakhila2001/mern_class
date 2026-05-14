class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    return `Deposited ${amount} to the account.`;
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      return `Withdrew ${amount} from the account.`;
    } else {
      return "Insufficient balance.";
    }
  }

  getBalance() {
    return `Current Balance: ${this.balance}`;
  }
}

const output = document.getElementById("output");

// Create account
const myAccount = new BankAccount("Sakhila", 1000);

// Deposit
function depositMoney() {
  const amount = Number(document.getElementById("amount").value);

  if (amount <= 0) {
    output.innerHTML = "Please enter a valid amount";
    return;
  }

  const message = myAccount.deposit(amount);

  output.innerHTML = `${message} ${myAccount.getBalance()}`;
}

// Withdraw
function withdrawMoney() {
  const amount = Number(document.getElementById("amount").value);

  if (amount <= 0) {
    output.innerHTML = "Please enter a valid amount";
    return;
  }

  const message = myAccount.withdraw(amount);

  output.innerHTML = `${message}<br>${myAccount.getBalance()}`;
}

// Check Balance
function showBalance() {
  output.innerHTML = myAccount.getBalance();
}

class BankAccount {
  balanceInit: number;

  constructor(_balanceInit) {
    this.balanceInit = _balanceInit;
  }

  oneDeposit(amount: number) {
    this.balanceInit += amount;
    return console.log(`Ammontare del versamento: ${amount}€`);
  }

  oneWithdraw(amount: number) {
    this.balanceInit -= amount;
    return console.log(`Ammontare del prelievo: ${amount}€`);
  }

  addInterest(balance: number) {
    this.balanceInit = balance - balance * 0.1;
    return console.log(`Il saldo ammonta a: ${this.balanceInit}€`);
  }
}

/* const motherAccount = new BankAccount(1000);

const sonAccount = new BankAccount(500);

console.log("----------Mother's account-----------");
console.log(`Saldo all'apertura del conto: ${motherAccount.balanceInit}€`);
motherAccount.oneDeposit(2000);
motherAccount.oneDeposit(1000);
motherAccount.oneWithdraw(700);
motherAccount.oneWithdraw(500);
motherAccount.addInterest(motherAccount.balanceInit);

console.log("----------Son's account-----------");
console.log(`Saldo all'apertura del conto: ${sonAccount.balanceInit}€`);
sonAccount.oneDeposit(700);
sonAccount.oneDeposit(500);
sonAccount.oneWithdraw(400);
sonAccount.oneWithdraw(250);
console.log(`Il saldo ammonta a ${sonAccount.balanceInit}€`); */

const motherAccount = new BankAccount(0);

const opensAccount = document.getElementById(
  "opens-account"
) as HTMLFormElement;

const currentBalance = document.getElementById(
  "current-balance"
) as HTMLSpanElement;

opensAccount.addEventListener("submit", (e) => {
  e.preventDefault();
  const personalArea = document.getElementById("personal-area") as HTMLElement;
  const startingAmount = document.getElementById(
    "starting-amount"
  ) as HTMLInputElement;
  const startingDeposit = startingAmount.value;
  opensAccount.className = "d-none";
  personalArea.classList.remove("d-none");

  motherAccount.balanceInit = Number(startingDeposit);
  currentBalance.innerText = ` ${motherAccount.balanceInit} €`;
});

const depositForm = document.getElementById("deposit-form") as HTMLFormElement;
const withdrawForm = document.getElementById(
  "withdrawal-form"
) as HTMLFormElement;

depositForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const depositField = document.getElementById(
    "deposit-field"
  ) as HTMLInputElement;

  const depositAmount = depositField.value;
  const transactionsList = document.getElementById(
    "transactions-list"
  ) as HTMLUListElement;
  motherAccount.oneDeposit(Number(depositAmount));
  motherAccount.addInterest(motherAccount.balanceInit);
  currentBalance.innerText = ` ${motherAccount.balanceInit.toString()}€`;
  const listItem = document.createElement("li") as HTMLLIElement;
  listItem.className = "list-group-item";
  listItem.innerText = `Versamento: ${depositAmount}€`;
  transactionsList.appendChild(listItem);
  depositField.value = "";
});

withdrawForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const withdrawField = document.getElementById(
    "withdrawal-field"
  ) as HTMLInputElement;

  const withdrawAmount = withdrawField.value;
  const transactionsList = document.getElementById(
    "transactions-list"
  ) as HTMLUListElement;
  motherAccount.oneWithdraw(Number(withdrawAmount));
  motherAccount.addInterest(motherAccount.balanceInit);
  currentBalance.innerText = ` ${motherAccount.balanceInit.toString()}€`;
  const listItem = document.createElement("li") as HTMLLIElement;
  listItem.className = "list-group-item";
  listItem.innerText = `Prelievo: ${withdrawAmount}€`;
  transactionsList.appendChild(listItem);
  withdrawField.value = "";
});

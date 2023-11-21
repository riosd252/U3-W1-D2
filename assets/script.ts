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

const opensAccount = document.getElementById(
  "opens-account"
) as HTMLFormElement;

opensAccount.addEventListener("submit", (e) => {
  e.preventDefault();
  const personalArea = document.getElementById("personal-area") as HTMLElement;
  const startingAmount = document.getElementById(
    "starting-amount"
  ) as HTMLInputElement;
  const startingDeposit = startingAmount.value;
  opensAccount.className = "d-none";
  personalArea.classList.remove("d-none");
  const currentBalance = document.getElementById(
    "current-balance"
  ) as HTMLSpanElement;
  currentBalance.innerText = ` ${startingDeposit} €`;
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
});

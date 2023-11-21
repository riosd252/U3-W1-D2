var BankAccount = /** @class */ (function () {
    function BankAccount(_balanceInit) {
        this.balanceInit = _balanceInit;
    }
    BankAccount.prototype.oneDeposit = function (amount) {
        this.balanceInit += amount;
        return console.log("Ammontare del versamento: ".concat(amount, "\u20AC"));
    };
    BankAccount.prototype.oneWithdraw = function (amount) {
        this.balanceInit -= amount;
        return console.log("Ammontare del prelievo: ".concat(amount, "\u20AC"));
    };
    BankAccount.prototype.addInterest = function (balance) {
        this.balanceInit = balance - balance * 0.1;
        return console.log("Il saldo ammonta a: ".concat(this.balanceInit, "\u20AC"));
    };
    return BankAccount;
}());
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
var opensAccount = document.getElementById("opens-account");
opensAccount.addEventListener("submit", function (e) {
    e.preventDefault();
    var personalArea = document.getElementById("personal-area");
    var startingAmount = document.getElementById("starting-amount");
    var startingDeposit = startingAmount.value;
    opensAccount.className = "d-none";
    personalArea.classList.remove("d-none");
    var currentBalance = document.getElementById("current-balance");
    currentBalance.innerText = " ".concat(startingDeposit, " \u20AC");
});
var depositForm = document.getElementById("deposit-form");
var withdrawForm = document.getElementById("withdrawal-form");
depositForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var depositField = document.getElementById("deposit-field");
});

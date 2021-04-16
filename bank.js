class Bank {
  constructor() {
    this.balance = 0;
    }

deposit(debit) {
   this.balance += debit
   //push date and balance to array
}

withdrawal(credit) {
    this.balance -= credit
    //push date and balance to array
    //edge case if credit falls below 0 or is -ve 
}

  };



module.exports = Bank;
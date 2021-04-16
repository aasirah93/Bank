
const Bank = require('./bank');

it('has an initial balance of zero', () => {
    const bank = new Bank();
    expect(bank.balance).toBe(0);
  }); 


test('it increases the balance', () => {
  const bank = new Bank();
  const debit= 5
  bank.deposit(debit)
  expect(bank.balance).toBe(0 + debit); 
});
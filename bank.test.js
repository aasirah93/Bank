
const Bank = require('./bank');

it('has an initial balance of zero', () => {
    const bank = new Bank();
    expect(bank.balance).toBe(0);
  }); 


test('it increases the balance', () => {
  const bank = new Bank();
  const mockDeposit = jest.fn(() => this.balance += 5);
  bank.deposit(5, mockDeposit)

  expect(mockDeposit.value).toBe(5);
});
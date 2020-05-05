{
  "use strict";
  
  describe('Class Inheritance', function() {
    describe('#Account class', function() {
      let number = "12345";
      let account;
      beforeEach(function() {
        account = new Account(number);
      });
      it('getNumber', ()=>{
        assert.equal(number, account.getNumber());
      });
      it('getBalance', ()=>{
        assert.equal(0.0, account.getBalance());
      });

      it('deposit', ()=>{
        account.deposit(100);
        assert.equal(100, account.getBalance());
      });

      it('withdraw', ()=>{
        account.deposit(100);
        account.withdraw(50)
        assert.equal(50, account.getBalance());

        try {
          account.withdraw(-10)  
        } catch (error) {
          assert.equal("Withdraw amount has to be greater than zero", error.message);
        }

        try {
          account.withdraw(100)  
        } catch (error) {
          assert.equal("Insufficient funds", error.message);
        }
      });

      it('toString', ()=>{
        account.deposit(100);
        assert.equal(`Account ${number}: balance 100`, account.toString());
      });
    });

    describe('#SavingAccount class', function() {
      let account;
      let ist = 25;
      let balance = 1500;
      beforeEach(function() {
        account = new SavingAccount("12345", ist);
        account.deposit(balance);
      });
      it('Getter interest', ()=>{
        assert.equal(ist, account.interest);
      });
      it('Setter interest', ()=>{
        account.interest = 35;
        assert.equal(35, account.interest);
      });
      it('addInterest', ()=>{
        
        account.addInterest();
        assert.equal(balance * ist / 100, account.interest);
      });

      it('toString', ()=>{
        assert.equal("Saving account " + account.getNumber()
          + ": balance " + account.getBalance()
          + " Interest: " + account.interest,
          account.toString());
      });

    });

    describe('#CheckingAccount class', function() {
      let account;
      let overdraft = 50;
      let balance = 1500;
      beforeEach(function() {
        account = new CheckingAccount("12345", overdraft);
        account.deposit(balance);
      });
      it('Getter overdraft', ()=>{
        assert.equal(overdraft, account.overdraft);
      });
      it('Setter overdraft', ()=>{
        account.overdraft = 100;
        assert.equal(100, account.overdraft);
      });
      it('withdraw', ()=>{
        account.withdraw(1500);
        try {
          account.withdraw(100);
        } catch (error) {
          assert.equal("Overdraft limit has reached", error.message);
        }
      });

      it('toString', ()=>{
        assert.equal("Checking account " + account.getNumber()
          + ": balance " + account.getBalance()
          +", overdraft " + account.overdraft,
          account.toString());
      });

    });

    describe('#Bank class', function() {
      let bank;
      beforeEach(function() {
        bank = new Bank();
      });
      it('addAccount', ()=>{
        const accountNumber = bank.addAccount();
        console.log(bank.accounts)
        assert.equal(bank.accounts[0].getNumber(), accountNumber);
      });
      it('addSavingsAccount', ()=>{
        const accountNumber = bank.addSavingsAccount(25);
        assert.equal(bank.accounts[0].getNumber(), accountNumber);
      });
      it('addCheckingAccount', ()=>{
        const accountNumber = bank.addCheckingAccount(50);
        assert.equal(bank.accounts[0].getNumber(), accountNumber);
      });

      it('accountReport', ()=>{
        bank.addAccount();
        bank.addSavingsAccount(25);
        bank.addCheckingAccount(50);
        let expected = "";
        for(let account in bank.accounts){
          expected += account.toString() + '\n';
        }
        assert.equal(expected, bank.accountReport());
      });
      it('endOfMonth', ()=>{
        
        bank.addAccount();
        assert.equal("", bank.accounts[0].endOfMonth());
        bank.addSavingsAccount(25);
        
        let account = bank.accounts[1];
        account.deposit(100);
        assert.equal(`Interest added SavingsAccount 2: balance: ${account._balance} interest: ${account.interest}`, account.endOfMonth());
        bank.addCheckingAccount(50);
        
        account = bank.accounts[2];
        account.withdraw(10);
        assert.equal(`Warning, low balance CheckingAccount 3: balance: ${account._balance} overdraft limit: ${account._overdraft}`, account.endOfMonth());
        let expected = "";
        for(let account in bank.accounts){
          expected += account.toString() + '\n';
        }
        assert.equal(expected, bank.accountReport());
      });

    });

  });
};
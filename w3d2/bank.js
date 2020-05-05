class Bank{
  static nextNumber = 50004422;
  constructor(){
    this.accounts = [];
  }
  /**
   * Create new account
   * @returns {Number} number of accounts
   */
  addAccount(){
    const newAccount = new Account(this.nextNumber)
    this.accounts.push(newAccount);
    this.nextNumber++;
    return newAccount.getNumber();
  }

  /**
   * Create new saving account
   * @param {Number} interest the account number
   * @returns {Number} number of accounts
   */
  addSavingsAccount(interest){
    const newAccount = new SavingAccount(this.nextNumber, interest)
    this.accounts.push(newAccount);
    this.nextNumber++;
    return newAccount.getNumber();
  }

  /**
   * Create new checking account
   * @param {Number} overdraft limit of negative balance
   * @returns {Number} number of accounts
   */
  addCheckingAccount(overdraft){
    const newAccount = new CheckingAccount(this.nextNumber, overdraft)
    this.accounts.push(newAccount);
    this.nextNumber++;
    return newAccount.getNumber();
  }

  /**
   * Remove account from the accounts list
   * @param {Number} number the account number
   * @returns {Account} deleted account
   */
  closeAccount(number){
    const removedAcc = this.accounts.find(a=>a.number === number);
    this.accounts = this.accounts.filter(a=>a.number !== number);
    return removedAcc;
  }

  /**
   * @returns {String} returns a String with each account on its own line
   */
  accountReport(){
    let out = "";
    for(let account in this.accounts){
      out += account.toString() + "\n";
    }
    return out;
  }

  /**
   *  each of the accounts endOfMonth collecting their output
   */
  endOfMonth(){
    let out = "";
    for(let account in this.accounts){
      out += account.endOfMonth() + '\n';
    }
    return out;
  }
}
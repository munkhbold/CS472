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
    this.accounts.push(new Account(this.nextNumber));
    this.nextNumber++;
    return this.accounts.length;
  }

  /**
   * Create new saving account
   * @param {Number} interest the account number
   * @returns {Number} number of accounts
   */
  addSavingsAccount(interest){
    this.accounts.push(new SavingAccount(this.nextNumber, interest));
    this.nextNumber++;
    return this.accounts.length;
  }

  /**
   * Create new checking account
   * @param {Number} overdraft limit of negative balance
   * @returns {Number} number of accounts
   */
  addCheckingAccount(overdraft){
    this.accounts.push(new CheckingAccount(this.nextNumber, overdraft));
    this.nextNumber++;
    return this.accounts.length;
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
}
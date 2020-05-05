"use strict";

/**
 * A Bank CheckingAccount class
 * 
 * Provides the overdraft property additional on account class
 */
class CheckingAccount extends Account {
  /**
   * Constructor for creating a new CheckingAccount object
   * @param {number} number the number for this account
   * @param {number} overdraft  The overdraft amount indicates how much
  *  a person is allowed to temporarily withdraw beyond what they have
   */
  constructor(number, overdraft){
    super(number)
    this.overdraft = overdraft;
  }

  /**
   * Accessor for the 'private' overdraft field
   * @returns {number} interest amount
   */
  get overdraft(){
    return this._overdraft;
  }

  /**
   * Accessor for the 'private' overdraft field
   */
  set overdraft(value){
    this._overdraft = value;
  }

  /**
   * Method to take money out of the account
   * 
   * @param {number} amount money to be taken out of the account
   * @returns {undefined}
   * @throws {RangeError} when amount is less than or equal to zero
   * @throws {Error} when balance is reached to overdraft limit
   */
  withdraw(amount) {
    if (amount <= 0) {
        throw new RangeError("Withdraw amount has to be greater than zero");
    }
    if (Math.abs(this._balance - amount) >= this.overdraft ) {
        throw Error("Overdraft limit has reached");
    }
    this._balance -= amount;
  }

  /**
   * @returns {string} representation of this account
   */
  toString() {
    return "Checking account " + this._number + ": balance " + this._balance + ", overdraft " + this._overdraft;
  }
}
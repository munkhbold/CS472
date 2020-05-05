"use strict";

/**
 * A Bank SavingAccount class
 * 
 * Provides the interest addional on account class
 */
class SavingAccount extends Account {
  /**
   * Constructor for creating a new SavingAccount object
   * @param {number} number the number for this account
   * @param {number} interest the interest of this account
   */
  constructor(number, interest){
    super(number)
    this.interest = interest;
    this.interestCnt = 0;
  }

  /**
   * Accessor for the 'private' interest field
   * @returns {number} interest amount
   */
  get interest(){
    return this._interest;
  }

  /**
   * Accessor for the 'private' interest field
   */
  set interest(value){
    this._interest = value;
  }

  /**
   * deposits the interest amount into the account.
   */
  addInterest(){
    this.interestCnt ++;
    this.interest = this._balance * this._interest / 100 ;
  }

  /**
   * @returns {string} representation of this account
   */
  toString() {
    return "Saving account " + this._number + ": balance " + this._balance + " Interest: " + this._interest;
  }

  /**
   *  @returns {String} return a string specifying how much interest was added
   */
  endOfMonth(){
    this.addInterest();
    return `Interest added SavingsAccount 2: balance: ${this._balance} interest: ${this.interest}`;
  }
}
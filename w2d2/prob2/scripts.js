(function(){
  "use strict";

  let intUtils = {
    intList: [],

    /**
     * simple sum
     * @returns {number} sum of aval and bVal
     */
    sum(){
      return this.intList.reduce((accum, elem)=>elem + accum);
    },

    /**
     * @returns {Integer} product of all elements
     */
    multiply(){
      return this.intList.reduce((accum, elem)=>accum * elem);
    },

    /**
     * @returns {Integer} max of this two params
     */
    max(){
      return this.intList.reduce((accum, elem)=> accum < elem ? elem : accum);
    },

    /**
     * @returns {Integer list} new List multiplied by ten
     */
    multiplyByTen(){
      return this.intList.map(elem=>elem * 10);
    },

    /**
     * @returns list with threes
     */
    filterEqualThree(){
      return this.intList.filter((elem)=>elem === 3);
    },

    /**
     * prompts for and sets property values
     *  @returns {undefined}
     */
    read() {
        this.intList = +prompt("intList?", []);
    }
  };

  let strUtils = {
    str: "",
    /**
     * @returns {Boolean} 
     */
    isVowel(){
      const vowels = ['a', 'e', 'i', 'o', 'u'];
      return vowels.indexOf(this.str[0]) != -1 ? true : false;
    },

    /**
     * @returns {String} with reversed value
     */
    reverse(){
      return this.str.split("").reduce((x, y)=> y + x);
    },

    /**
     * find longest word in sequence
     * @returns {String}
     */
    findLongestWord(){
      return this.str.split(" ").reduce((x,y)=> x.length > y.length ? x : y);
    },

    /**
     * @returns {String list} contains element that length greater than minLen
     */
    filterLongWords(){
      return this.str.split(" ").filter(elem=>elem.length > this.minLen).join(" ");
    },
  }
  

  describe("intUtils", function() {
    context("when [2,3,4] entered", function() {
        beforeEach(function() {
            /*sinon.stub(window, "prompt");
            prompt.onCall(0).returns("2");
            prompt.onCall(1).returns("3"); */

            intUtils.intList = [2,3,4];
            
        });

        /*afterEach(function() {
          prompt.restore();
        }); */


        it("the sum is 9", function() {
            assert.equal(intUtils.sum(), 9);
        });

        it("the multiply product is 24", function() {
            assert.equal(intUtils.multiply(), 24);
        });

        it("the max is 4", function() {
          assert.equal(intUtils.max(), 4);
        });

        it("the multiplyByTen is [20,30,40]", function() {
          assert.deepEqual(intUtils.multiplyByTen(), [20,30,40]);
        });

        it("the filterEqualThree is [3]", function() {
          assert.deepEqual(intUtils.filterEqualThree(), [3]);
        });
    });
  });

  describe("strUtils", () => {
    context("when min 5 and 'apple oranges' entered", () => {
        beforeEach(() => {
            strUtils.str = 'apple oranges';
            strUtils.minLen = 6;
        });

        it("the isVowel is true", () => {
            assert.equal(strUtils.isVowel(), true);
        });

        it("the reverse is segnaro elppa", () => {
            assert.equal(strUtils.reverse(), "segnaro elppa");
        });

        it("the findLongestWord is oranges", () => {
          assert.equal(strUtils.findLongestWord(), "oranges");
        });

        it("the filterLongWords is oranges", () => {
          assert.equal(strUtils.filterLongWords(), "oranges");
        });
    });
});
})();
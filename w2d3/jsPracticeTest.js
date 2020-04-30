(function(){
  "use strict";
  
  describe('Js Practice', function() {
    describe('#reverseArray()', function() {
      it('should return [4,3,2,1] when input is [1,2,3,4]', ()=>{
        const arr = [1,2,3,4];
        assert.deepEqual([4,3,2,1], jsPractice.reverseArray(arr));
        // passes if arr has no changes.
        assert.deepEqual([1,2,3,4], arr);
      });
    });

    describe('#reverseArrayInPlace()', function() {
      it('sshould return [4,3,2,1] when input is [1,2,3,4]', ()=>{
        const arr = [1,2,3,4];
        const expected = [4,3,2,1];
        assert.deepEqual(expected, jsPractice.reverseArrayInPlace(arr));
        // passes if arr has changed in reversed order
        assert.deepEqual(expected, arr);
      });
    });

    describe('#arrToList()', function() {
      it('should return list {value:1, rest:{value:2, rest:{value:3, rest:{}}}} when input is [1,2,3]', ()=>{
        const arr = [1,2,3];
        const expected = {
          value: 1,
          rest: {
            value: 2,
            rest: {
              value: 3,
              rest: {}
            }
          }
        }
        assert.deepEqual(expected, jsPractice.arrToList(arr));
      });
    });

    describe('#listToArray()', function() {
      it('should return list [1,2,3] when input is {value:1, rest:{value:2, rest:{value:3, rest:{}}}}', ()=>{
        const expected = [1,2,3];
        const list = {
          value: 1,
          rest: {
            value: 2,
            rest: {
              value: 3,
              rest: {}
            }
          }
        }
        assert.deepEqual(expected, jsPractice.listToArray(list));
      });
    });

    describe('#deepComparison()', function() {
      it('should return true when inputs are [1,2,3] and [1,2,3]', ()=>{
        const aVal = [1,2,3];
        const bVal = [1,2,3];
        assert.deepEqual(true, jsPractice.deepComparison(aVal, bVal));
      });
      it('should return false [1,2,4,4] when input is [1,2,3]', ()=>{
        const aVal = [1,2,4];
        const bVal = [1,2,3];
        assert.deepEqual(false, jsPractice.deepComparison(aVal, bVal));
      });
    });
  });
})();
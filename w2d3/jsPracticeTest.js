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
  });
})();
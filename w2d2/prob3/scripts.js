let map = null;
let filter = null;

(function(){
  "use strict";
  filter = function(arr, fn){
    let newArr = [];
    for(let i=0; i<arr.length; i++){
      if(fn(arr[i], i)){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  };

  map = function(arr, fn){
    let newArr = [];
    for(let i=0; i<arr.length; i++){
      newArr.push(fn(arr[i], i));
    }
    return newArr;
  };

  describe('Pure', function() {
    describe('#filter()', function() {
      it('should return odd numbers [1,3,5] when input is [1,2,3,4,5,6]', ()=>{
        assert.deepEqual(filter([1,2,3,4,5,6], (el, inx)=> el % 2 != 0), [1,3,5]);
      });
    });

    describe('#map()', function() {
      it('should return odd numbers [10,20,30] when input is [1,2,3]', ()=>{
        assert.deepEqual(filter([1,2,3], (el, inx)=> el * 10), [1,2,3]);
      });
    });
  });

})();
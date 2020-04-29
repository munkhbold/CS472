let map = null;
let filter = null;

(function(){
  "use strict";
  filter = function(arr, fn){
    newArr = [];
    for(let i=0; i<arr.length; i++){
      if(fn(arr[i], i)){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  };

  map = function(arr, fn){
    newArr = [];
    for(let i=0; i<arr.length; i++){
      newArr.push(fn(arr[i], i));
    }
    return newArr;
  };

})();
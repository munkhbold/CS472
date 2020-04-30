const jsPractice = {};
(function(){
  "use strict";
  
  const reverseArray = arr => arr.slice(0).reverse();
  const reverseArrayInPlace = arr => arr.reverse();

  const arrToList = arr => {
    if(arr.length <= 0)
      return {};

    return {value: arr[0], rest: arrToList(arr.slice(1))};
  }

  const listToArray = list => {
    let arr = [];
    while (Object.keys(list).length !== 0){
      arr.push(list.value);
      list = list.rest;
    }
    return arr;
  }


  jsPractice.reverseArray = reverseArray;
  jsPractice.reverseArrayInPlace = reverseArrayInPlace;
  jsPractice.arrToList = arrToList;
  jsPractice.listToArray = listToArray;
})();
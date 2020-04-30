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

  const deepComparison = (aVal, bVal) => {
    if (aVal === null && bVal === null){
      return true;
    }

    if(typeof(aVal) !== 'object' && typeof(bVal) !== 'object'){
      if(aVal === bVal){
        return true;
      } else {
        return false;
      }
      // return false if one of these value is not object and other one is object
    } else if (typeof(aVal) === 'object' && typeof(bVal) !== 'object' ||
                typeof(aVal) !== 'object' && typeof(bVal) === 'object'){
      return false;
    }

    const keys = Object.keys(aVal);
    for(let key in keys){
      // and we do recursion comparision
      if (!deepComparison(aVal[key], bVal[key])){
        return false;
      }
    }
    return true;
  }

  jsPractice.reverseArray = reverseArray;
  jsPractice.reverseArrayInPlace = reverseArrayInPlace;
  jsPractice.arrToList = arrToList;
  jsPractice.listToArray = listToArray;
  jsPractice.deepComparison = deepComparison;
})();
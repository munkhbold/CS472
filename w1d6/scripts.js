/**
 * @param {Integer} param1 
 * @param {Integer} param2 
 * @returns {Integer} max of this two params
 */
function max(param1, param2){
    return param1 < param2 ? param2 : param1;
}

/**
 * @param {Integer} param1 
 * @param {Integer} param2 
 * @param {Integer} param3 
 * @returns {Integer} max of these 3
 */
function maxOfThree(param1, param2, param3){
  if ( param2 < param1 && param1 > param3){
    return param1;
  } else if (param1 < param2 && param2 > param3){
    return param2;
  }
  return param3;
}

/**
 * @param {String} str - length is 1
 * @returns {Boolean} 
 */
function isVowel(str){
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.indexOf(str) != -1 ? true : false;
}

/**
 * @param {Integer list} intList 
 * @returns {Integer} sum of all elements
 */
function sum(intList){
  return intList.reduce(function(accum, elem){
    return elem + accum
  })
}

/**
 * 
 * @param {Integer list} intList
 * @returns {Integer} product of all elements
 */
function multiply(intList){
  return intList.reduce(function(accum, elem){
    return accum * elem;
  })
}

/**
 * 
 * @param {String} str 
 * @returns {String} with reversed value
 */
function reverse(str){
  let rev = "";
  for(let i=str.length-1; i>=0; i--){
    rev += str[i];
  }
  return rev;
}

/**
 * 
 * @param {String list} words
 * @returns {String}
 */
function findLongestWord(words){
  let l = 0;
  for(let i=0; i<words.length; i++){
    if (l < words[i].length){
      l = words[i].length;
    }
  }
  return l;
}

/**
 * 
 * @param {String list} words 
 * @param {Integer} minLen 
 * @returns {String list} contains element that length greater than minLen
 */
function filterLongWords(words, minLen){
  return words.filter(function(elem){
    return elem.length > minLen;
  })
}

/**
 * 
 * @param {Integer list} digits 
 * @returns {Integer list} new List multiplied by ten
 */
function multiplyByTen(digits){
  return digits.map(function(elem){
    return elem * 10;
  })
}

/**
 * 
 * @param {Integer list} digits 
 * @returns list with threes
 */
function filterEqualThree(digits){
  return digits.filter(function(elem){
    return elem === 3;
  })
}

/**
 * 
 * @param {Integer list} elems 
 * @returns {Integer} is product of all elements
 */
function productAllElements(elems){
  return elems.reduce(function(accum, elem){
    return accum * elem;
  })
}

/**
 * 
 * @param {object or primitive type} expected 
 * @param {*} fn 
 * @returns {String} value "TEST SUCCEEDED" or "TEST FAILED"
 */
function myFunctionTest(expected, fn){
  let res = fn();
  let resType = typeof(res);

  console.assert(resType === typeof(expected), "Expected type is wrong");

  if (resType !== "object" && res === expected){
      return "TEST SUCCEEDED";
  }
  if (resType === "object"){
    if( JSON.stringify(res) === JSON.stringify(expected)){
      return "TEST SUCCEEDED";
    }
  }      
  return "TEST FAILED.  Expected " + expected + " found " + res;
}
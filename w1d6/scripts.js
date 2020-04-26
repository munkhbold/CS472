function max(param1, param2){
    return param1 < param2 ? param2 : param1;
}

function maxOfThree(param1, param2, param3){
  if ( param2 < param1 && param1 > param3){
    return param1;
  } else if (param1 < param2 && param2 > param3){
    return param2;
  }
  return param3;
}

function isVowel(str){
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.indexOf(str) != -1 ? true : false;
}

function sum(intList){
  return intList.reduce(function(accum, elem){
    return elem + accum
  })
}

function multiply(intList){
  return intList.reduce(function(accum, elem){
    return accum * elem;
  })
}

function reverse(str){
  let rev = "";
  for(let i=str.length-1; i>=0; i--){
    rev += str[i];
  }
  return rev;
}

function findLongestWord(words){
  let l = 0;
  for(let i=0; i<words.length; i++){
    if (l < words[i].length){
      l = words[i].length;
    }
  }
  return l;
}

function filterLongWords(words, minLen){
  return words.filter(function(elem){
    return elem.length > minLen;
  })
}

function multiplyByTen(digits){
  return digits.map(function(elem){
    return elem * 10;
  })
}

function filterEqualThree(digits){
  return digits.filter(function(elem){
    return elem === 3;
  })
}

function productAllElements(elems){
  return elems.reduce(function(accum, elem){
    return accum * elem;
  })
}
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
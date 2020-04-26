
const max = function (param1, param2){
    return param1 < param2 ? param2 : param1;
}

const maxOfThree = function(param1, param2, param3){
  if ( param2 < param1 && param1 > param3){
    return param1;
  } else if (param1 < param2 && param2 > param3){
    return param2;
  }
  return param3;
}

const isVowel = function(str){
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.indexOf(str) != -1 ? true : false;
}

const sum = function(intList){
  return intList.reduce(function(accum, elem){
    return elem + accum
  })
}

const multiply = function(intList){
  return intList.reduce(function(accum, elem){
    return accum * elem;
  })
}

const reverse = function(str){
  let rev = "";
  for(let i=str.length-1; i>=0; i--){
    rev += str[i];
  }
  return rev;
}

const findLongestWord = function(words){
  let l = 0;
  for(let i=0; i<words.length; i++){
    if (l < words[i].length){
      l = words[i].length;
    }
  }
  return l;
}

const filterLongWords = function(words, minLen){
  return words.filter(function(elem){
    return elem.length > minLen;
  })
}

const multiplyByTen = function(digits){
  return digits.map(function(elem){
    return elem * 10;
  })
}

const filterEqualThree = function(digits){
  return digits.filter(function(elem){
    return elem === 3;
  })
}

const myFunctionTest = function(expected, fn){
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
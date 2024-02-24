const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	if(arr.length === 0)
    return 0;
  else if(arr.length == 1)
    return arr[0];
  else {
    return arr.reduce((sum, n) => sum + n);
  }
};

const multiply = function(arr) {
  return arr.reduce((sum, n) => sum * n);
};

const power = function(x, y) {
	return Math.pow(x, y)
};

const factorial = function(x) {
	if(x === 0)
    return 1;
  else{
    let arr = [];
    for(let i = x; i > 0; i --)
      arr.push(i);
    return arr.reduce((sum, n) => sum * n);
  } 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

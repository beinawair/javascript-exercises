const add = function(a, b) {
  return (a+b);
};

const subtract = function(a, b) {
	return (a-b)
};

const sum = function(array) {
	let sum = 0;

  for(let i = 0; i < array.length; i++) {
    sum += array[i]
  }

  return sum;
};

const multiply = function(array) {
  let multi = 1;

  for(let i = 0; i < array.length; i++) {
    multi *= array[i]
  }

  return multi;
};

const power = function(a, b) {
	return (a ** b);
};

const factorial = function(number) {
  let result = 1;

	if(number == 1 && number == 0) return 1;

  for (let i = number; i > 0; i--) {
    result *= i;
  }

  return result;
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

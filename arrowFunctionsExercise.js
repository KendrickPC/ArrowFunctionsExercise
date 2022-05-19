// Arrow Functions Exercise
// In this exercise, you’ll refactor some ES5 code into ES2015.

// ES5 Map Callback
/*
function double(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}
*/
// ES2015 Arrow Functions Shorthand
// Refactor the above code to use two arrow functions.
// Turn it into a one-liner.

/* Write an ES2015 Version */
const double = (arr) => {
  return arr.map(val => {
    return val * 2;
  })
}

console.log(double([2, 4, 6]));

// Refactor the following function to use arrow functions:
// Replace ALL functions with arrow functions:

/*
function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}
*/

const squareAndFindEvens = (numbers) => {
  const squares = numbers.map(num => {
    return num ** 2;
  })
  const evens = squares.filter(square => {
    return square % 2 === 0;
  })
  return evens;
}

console.log(squareAndFindEvens([2, 5, 6, 7, 3]))
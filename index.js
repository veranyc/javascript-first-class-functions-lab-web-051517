// countdown takes one argument, callback, which is a
// function. Using window.setTimeout(), we will wait two seconds before calling the callback function that was
// passed into the countdown() function. This exercise demonstrates the use of callbacks for async operations. If we
// didn't use a callback, our program would continue right away instead of waiting for the callback to be called.


function countdown(callback) {
  window.setTimeout(callback)
}

// multiplierValue is a helper function that takes a number
// createMultiplier is a function returns another function that will multiple multiplierValue by a given value

function createMultiplier(multiplierValue) {
  return function(value) {
    return value * multiplierValue
    }
  }
//uses the createMultiplier() function to create a function that doubles any given number.

var doubler = createMultiplier(2)

var tripler = createMultiplier(3)
//

function multiplier(num1, num2) {
  return num1 * num2
}

// Create a doublerWithBind variable that partially applies
// the multiplier() function by passing in 2 as its first argument.
// Create a triplerWithBind variable that partially applies
// the multiplier() function by passing in 3 as its first argument.

var doublerWithBind = multiplier.bind(2)
var triplerWithBind = multiplier.bind(3)

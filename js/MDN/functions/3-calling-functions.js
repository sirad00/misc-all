// console.log(square(5));
// /* ... */
// function square(n) { return n * n; }

// console.log(square); // square is hoisted with an initial value undefined.
// // console.log(square(5)); // TypeError: square is not a function
// var square = function (n) {
//     return n * n; 
// }

function factorial(n) {
    if ((n === 0) || (n === 1))
      return 1;
    else
      return (n * factorial(n - 1));
  }
  console.log(factorial(0));
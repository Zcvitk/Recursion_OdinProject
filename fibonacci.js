// Fibonacci using iteration
 /* output: [
  0, 1, 1,  2,
  3, 5, 8, 13
] */

function fibs (number) {
    let fibonArray = [0, 1];
    for (let i=2; i<number; i++) {
      fibonArray.push(fibonArray[i-1] + fibonArray[i-2]);
    }
    return fibonArray.slice(0, number);
  }

  console.log(fibs(8));  // https://www.programiz.com/javascript/online-compiler/


// Fibonacci using recursion
  /* output: [
  0, 1, 1,  2,
  3, 5, 8, 13
] */
function fibsRec(number, fibonArray = [0, 1]) {
   if (fibonArray.length === number) {return fibonArray;}
   fibonArray.push(fibonArray[fibonArray.length - 1] + fibonArray[fibonArray.length - 2]);

return fibsRec(number, fibonArray);
}

console.log(fibsRec(8));  // https://www.programiz.com/javascript/online-compiler/


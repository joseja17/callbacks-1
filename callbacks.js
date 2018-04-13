//+++++++++ Start Here! All problems are below. +++++++++//


//////////////////PROBLEM 1////////////////////

// Write a function called stringItOut that takes in 
// an array, sorts it from greatest to least, and returns 
// the array converted into a string using the native 
// array toString method.
// var array = [
//   "hello", "beautiful", "world"
// ]

 function stringItOut(arr){
  arr.sort();
 arr.sort(function(a, b) {
   return a-b
 })
 
 arr.reverse()
 return arr.toString();
 }
//  stringItOut(array)


//////////////////PROBLEM 2////////////////////

// Given the functions below: invoke the function math
// passing in complex, 2, 3 as parameters, and save the result
// to a variable called mathResult.

  function math(cb, num1, num2){
    return cb(num1, num2)
  }

  function complex(num1, num2){
    return Math.sin((Math.log(num1) + Math.tan(num2) * 100))
  }

var mathResult = math(complex,2, 3)

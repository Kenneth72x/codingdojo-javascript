//Objective 1: Get 1 to 255: Write a function that returns an array with all the numbers from 1 to 255 inside.
function emptyArr() {
  var arr = [];
  for (var i = 1; i <= 255; i++) {
    arr.push(i);
  }
  return arr;
}
var result = emptyArr();
console.log(result);

//Objective 2: Get even 1000: Write a function that would get the sum of all the even numbers from 1 to 1000. You may use a modulus operator for this exercise.
function getSum() {
  var sum = 0;
  for (var i = 1; i <= 1000; i++) {
    if (i % 2 == 0) {
      sum = sum + i;
    }
  }
  return sum;
}
console.log(getSum());

//Objective 3: Sum odd 5000: Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g.1+3+5...+4997+4999).
function getSumOdd() {
  var sum = 0;
  for (var i = 1; i <= 5000; i++) {
    if (i % 2 == 1) {
      sum = sum + i;
    }
  }
  return sum;
}
console.log(getSumOdd());

//Objective 4: Iterate an array: Write a function that returs the sum of all the values within an array. (e.g.[1,2,5] returns 8. [-5,2,5,12]returns 14).
function iterate(numArr) {
  var sum = 0;
  for (var i = 0; i < numArr.length; i++) {
    sum = sum + numArr[i];
  }
  return sum;
}
console.log(iterate([1, 2, 4]));

//Objective 5: Find max: Given an array with multiple values, write a function that returns the average of the values in the array. (e.g.for [-3,3,5,7] max is 7).
function findMax(numArr) {
  var max = numArr[0];
  for (var i = 0; i < numArr.length; i++) {
    if (numArr[i] > max) {
      max = numArr[i];
    }
  }
  return max;
}
console.log(findMax([-3, 3, 5, 7]));

//Objective 6: Find average: Given an arraywith multiple values, wirte a function that returns the average of the values in the array. (e.g. [1,3,5,7,20]average is 7.2).
function findAvg(numArr) {
  var sum = 0;
  for (var i = 0; i < numArr.length; i++) {
    sum = sum + numArr[i];
  }
  avg = sum / numArr.length;
  return avg;
}
console.log(findAvg([1, 3, 5, 7, 20]));

//Objective 7: Array odd: Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5...47,49]). Hint: use 'push method.'
function oddArray() {
  var arr = [];
  for (var x = 1; x < 50; x += 2) {
    arr.push(x);
  }
  return arr;
}
console.log(oddArray());

//Objective 8: Greater than Y: Given a value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example,
//  if array=[1,3,5,7] and Y=3, your function will return 2. (There are two values in the array greater than 3, which are 5,7.).
function greaterThanY(arr, y) {
  var counter = 0;
  for (var idx = 0; idx < arr.length; idx++) {
    if (arr[idx] > y) {
      counter++;
    }
  }
  return counter;
}
console.log(greaterThanY([1, 3, 5, 7], 2));

//Objective 9: Squares: Given an array with multiple values, write a function that replaces each value in the array with the value squred by itself.
//  (ex. [1,5,10,-2] will become [1,25,100,4]).
function squares(arr) {
  for (var idx = 0; idx < arr.length; idx++) {
    arr[idx] = arr[idx] * arr[idx];
  }
  console.log(arr);
}
squares([1, -2, 5, 10]);

//Objective 10: Negatives: Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0.
//  When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0]).
function noNegatives(arr) {
  for (var idx = 0; idx < arr.length; idx++) {
    if (arr[idx] < 0) {
      arr[idx] = 0;
    }
  }
  console.log(arr);
}
noNegatives([1, 5, 10, -2]);

//Objective 11: Max/Min/Avg: Given an array with multiple values, write a function that returns a new array that onnly contains the maximum, minimum and average values
//  of the original array. (e.g. [1,5,10,-2] will return [10,-2,3,5]).

//Objective 12: Swap Values: Write a function that will swap the first and last values of any given array. The default minimum length of an array is 2. (e.g.[1,5,10,-2]
//  will become [-2,5,10,1]).

//Objective 13: Number to String: Write a funciton that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example,
//  if array=[-1,3,2], your function will return ['Dojo', 'Dojo', 2].

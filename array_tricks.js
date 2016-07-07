/**
 * Basic arrays operations
 * What happens in the following piece of code?
*/
var arr1 = "john".split(''); // j, o, h, n
var arr2 = arr1.reverse(); // arr1 = n, h, o, j; arr2 = n, h, o, j
// reverse() returns a reference, not a copy
var arr3 = "jones".split(''); // j, o, n, e, s

arr2.push(arr3); // n, h, o, j, [j, o, n, e, s] it doesn't concat

console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// displays: array 1: length=5 last=j, o, n, e, s

console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
//displays: array 2: length=5 last=j, o, n, e, s

console.log("array 3: length=" + arr3.length + " last=" + arr3.slice(-1));
//displays: array 3: length=5 last=j, o, n, e, s

/*
Common mistake could have been to think arr1 and arr2 are different.
But arr2 = arr2.reverse() gave us a reference to arr1.
*/

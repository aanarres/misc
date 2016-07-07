/**
 * Closure: visibility of variables and treatment of globals
 * The first function will execute as the file is run, the second is a named function that we call.
 * In both cases, the global trick works the same way: b and b2 become accessible globally.
 * In both cases, the local vars, a and a2, are inaccesible outside containing function scope.
 */

(function() {
	var a = b = 5;
	
})();

function global_play() {
	var a2 = b2 = 5;
};

global_play();

console.log("a = " + a);
console.log("b = " + b);
console.log("a2 = " + a2);
console.log("b2 = " + b2);

/*
Results are like:

a = undefined
b = 5
a2 = undefined
b2 = 5
*/
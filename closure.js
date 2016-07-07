/**
 * Scopes and closures, from toptal.com
 *
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

/**
 * Closure: inner function that has access to vars in the outer, enclosing,
 * function scope. Plus them globals, but don't quote me on this one,
 * for everybody knows globals are Evil.
*/

var globalVar = "Evil";

(function outerFunc(outerArg) {
  var outerVar = 'anOuter';
  
  (function innerFunc(innerArg) {
    var innerVar = 'anInner';
    
    console.log(
      "outerArg = " + outerArg + "\n" +
      "innerArg = " + innerArg + "\n" +
      "outerVar = " + outerVar + "\n" +
      "innerVar = " + innerVar + "\n" +
      "globalVar = " + globalVar);
    
  })(17);
})(99);

/*
 Will display:
outerArg = 17
innerArg = 99
outerVar = anOuter
innerVar = anInner
globalVar = Evil
*/

/**
 * Test #3
 * what will be the result of running the following code?
*/
for (var i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}

/*
Result: of course 5 all the way. When the anonymous function is executed,
i has long become 5.
*/

// Alternative code that will display 0, 1, 2, 3, 4:

for (var i = 0; i < 5; i++) {
	(function(x) {
    	setTimeout(function() { console.log(x); }, x * 1000 );
    })(i);
}

// What happens here is that the closure is executed as the code runs, with i=0 being sent in x, then timeout is set for a function() { console.log(1); }


// NaN can be the result of "some string here" / 2
// (NaN is also the result of divide by zero and the like)

// Just for fun... type of NaN?
console.log ("NaN is a ..." + typeof(NaN));
console.log (typeof(NaN) === "number");

// equality and identity
console.log ("Equality with itself NaN == NaN " + (NaN == NaN));
console.log ("Identity with itself NaN === NaN " + (NaN === NaN));
console.log ("isNaN(NaN) " + (isNaN(NaN)));

// how about other things that aren't a number
console.log ("isNaN(\"Im-not-a-number\") " + (isNaN("im-not-a-number")));
console.log ("isNaN(\"\") " + (isNaN("")));
console.log ("isNaN(\"\'\'\") " + (isNaN("''")));

// and others... https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN#Confusing_special-case_behavior
console.log ("isNaN(undefined) " + (isNaN(undefined)));
console.log ("isNaN({}) " + (isNaN({})));

console.log ("isNaN(true) " + (isNaN(true)));
console.log ("isNaN(null) " + (isNaN(null)));
console.log ("isNaN(101) " + (isNaN(101)));

// if (var !== var) will be true for NaN, as per above tests
var t0 = NaN;
var t1 = "blah" / 2;
var t2 = "blah";

console.log ("Identity for: NaN " + (t0 !== t0));
console.log ("Identity for: \"blah\"/2 " + (t1 !== t1));
console.log ("Identity for: \"blah\" " + (t2 !== t2));

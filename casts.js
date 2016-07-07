/**
 * Fun with implicit casts: see the following code
 * and tell what will be output each time in the console.
*/

console.log(1 +  "2" + "2"); // 122
console.log(1 +  +"2" + "2"); // 32 grmpf + is treated as unary op and it's first
console.log(1 +  -"1" + "2"); // 02
console.log(+"1" +  "1" + "2"); // 112
console.log( "A" - "B" + "2"); // NaN2 no implicit cast to number for a letter
console.log( "A" - "B" + 2); // NaN

/**
 * Test #2
 * Set objects as properties of an object, and you may be surprised:
*/

var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=1; // a["[object Object]"] = 1 ouch
a[c]=2; // a["[object Object]"] = 2

console.log(a[b]);

/*
 Will display: 2
*/

/**
 * Good ole' palindrome:
 * isPalindrome() will, unsurprinsingly, give an opinionated answer on the palindromness
 * of our parameter.
 * 
 * Source: https://www.toptal.com/javascript/interview-questions
 */

function isPalindrome(aString) {
	aString = aString.toLowerCase(); // lowercase
	aString = aString.replace(/\W/g, ''); // get rid of spaces
	revString = aString.split('').reverse().join('');
	
	return aString == revString;
}

console.log(isPalindrome("level"));                   // true
console.log(isPalindrome("levels"));                  // false
console.log(isPalindrome("A car, a man, a maraca"));  // true


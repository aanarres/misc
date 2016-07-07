/**
 * Assume the list processed here is huge indeed, and the code
 * will result in a stack overflow, because of the number of 
 * function calls on the stack.
 * Fix it. :)
 * Source: toptal.com
*/

var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        nextListItem();
    }
};

// Niiiiice solution: remove the call from the stack.
// By pushing it to the event queue. :D
// Untested!

var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        setTimeout(nextListItem(), 0);
    }
};


/**
 * JavaScript is single-threaded. When an event occurs, the browser appends it to a queue.
 * It then checks the queue and executes the "accrued" events.
 * 
 * Example to test: setTimeout()
 * "When setTimeout gets 0 as the last argument, it attempts to execute the func as soon as possible."
 * source: http://javascript.info/tutorial/events-and-timing-depth
 */

(function() {
    console.log(1 + " direct logging"); 
    setTimeout(function(){console.log(2 + " logged with 1000 ms timeout")}, 1000); 
    setTimeout(function(){console.log(3 + " logged with 0 ms timeout")}, 0); 
    console.log(4 + " direct logging");
})();

/*
 * Results:
1 direct logging
4 direct logging
3 logged with 0 ms timeout
2 logged with 1000 ms timeout
*/

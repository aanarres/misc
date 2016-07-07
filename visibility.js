/**
 * Detail tested: an anonymous function defined inside another function (method of an object)
 *  doesn't see 'this'
 */

var myObject = {
    foo: "bar",
    func: function() {
        var copyOfThis = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  copyOfThis.foo = " + copyOfThis.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  copyOfThis.foo = " + copyOfThis.foo);
        }());
    }
};
myObject.func();

/*
 * Console result is:
 * outer func:  this.foo = bar
 * outer func:  copyOfThis.foo = bar
 * inner func:  this.foo = undefined
 * inner func:  copyOfThis.foo = bar
 */

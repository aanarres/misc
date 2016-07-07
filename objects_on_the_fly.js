/**
 * Messing up with objects' structures on the fly!
 * Grab a method from an existing object and invoke it on its own:
*/

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

/*
Displays:
undefined
John Doe
*/

// Problem is stoleSecretIdentity() doesn't know the hero 'this'
// it executes in the global context, where 'this' has no _name

// Solution that works:

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

// interestingly,
var stoleSecretIdentity = hero.getSecretIdentity;
stoleSecretIdentity.bind(hero);
// doesn't work.

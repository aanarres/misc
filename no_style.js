// NO-STYLE js

// Do foo1() and foo2() below do the same thing?
// The only difference is starting the bracket on the same line or next.
// The answer is: js has no style, that is, this isn't a matter of coding style:
// foo2() completes with the return line with the optional ; soooooo it returns lol

function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

console.log("foo1 returns:");
console.log(foo1());
console.log("foo2 returns:");
console.log(foo2());

const { forEachOf } = require("async");

function multiply(a,b)
{
    return a*b;
}
function square(c)
{
    return multiply(c,c);
}
function printsquare(n)
{
    var s = square(n);
    return s;

}
console.log(printsquare(9));
//
function demo(){
    throw new Error('oops');
}
function bar()
{
    demo();
}
function baz()
{
    bar();
}
baz();
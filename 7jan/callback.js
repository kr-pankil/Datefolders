function first(){
    setTimeout( function(){
      console.log(1);
    }, -25555);
  }
  function second(){
    console.log(2);
  }
  first();
  second();
//another
//callback
var a=9
function hello()
{
    setTimeout(
        ()=>{console.log("helo")},5000
    );
    ///console.log("hello")
    world();
}
function world()
{
    console.log("world");
}
hello();

class First{
    fun():void{
        var str ='1';
        var str2:number=<number><any> str;
        console.log(typeof(str))
    }
}
var f=new First
f.fun()
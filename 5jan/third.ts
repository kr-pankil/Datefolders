class Demo{
    static a:number =10
    b:number=20
    constructor(c:number)
    {   
        this.b=c
    }
    demo1(): number  {
        return Demo.a+this.b;
    }
}
var obj :Demo = new Demo(30)
console.log(obj.demo1())
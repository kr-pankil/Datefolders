class Calculator
{
    a:number
    b:number
    constructor(first:number,second:number)
    {
        this.a=first;
        this.b=second;
    }
    sum():number{
        return this.a+this.b;
    }
    sub():number{
        return this.a-this.b;
    }
    mul():number{
        return this.a * this.b;
    }
    div():number{
        return this.a / this.b;
    }
}
var obj5:Calculator=new Calculator(20,10);
console.log(obj5.sum(),obj5.sub(),obj5.mul(),obj5.div())

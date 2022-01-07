var Demo = /** @class */ (function () {
    function Demo(c) {
        this.b = 20;
        this.b = c;
    }
    Demo.prototype.demo1 = function () {
        return Demo.a + this.b;
    };
    Demo.a = 10;
    return Demo;
}());
var obj = new Demo(30);
console.log(obj.demo1());

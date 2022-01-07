var Hello = /** @class */ (function () {
    function Hello(name, age) {
        this.lol = name;
        this.a = age;
    }
    Hello.prototype.world = function (half) {
        return this.lol + half + " " + this.a;
    };
    return Hello;
}());
var obj = new Hello("Hello", 7);
console.log(obj.world("world"));

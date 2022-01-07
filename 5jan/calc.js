var Calculator = /** @class */ (function () {
    function Calculator(first, second) {
        this.a = first;
        this.b = second;
    }
    Calculator.prototype.sum = function () {
        return this.a + this.b;
    };
    Calculator.prototype.sub = function () {
        return this.a - this.b;
    };
    Calculator.prototype.mul = function () {
        return this.a * this.b;
    };
    Calculator.prototype.div = function () {
        return this.a / this.b;
    };
    return Calculator;
}());
var obj5 = new Calculator(20, 10);
console.log(obj5.sum(), obj5.sub(), obj5.mul(), obj5.div());

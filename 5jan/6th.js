var Person = /** @class */ (function () {
    function Person() {
        this.name = "pankil";
        this.age = 21;
    }
    Person.prototype.re = function () {
        return this.name + this.age;
    };
    return Person;
}());
var obj7 = new Person;
console.log(obj7.re());

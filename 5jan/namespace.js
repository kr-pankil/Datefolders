var demo;
(function (demo) {
    function vehicle(name, price) {
        return name + price;
    }
    demo.vehicle = vehicle;
})(demo || (demo = {}));

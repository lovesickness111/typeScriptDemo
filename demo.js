// demo arrow function
var calculateSalary = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return 10;
};
console.log(calculateSalary());
//cách viết arrow function _funcName = (_listParamns)=> _returnValue;
var arrowFuncCal = function (salary) {
    if (salary === void 0) { salary = 2000; }
    return salary;
};
console.log(arrowFuncCal());
//this sẽ được hiểu theo context của hầm cha gần nhất => muốn truyền this ta nên gán nó vào 1 biến
var employee = {
    mesage: "tin nhắn này bị delay",
    greet: function (welcome) {
        if (welcome === void 0) { welcome = ''; }
        //this.id =1
        var self = this;
        //seft = this = employee
        setTimeout(function () {
            //this.id = undefined do this bây giờ hiểu là window
            console.log(welcome);
        }, 1000);
    }
};
employee.greet();
// demo detructor array và object
//cho array
console.log("demo tách mảng thành biến");
var array1 = [1, 2, 3];
//gán từng phần tử array cho các biến riên lẻ
var v1 = array1[0], v2 = array1.slice(1);
console.log(v1);
console.log(v2); //v2 giờ là mảng [2,3] nhờ rest para
//cho object
console.log("demo tách prop trong object");
var object1 = {
    name: "cuong",
    age: 22,
    salary: 10000
};
var a1 = object1.name, age = object1.age, salary = object1.salary;
console.log(a1);
//demo string template tương tự như .fomat trong js
console.log("demo string template");
var templateString = "angular 7";
var stringWelcome = "ch\u00E0o c\u00E1c b\u1EA1n m\u00ECnh \u0111ang h\u1ECDc " + templateString;
employee.greet(stringWelcome);
//# sourceMappingURL=demo.js.map
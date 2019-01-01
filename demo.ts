// demo arrow function
var calculateSalary = function (...args: any[]) {
    return 10;
}
console.log(calculateSalary());
//cách viết arrow function _funcName = (_listParamns)=> _returnValue;
let arrowFuncCal = (salary: any = 2000) => salary;
console.log(arrowFuncCal());
//this sẽ được hiểu theo context của hầm cha gần nhất => muốn truyền this ta nên gán nó vào 1 biến
var employee = {
    mesage: "tin nhắn này bị delay",
    greet: function (welcome:any='') {
        //this.id =1
        var self = this;
        //seft = this = employee
        setTimeout(function () {
            //this.id = undefined do this bây giờ hiểu là window
            console.log(welcome);
        }, 1000);
    }
}
employee.greet();
// demo detructor array và object
//cho array
console.log("demo tách mảng thành biến")
let array1 = [1, 2, 3];
//gán từng phần tử array cho các biến riên lẻ
let [v1, ...v2] = array1;
console.log(v1);
console.log(v2);//v2 giờ là mảng [2,3] nhờ rest para
//cho object
console.log("demo tách prop trong object")
let object1 = {
    name: "cuong",
    age: 22,
    salary: 10000
}
let { name:a1, age, salary} = object1;
console.log(a1);
//demo string template tương tự như .fomat trong js
console.log("demo string template");
var templateString ="angular 7";
var stringWelcome = `chào các bạn mình đang học ${templateString}`;
employee.greet(stringWelcome);

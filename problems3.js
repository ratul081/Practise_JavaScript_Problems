// 1st problem
console.log("\n");
function foo(){
    function bar(){
        console.log('bar');
    }
    bar();
    console.log('foo');
}
foo();
console.log("\n");
// 2nd problem
function make_avg(num1,num2,num3){
    const sum = num1 + num2 + num3;
    const averege = sum / 3;
    return averege
}
const Avarage = make_avg(5,6,9);
console.log("Avarage:", Avarage);
console.log("\n");
// 3rd problem
var numbers = [80, 77, 88, 95, 68];
function make_avg2() {
    var total = 0;
    for (var i = 0; i < numbers.length; i++){
        total += numbers[i];  
    }
        const averege2 = total / numbers.length;
    return averege2
}
const Avarage2 = make_avg2(numbers);
console.log("Avarage:", Avarage2);
console.log("\n");
// 4th problem
function odd_even(x) {
    if (!Number.isInteger(x) === true) {
        console.log("Invalid number");
    }
    if (x % 2 === 0) {
        console.log("This is odd number");
    }
    else {
        console.log("This is Even number");
    }
}
odd_even(7);
odd_even(8);
odd_even(9);
odd_even(11);
odd_even(12);
console.log("\n");
function odd_even2(y) {
    if (!Number.isInteger(y) === true) {
                var d = "This is invalid"
                return d;
    }
    if( y % 2===0){
        var a ="This is odd"
        return a;
    }

    else{
        var b ="This is even"
        return b;
    }
}
var c = odd_even2(6);
console.log(c);
console.log("\n");
// 5th problem
var signal = "yeollow"
if (signal === "red") {
    console.log("I maybe in danger")
}
else if (signal === "yeollow") {
    console.log("I should stop")
}
else {
    console.log("I should cross the road")
}

// 1st problem
function hourToMinutes(hour){
    let minute = hour*60;
    return minute;
}
const result = hourToMinutes(5.5)
console.log("Minute =",result);
console.log("\n");
// 2nd problem
function findLeapYear(years) {
    const leapYear = [];
    for (let i = 0; i < years.length; i++) {
        const index = i;
        const element = years[index]
        if ((element % 4 === 0) && (element % 100 !== 0) || (element % 400 === 0)) {
            leapYear.push(element);
        }
    }
    return leapYear;
}
const years = [2023, 2024, 2025, 2028, 2030,2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044,2048,2052];
const leapyears = findLeapYear(years);
console.log(leapyears);
console.log("\n")
// 3rd problem
function findOddSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            sum = sum + element;
        }
    }
    return sum;
}
const numbers = [5, 7, 8, 10, 45, 30];
const oddNumberSum = findOddSum(numbers);
console.log("The sum of odd number :",oddNumberSum);
console.log("\n");
// 4th problem
function celciusToFahrenheit(celcius) {
    const fahrenheit = ((9/5)*celcius)+32;
    return fahrenheit;

}
var Fahrenheit = celciusToFahrenheit(41);
console.log("The fahrenheit is :",Fahrenheit);
console.log("\n");
// 5th problem
function fahrenheitToCelcius (fahrenheit){
    const celcius = (fahrenheit-32)*5/9;
    return celcius;
}
var celcius = fahrenheitToCelcius(105.8);
console.log("The celcius is :",celcius);
console.log("\n");
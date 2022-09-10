// 1st problem
console.log("\n");
function whoWillHave (jim,dela){
    if(jim>dela) {
    let jimWillHave = 'Jim Will Have the cake';
    return jimWillHave;
    }
    else{
        let delaWillHave = 'Dela will have the cake';
        return delaWillHave;
    }
}
const result = whoWillHave(84,89);
console.log(result);

// 2nd problem
console.log("\n");
function maxNumber (num1,num2,num3) {
    if (num1>num2 && num1>num3) {
        return num1;
        
    }
    else if(num2>num1 && num2>num3){
        return num2;
    }
    else{
        return num3;
    }
    
}
const num1 = 95;
const num2 = 65;
const num3 = 35;
const result2 = maxNumber(num1,num2,num3);
console.log(result2);
console.log("\n");
// 3rd problem
function minNumber (Num1,Num2,Num3) {
    if (Num1<Num2 && Num1<Num3) {
        return Num1;
        
    }
    else if(Num2<Num1 && Num2<Num3){
        return Num2;
    }
    else{
        return Num3;
    }
    
}
const Num1 = 95;
const Num2 = 65;
const Num3 = 35;
const result3 = minNumber(Num1,Num2,Num3);
console.log(result3);
console.log("\n");
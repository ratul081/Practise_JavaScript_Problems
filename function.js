function getAvarage (assingment1, assingment2, assingment3){
    const total = assingment1 + assingment2 + assingment3;
    const average = total / 3;
    return average;
}
const assingment1Marks = 30;
const assingment2Marks = 29;
const assingment3Marks = 30;
var myAverage = getAvarage(assingment1Marks, assingment2Marks, assingment3Marks);
console.log('My avarage so far:', myAverage);
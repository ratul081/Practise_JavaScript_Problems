// 1st problem
console.log("\n");
function minlowestNumber(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let lowest = numbers[0];
        const index = i;
        const element = numbers[index];
        if (lowest > element) {
            lowest = element;

        }
    }
    return lowest;
}
const hights = [167, 190, 120, 165, 137, 265];
const lowest = minlowestNumber(hights);
console.log(lowest);
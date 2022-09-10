var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}
var shoppingItems = ['books', 'sunglass', 'pen', 'shoes']
var friendAge = {
    rahim: 12,
    samad: 45,
    karim: 78,
    jamal: 12,
    robi: 32,
    kazi: 14
}

const keys = Object.keys(shoppingCart);
console.log(keys);
const values = Object.values(shoppingCart);
console.log(values);


for (var i = 0; i < keys.length; i++) {
    var propartyName = keys[i];
    var propartyValues = shoppingCart[propartyName];
    // console.log(propartyName, propartyValues);
}
for (var propartyName in shoppingCart){
    const values = shoppingCart[propartyName]
    console.log(propartyName,values)
}
//Task 1
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
function printDeclaration(array) {
    array.forEach(el => console.log(el))
}

let printArray = (array) => {    array.forEach(el => console.log(el))}

printDeclaration(fibonacci)
printArray(fibonacci)

//Task 2
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
function refactorArray(array) {
    let count = 0
    return array.map((el) => `member ${++count}: ${el}`)
}

console.log(refactorArray(users))

//Task 3
const numbers = [7, -4, 32, -90, 54, 32, -21]
function  isPositive(value) {
    return value > 0
}
let removeNegativeNumbers= (array) => {return array.filter(isPositive)}

function removeNegative(array) {
    return array.filter((el) => el > 0)
}

console.log(removeNegativeNumbers(numbers))
console.log(removeNegative(numbers))

//Task 4
function getArrayValuesSum(array) {
    return array.reduce((prev, current) => prev + current, 0)
}

console.log(getArrayValuesSum(fibonacci))

//Task 5
const numbers2 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
function findFirstOddNumber(array) {
    return array.find((el) => el % 2 === 0 ? el : '')
}

console.log(findFirstOddNumber(numbers2))

//Task 6
const even = (element) => element % 3 === 0 && element % 5 === 0
console.log(numbers2.some(even))

//Task 7
numbers2.every(elem => elem)

//Task 8
let salad = new Map([
    ['огурцы', 300],
    ['помидоры', 200],
    ['соль', 10],
    ['сметана', 110]
])

let getBigProducts = (map) => {
    for (let [key, value] of map) {
        if (value > 100) {
            console.log(key, value)
        }}
}

getBigProducts(salad)

//Task 9
const numbers3 = [1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4, 5, 61, 2, 4, 5, 6, 3, 5]
let uniq = new Set(numbers3)

console.log(uniq)

//Task 10

//Advanced
//Task 1
function fixTroll(string) {
    let stringArray = string.split()
    return stringArray.map(x=>x.replace( /[aAeEiIoOuU]/g, '' )).join()
}

console.log(fixTroll('This website is for losers LOL!'))

//Task 2
//Task 4
function highAndLow(string) {
    let stringArray = string.split(' ')
    let sorted = stringArray.sort()
    return `${sorted.pop()} ${sorted.shift()}`
}

console.log(highAndLow('1 2 -3 4 5'))
//Task 5
function isIsogram(string) {
    let stringArray = string.split('')
    let set = new Set(stringArray)
    return string.length === set.size
}

console.log(isIsogram('aba'))
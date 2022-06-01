'use strict'
//Task 1
const colors = ['red', 'green', 'blue']
console.log(colors.length)

//Task 2
const animals = ['monkey', 'dog', 'cat']
console.log(animals[animals.length - 1])

//Task 3
let numbers = [5, 43, 63, 23, 90]
//or
numbers = []
//or
numbers.length = 0

//Task 4
const students = ['Polina', 'Dasha', 'Masha']
students.pop()
students.push('Borya')
console.log(students)
students.shift()
students.unshift('Andrey')
console.log(students)

//Task 5
const cats = ['Gachito', 'Tom', 'Batman']
for (let index = 0; index < cats.length; index++) {
    console.log(cats[index])
}

for (const iterator of cats) {
    console.log(iterator)
}

//Task 6
const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]
let newArray = evenNumbers.concat(oddNumbers)
console.log(newArray[8])

//Task 7
const binary = [0, 0, 0, 0]
let binaryString = binary.join('1')
console.log(binaryString)

//ADVANCED 
//Task 1
const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]
let total = 0
let count = 0
for (let i = 0; i < matrix.length; i++) {
    for (let n = 0; n < matrix[i].length; n++) {
        total += matrix[i][n]
        count++
    }
}
total = total / count
console.log(total)

//Task 2
const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4]
mixedNumbers.sort()
const negativeNum = mixedNumbers.splice(0, mixedNumbers.indexOf(0))
const positiveNum = mixedNumbers.splice(mixedNumbers.indexOf(0))
console.log(negativeNum)
console.log(positiveNum)

//Task 3
//Создать массив длинной не менее 5, из динамически созданных случайных чисел.Далее написать алгоритм который берет //все числа из исходного массива, возводит их в куб и записывает в новый массив.В конце вывести оба массива в консоль.

let createRandomArray = (arrayLength) => {
    let randArray = []
    for (let index = 0; index <= arrayLength; index++) {
        randArray.push(Math.floor(Math.random() * 120))
    }
    return randArray
}

let upgradeArray = (array) => {
    let newArray = []
    for (const iterator of array) {
        newArray.push(Math.pow(iterator, 3))
    }
    return newArray
}
let arrayRandom = createRandomArray(5)
let powArray = upgradeArray(arrayRandom)
console.log(arrayRandom)
console.log(powArray)
//test
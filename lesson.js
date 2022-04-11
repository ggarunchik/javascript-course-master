//Task 1
const x = 20
const y = 58
const z = 42

let result = x + y + z

console.log('TASK1: Result is: ' + result)

//Task 2
const secondsInMin = 60
const minutesInHour = 60
const hoursPerDay = 24
const daysInYear = 365

const calculateAgeIneconds = (age) => {
    return console.log(
        `TASK2: My age is' ${age} and in seconds this is: ${age * daysInYear * hoursPerDay * minutesInHour * secondsInMin}`)
}
let myAgeInSeconds = calculateAgeIneconds(30)

//Task 3
let count = 42
let userName = '42'

count = String(count)
userName = Number(userName)
//or
//count = count.toString
//userName = parseInt(userName)

//Task 4
let a = 1
let b = 2
let c = 'белых медведей'

console.log(`TASK4: ${a}${b} ${c}`)

//Task 5
let word1 = 'доступ'
let word2 = 'морпех'
let word3 = 'наледь'
let word4 = 'попрек'
let word5 = 'рубило'

let lenghtResult = (word1 + word2 + word3 + word4 + word5).length
console.log(`TASK5: Result is: ${lenghtResult}`)

//Task 6
var obj = {
    firstValue: 1,
    secondValue: 'js',
    thierdValue: true
}
for (var i in obj) {
    console.log(`TASK 6: Variable ${i} have type: ${typeof obj[i]}`)
}

//Task 7
let k = 'true'
let o = false
let u = 17
let w = undefined
let e = null

console.log(`TASK 7: k have type ${typeof k}`)
console.log(`TASK 7: o have type ${typeof o}`)
console.log(`TASK 7: u have type ${typeof u}`)
console.log(`TASK 7: w have type ${typeof w}`)
console.log(`TASK 7: e have type ${typeof e}`)

//Task 8
let height = 15
let width = 20

console.log(`TASK 8: ${(height > width) ? height : width}`)

//Task 9
console.log('TASK 9: ')
let prettierArr = []
for (let i = 0; i <= 20; i++) {
    if (i % 3 === 0) {
        prettierArr.push(i)
    }
}
console.log(prettierArr)

//Task 10
let key = true
let documents = true
let pen = true
let apple = false
let orange = true

let shouldGoToWork

(key && documents && pen && apple || orange) ? shouldGoToWork = true : shouldGoToWork = false
console.log(`TASK 10: Should I go to work? ${shouldGoToWork}`)

//Task 11
const isFizzBuzz = (num) => {
    let outputResult = ''
    if (num % 5 === 0) { outputResult += 'Fiz' }
    if (num % 3 === 0) { outputResult += 'Buz' }
    console.log(`TASK 11: Number ${num} is ${outputResult}`)
}

isFizzBuzz(15)

//Task 12
const isAgeEnougnt = (age) => {
    if (age >= 16 && age <= 18) {
        console.log('TASK12: Можешь выкурить сигаретку, только маме не говори')
    } else if (age > 18) {
        console.log('TASK12: Попей пивка')
    } else if (age < 18) {
        console.log('TASK12: Пей колу')
    }
}
isAgeEnougnt(15)

//Task 13
const desired = 'север'

switch (desired) {
    case 'юг':
        console.log('TASK13: на юг пойдешь счастье найдешь')
        break
    case 'север':
        console.log('TASK13: на север пойдешь много денег найдешь')
        break
    case 'запад':
        console.log('TASK13: на запад пойдешь верного друга найдешь')
        break
    case 'восток':
        console.log('TASK13: на восток пойдешь разработчиком станешь')
        break
    default:
        console.log('TASK13: Неверный ввод')
        break
}

//Advanced
//Task 1
let a1 = 4
let b1 = 3
console.log(`TASK1: a1 was ${a1} and b1 was ${b1}`)

a1 = a1 + b1
b1 = a1 - b1
a1 = a1 - b1

console.log(`TASK1: a1 is ${a1} now and b1 is ${b1} now`)

//Task 3
let ladder = ''
for (let index = 0; index < 6; index++) {
    ladder += '#'
    console.log(ladder)
}

//Task 2
const inquirer = require('inquirer')

inquirer
    .prompt([
        {
            name: 'askNumber',
            message: 'Задайте число?',
        },
        {
            name: 'askDeecrement',
            message: 'Сколько отнять?',
        },
        {
            name: 'askIncrement',
            message: 'Сколько прибавить?',
        },
        {
            name: 'askMultiply',
            message: 'На сколько умножить?',
        },
        {
            name: 'askDevide',
            message: 'На сколько разделить?',
        },
    ])
    .then(answers => {
        const resultMath = (((parseInt(answers.askNumber) - parseInt(answers.askDeecrement)) + parseInt(answers.askIncrement)) * parseInt(answers.askMultiply)) / parseInt(answers.askDevide)

        console.log(`(((${answers.askNumber} - ${answers.askDeecrement}) + ${answers.askIncrement}) * ${answers.askMultiply}) / ${answers.askDevide} = ${resultMath}`)
    })
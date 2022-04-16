'use strict'
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    eyeColor: 'blue'
}
delete person.age
delete person.eyeColor
//or
person = {}
//or
Object.keys(person).forEach(key => delete person[key])
//or 
for (let key in person) {
    if (person.hasOwnProperty.call(person, key)) {
        delete person[key]
    }
}

//Task 2
let person1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    eyeColor: 'blue'
}

'firstName' in person1

//Task 3
const student = {
    name: 'John',
    age: 19,
    isHappy: true
}
for (const key in student) {
    if (Object.hasOwnProperty.call(student, key)) {
        console.log(key, student[key])
    }
}

//Task 4
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
}
console.log(colors['ru pum pu ru rum']['red'])
console.log(colors['ru pum pu ru rum']['blue'])

//Task 5
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
}

let midSalary = (object) => {
    let result = 0
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            result += object[key]
        }
    }
    return result / Object.keys(object).length
}

//Task 6
function register(login, password) {
    let user = new Object()
    user.login = login
    user.password = password
    return user
}

function validate(login, passwod, object) {
    if (object['login'] === login && object['password'] === passwod) {
        console.log('добро пожаловать')
    } else {
        console.log('неверный пароль')
    }
}

let user = register(1, 2)
validate(1, 2, user)

//ADVANCED level
//Task 1 👨‍🏫
const score = {
    0: 'ноль',
    1: 'один',
    2: 'два',
    3: 'три',
    4: 'четыре',
    5: 'пять',
    6: 'шесть',
    7: 'семь',
    8: 'восемь',
    9: 'девять'
}

let formatScore = (score, object) => {
    let stringScore = []
    let parcedScore = score.split(':')
    for (const key in object) {
        key === parcedScore[0] ? stringScore.push(object[key]) : ''
        key === parcedScore[1] ? stringScore.push(object[key]) : ''
    }
    console.log(stringScore.join(':'))
}

formatScore('0:7', score)

//Task 2
let student1 = {
    name: 'Polina',
    age: 27,
}

let student2 = {
    name: 'Polina',
    age: 27,
}

console.log(JSON.stringify(student1) === JSON.stringify(student2))

//Task 3

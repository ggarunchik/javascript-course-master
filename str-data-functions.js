//Task 1 
let userName = 'Gleb Garunchik'
let arr = userName.split(' ')
const greetingMsg = `Привет ${arr[0]} ${arr[1]}`
let isUpperCase = false

for (let i = 0; i <= 4; i++) {
    if (!isUpperCase) {
        console.log(greetingMsg.toLowerCase())
        isUpperCase = true
    } else if (isUpperCase) {
        console.log(greetingMsg.toUpperCase())
        isUpperCase = false
    }
}

//Task 2
const text = 'я учу typescript!'
const result = (text.includes('учу')) ? text.indexOf('учу') : 'Данной подстроки нет'

console.log(result)

//Task 3
const randomString = 'Random string'
function checkPosition(string, position) {
    if (position > string.length) {
        console.log('Вы вышли за границу строки')
    }
}

checkPosition(randomString, 22)

//Task 4
const randomStringAgain = 'Random string.'
const successMsg = 'Данное предложение закончено'
const failMsg = 'В конце предложения не хватает точки'

function isSentenceComplete(sentnece) {
    return sentnece.endsWith('.') ? successMsg : failMsg
}

console.log(isSentenceComplete(randomStringAgain))

//Task 5
let textAgain = 'я учу typescript!'
const cutWithReplace = textAgain.replace('учу', '')
const cutWithSubstring = textAgain.substring(0, 2) + textAgain.substring(6)
const cutWithSlice = textAgain.slice(0, 1) + textAgain.slice(5, 17)

//Task 6
let splitArray = textAgain.split(' ')

//Task 7
const trimString = '                я учу typescript!                '
const prettyString = trimString.trim()

//Task 8
const num = 8.829734872948
const fixedNum = num.toFixed(3)

//Task 9 
const isInteger = (number) => {
    if (Number.isInteger(number)) {
        console.log(number)
    } else {
        let roundedNumber = Math.round(number)
        console.log(roundedNumber)
    }
}

isInteger(num)

//Task 10
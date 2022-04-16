//Task 1
const getSum = (number) => number * (number + 1) / 2

//Task 2
//надо переделать =) 
function getOverpaymentLoan(credit, creditPeriod = 5, interestRate = 17) {
    const annuity = ((interestRate / 100 / 12) / (1 - Math.pow((interestRate / 100 / 12) + 1, -(creditPeriod * 12)))) * credit
    const overPayment = (credit * Math.round(annuity)) - credit
    console.log('месячный платеж ' + Math.round(annuity))
    return overPayment
}

console.log(getOverpaymentLoan(100000))

//Task 3
function trimString(string, from, to) {
    return string.slice(from, to + 1)
}

//Task 4
function getSumNumbers(number) {
    let initialValue = 0
    return number.toString().split('').map(Number)
        .reduce((previousValue, currentValue) => previousValue + currentValue,
            initialValue)
}

//Task 5
function getSumAgain(firstValue, secondValue) {
    let array = [firstValue, secondValue]
    return array.reduce((previousValue, currentValue) => previousValue + currentValue)
}

//Task 6
function fooboo(boolean, callbackFirst, callBackSecond) {
    boolean ? callbackFirst() : callBackSecond()
}

function foo() { console.log(foo.name) }
function boo() { console.log(boo.name) }

//Task 7
((b) => {
    let result = 1
    while (b) {
        result *= b--
    }
    return result
})(6)

//ADVANCED level
//Task 1
function isTriangle(a, b, c) {
    if (a + b < c || a + c < b || b + c <= a)
        return false
    else
        return true
}

//Task 2
function splitChocolate(n, m) {
    if ((n > 1 && m > 1) || (n > 1 && m == 1) || (n == 1 && m > 1))
        return m * n - 1
    else
        return 0
}

//Task 3
let balanceUSD = 10000
const rate = 2
const accessoriesPriceUSD = 60
const phonePriceUSD = 1450

function caclRate(price, rate) {
    return price * rate / 100
}

function formatPriceTo(currency, price) {
    let formattedPrice = price.toFixed(2)
    return `${formattedPrice} ${currency}`
}

function buyPhones() {
    let fullPrice = phonePriceUSD + accessoriesPriceUSD
    let fullPriceWithRate = fullPrice + caclRate(fullPrice, rate)
    let formmatedPrice = formatPriceTo('USD', fullPriceWithRate)
    console.log(`Total is: ${formmatedPrice}`)
    while (balanceUSD >= fullPriceWithRate) {
        balanceUSD -= fullPriceWithRate
        console.log('bought!')
        console.log(balanceUSD)
    }
    console.log('No more money! ' + balanceUSD + ' has left')
}
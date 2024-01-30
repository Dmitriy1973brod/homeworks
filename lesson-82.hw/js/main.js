function hello(name) {
    return `Hello ${name}!`
}
 result = hello('Den')
 console.log(result)

 // ============================

const numbers = [1, 25, 56, 12, 8, 25, 9, 84, 6, 44]
function numMoreTen(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i])            
        }        
    }
}
numMoreTen(numbers)

// =================================================



function calc(number1, number2, operator) {
    if (operator === 'plus') {
        return number1 + number2
    } else if (operator === 'minus') {
        return number1 - number2
    } else if (operator === 'multiply') {
        return number1 * number2
    } else if (operator === 'divide') {
        return number1 / number2
    } else {
        return 'Введите правильно данные'
    }  
}
result = calc(5, 5, 'plus')
console.log(result)

result = calc(5, 5, 'minus')
console.log(result)

result = calc(5, 5, 'multiply')
console.log(result)

result = calc(5, 5, '**')
console.log(result)

result = calc(5, 5, 'divide')
console.log(result)





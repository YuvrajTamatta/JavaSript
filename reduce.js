const numbers = [1,2,3,4,5]
const multi = numbers.reduce((accumulator,currentValue)=>accumulator*currentValue, 1)
console.log(multi);
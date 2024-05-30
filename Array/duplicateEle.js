const roll = [1,3,4,6,3,2,6]
const duplicate = roll.filter((ele,index,arr)=>arr.indexOf(ele)!==index)

console.log(`Duplicates value are : ${duplicate}`);
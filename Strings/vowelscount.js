function vowelCount(str){
    let vowel='aeiouAEIOU'
    let count = 0
    for(let char of str){
        if(vowel.includes(char)){
            count++
        }
    }return count
}
const book = 'hellow orld how ARE YOU'
console.log(vowelCount(book));
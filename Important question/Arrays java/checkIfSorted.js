let num=[1,2,3,5];
function isSort(num){
    for(let i =1; i<num.length; i++){
        if(num[i] < num[i-1]){
            return false;
        }
    }return true;
}
console.log(isSort(num));
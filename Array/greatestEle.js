function greatest(arr){
    let max = arr[0]
   for(let i=0; i<arr.length; i++){
    if(arr[i]>max){
        max=arr[i]
    }    
   }return max
}
const id = [1,50, 500, 60, 1200,-10]

console.log(greatest(id));
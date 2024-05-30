function lowest(arr){
    let min = arr[0]
    for(let i =0; i<arr.length; i++){
        if(arr[i]<min){
            min=arr[i]
        }
    }return min
}
const roll = [12,13,49,69,70,80]
console.log(lowest(roll));
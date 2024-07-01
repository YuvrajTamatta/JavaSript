const arr=[1,4,7,3,0,2,6]
console.log(`original array: ${arr}`);
if(arr.length>1){
    let temp=arr[0]
    arr[0]=arr[arr.length-1]
    arr[arr.length-1]=temp
}
console.log(`Modified array: ${arr}`);
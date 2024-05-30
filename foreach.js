const data=[3,5,2,7,9,4,7]
 function great(arr){
    return data.reduce((accu, len)=> Math.max(accu, len))
 }

 console.log('Smallest number is: '+great(data) );
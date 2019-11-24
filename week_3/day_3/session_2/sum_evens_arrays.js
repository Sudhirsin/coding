var number=[1,2,3,4,5,6,7,8,9,10]
var sum=0

function sumArray(){
  for(var i=0; i<number.length; i++){
    if(number[i]%2==0){
      sum=sum+number[i]
      console.log(number[i])
    } 
  }
  console.log(sum)
}
 sumArray()
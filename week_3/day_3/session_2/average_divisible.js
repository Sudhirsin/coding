var number=[1,2,3,4,5,6,7,8,9,10]
var leng = number.length
var sum=0 
var count=0

function averageDivisible(){
  for(i=0; i<number.length; i++){
    if(number[i]%2==0){
      sum=sum+number[i]
      count=count+1
    } 
    
  }
  average=sum/count
  console.log(average)
  
}
averageDivisible()

    
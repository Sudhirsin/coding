var number=[1,2,3,4,5,6,7,8,9,10]
var leng=number.length
var sum=0
var i=0
var count=0

function averageDivisible(){
    while(i<leng){
        if(number[i]%3==0){
            //console.log(number[i])
            sum=sum+number[i]
            count+=1
        }
        i++
    }
    //console.log(sum)
    //console.log(count)
    average=sum/count
    console.log(average)
}

averageDivisible()

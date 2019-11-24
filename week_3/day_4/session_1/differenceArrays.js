var setA=[1,2,3,4,5,6]
var setB=[1,2,3,6,7,8,9,10]
var differenceArray =[]
var popped=[]
var k=0

for(var i=0; i<setA.length; i++){
    //console.log(setA[i])
    for(var j=0; j<setB.length; j++){
        //Intersection
        if(setA[i]==setB[j]){
            //differenceArray.push(setA[i])
            setA[i]=false
        }
    }
    if(setA[i]){
        //console.log(differenceArray)
        differenceArray[k++]=setA[i]
        //console.log(differenceArray)
    }
}
console.log(differenceArray)



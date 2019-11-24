var setA=[1,2,3,4,5]
var setB=[2,3,4]
var intersectionArray=[]

for(var i=0; i<setA.length; i++){
    //console.log(setA[i])
    for(var j=0; j<setB.length; j++){
        //console.log(setA[i], setB[j])
        if(setA[i]==setB[j]){
            intersectionArray.push(setA[i])
        }
    }
}
console.log(intersectionArray)
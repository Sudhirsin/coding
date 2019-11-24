var setB=[1,2,3,4,5,6,7,8,9]
var setA=[1,2,3,4,5]
var j=0
var count=0


if(setA.length<setB.length){
    for(var i=0; i<setB.length; i++){
        //console.log(setB[i])
        if(setA[i]==setB[i]){
            count=count+1
        }
    }
    console.log(count)
    if(count==setA.length){
        console.log("A is subest of B")
    }else{
        console.log("A is not subset of B")
    }
}else{

}


var setA=[1,2,3,4,5,6,7,8,9,10]
var setB=[1,2,3,4,7,11,12,13,14,15,17]
var count=0

if(setA.length>setB.length){
    for(var i=0; i<setB.length; i++){
       // console.log(setB[i])
       for(var j=0; j<setA.length; j++){
          if(setB[i]==setA[j]){
                count=count+1
          }
       }
    }
    if(count<setA.length){
        console.log("A is superset of B")
    }else{
        console.log("A is not superst of B")
    }
    //console.log(count)
}else{

}
var setA=[1,2,3,4,5,7,10,11,12,16]
var setB=[4,5,6,7,8,20,21,23,24,24]
var intersectionArray=[]
var symmetricArrayA=[]
var unionArray=[]
var k=0



//Finding Intersection
for(var i=0; i<setA.length; i++){
    //console.log(setA[i])
    for(var j=0; j<setB.length; j++){
        //console.log(setB[j],setA[i])
        if(setA[i]==setB[j]){
           intersectionArray.push(setA[i])
        }
    }
}
//console.log(intersectionArray)

//Fnding Symmetric of setA
for(var m=0; m<intersectionArray.length; m++){
    for(var n=0; n<setA.length; n++){
        if(intersectionArray[m]==setA[n]){
            //console.log(intersectionArray[m])
            setA[n]=null
            //console.log(setA[n])
        }
    }
}
for(var p=0; p<setA.length; p++){
    // console.log(setA[p])
     if(setA[p]!==null){
         symmetricArrayA.push(setA[p])
     }
 }

//console.log(symmetricArrayA)

//Jioning the symmetricA and setB

for(var q=0; q<symmetricArrayA.length; q++){
    //console.log(symmetricArrayA[q])
    unionArray.push(symmetricArrayA[q])
}
for(var r=0; r<setB.length; r++){
    //symmetricArrayA[q]!==setB[r]
    unionArray.push(setB[r])
}
console.log(unionArray)
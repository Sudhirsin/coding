var setA=[4,5,10,11,12]
var setB=[4,5,6,7,8,9]
var arr=[]
var symmetriArray1=[]
var symmetriArray2=[]
var symmetriArray=[]
var k=0
var m=0

for(var i=0; i<setA.length; i++){
    for(var j=0; j<setB.length; j++){
        //Intersection
        if(setA[i]==setB[j]){
            arr.push(setA[i])
            setA[i]=false
            setB[j]=false
        }
        //console.log(setA[i],setB[j])
        //console.log(setB[j])
    }
    if(setA[i]){
        symmetriArray1[k++]=setA[i]
    }
}

for(var i=0; i<setB.length; i++){
    for(var j=0; j<setA.length; j++){
        //Intersection
        if(setB[i]==setA[j]){
            arr.push(setB[i])
            //setA[i]=false
            setB[i]=false
        }
        //console.log(setA[i],setB[j])
        //console.log(setB[j])
    }
    if(setB[i]){
        symmetriArray2[m++]=setB[i]
    }
}
//console.log(symmetriArray1)
//console.log(symmetriArray2)

//Combining two arrays
for(n=0; n<symmetriArray1.length; n++){
    //console.log(symmetriArray1[n])
    symmetriArray.push(symmetriArray1[n])
}
for(var p=0; p<symmetriArray2.length; p++){
    symmetriArray.push(symmetriArray2[p])
}
console.log(symmetriArray)
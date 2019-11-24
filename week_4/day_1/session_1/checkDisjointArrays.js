var arrSetA=[1,2,3,4,5]
var arrSetB=[1,8,2,9,3]

function checkDisjointArray(arrSetA,arrSetB){
    var obj={}
    count=0

    for(var i=0; i<arrSetA.length || i<arrSetB.length; i++){
        //console.log(arrSetA[i])
        //console.log(arrSetB[i])
        //count+=1
        if(i<arrSetA.length){
            obj[arrSetA[i]]=arrSetA[i]
        }
        if(i<arrSetB.length){
            obj[arrSetB[i]]=arrSetB[i]
        }
    }
    var objLen= Object.keys(obj).length
    console.log(objLen)
    if(objLen==arrSetA.length+arrSetB.length){
        console.log("Arrays are Disjoint")
    }else{
        console.log("Arrays are not Disjoint")
    }
}

checkDisjointArray(arrSetA, arrSetB)
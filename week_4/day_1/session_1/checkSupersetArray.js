var arr1=[1,2,3]
var arr2=[4,5,6,7,8]

function checkSupersetArray(arr1, arr2){
    var obj={}

    for(var i=0; i<arr1.length || i<arr2.length; i++){
        //console.log(arr1[i])
        //console.log(arr2[i])

        if(i<arr1.length){
            obj[arr1[i]]=null
        }
        if(i<arr2.length){
            obj[arr2[i]]=null
        }
    }
    //console.log(obj)
    var objlen=Object.keys(obj).length
    console.log(objlen)

    //checking superset of array
    if(objlen>=arr2.length){
        console.log("B is superset of A")
    }else{
        console.log("B is not superset of A")
    }
}

checkSupersetArray(arr1, arr2)
var arr1=[1,2,3,4,5]
var arr2=[4,5,6,7,8]

function intersectionArray(){
    var obj={}

    for(var i=0; i<arr1.length || i<arr2.length; i++){
        if(i<arr1.length){
            obj[arr1[i]]=null
        }
        if(i<arr2.length){
            obj[arr2[i]]=null
        }
    }
    console.log(obj)

}

intersectionArray()
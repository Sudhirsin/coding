var arr1=[1,2,3]
var arr2=[4,5,6]

function unionArray(){
    var obj={}

    for(var i=0; i<arr1.length || i<arr2.length; i++){
        if(i<arr1.length){
            obj[arr1[i]]=null
        }
        if(i<arr2.length){
            obj[arr2[i]]=null
        }
    }
   // console.log(obj)

   //map the object and return array
    return Object.keys(obj).map(function(element){
        return parseInt(element)
    })
}

console.log(unionArray())
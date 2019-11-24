var arr1=[1,2,3,4,5,7,8,9,10,1,2,1,4,5,6]
var targetValue=5

function filterArray(arr1, targetValue){
    var filterElement=arr1.filter(function(arr1){
        return arr1>targetValue
    }) 
    
    console.log(filterElement)
}

filterArray(arr1, targetValue)


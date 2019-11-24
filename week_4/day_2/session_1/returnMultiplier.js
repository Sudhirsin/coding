var sub=[2,4,6,8]
var targetValue=4


function multiplier(arr, targetValue){
   var multipleArr= arr.map(function(element){
        return element*targetValue
    })

    console.log(multipleArr)
}

multiplier(arr, targetValue)
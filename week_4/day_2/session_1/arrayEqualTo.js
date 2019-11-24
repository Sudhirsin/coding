var arr=[1,2,2,2,3,5,6,7]
var targetValue=2

function arrayEqual(arr, targetValue){
    var newArr=arr.filter(function(arr){
       return arr!==targetValue
    }).map(function(element){
        return element*element
    })

    console.log(newArr)
}

arrayEqual(arr, targetValue)
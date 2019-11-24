var arr=[1,2,3,4,5,6]

var k=3

function reduceSum(arr, k){
    var reduce=arr.filter(function(ele, arr){
        if(ele>k){
            return ele
        }
    }).reduce(function(a, c){
        return a+c
    })

    console.log(reduce)
   
}

reduceSum(arr, k)
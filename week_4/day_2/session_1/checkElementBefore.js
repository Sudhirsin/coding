var arr=['a',10, 'b', 20, 'c', 30]


function checkElementBefore(arr){
    var total=arr.reduce(function(acc, currentVal){
        if(typeof(currentVal)==="string"){
            return acc
        }else{
            return acc+currentVal
        }
    },0)
    
    return 'Price :'+ total
}


console.log(checkElementBefore(arr))
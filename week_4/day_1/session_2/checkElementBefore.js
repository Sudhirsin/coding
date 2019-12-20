var arr=[1,2,3,4,5]

function checkElementBefore(arr){
    arr=arr.map(function(val, i, arr){
        if(arr[i-1]>val){
            return -1
        }else{
            return 1
        }
    })
    return arr
}

console.log(checkElementBefore(arr))
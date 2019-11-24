

function removeDuplicate(number){
    var number
    var arr = []
    for(var i=0; i<number.length; i++){
        //console.log(number[i])
        for(var j=i+1; j<number.length; j++){
            if(number[i]==number[j]){
                number[j]=null
            }
        }
    }
    for(var k=0; k<number.length; k++){
        if(number[k]!==null){
            arr.push(number[k])
        }
    }
    console.log(arr)
}  

removeDuplicate([1,1,2,2,3,3,4,5])
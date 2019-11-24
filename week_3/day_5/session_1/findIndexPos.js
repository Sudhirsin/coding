

function findIndexPos(arr, value){
    var arr
    var count=0
    var value
    
    for(var i=0; i<arr.length; i++){
        if(arr[i]==value){
            count=i
            break
        } 
        else{
           count=-1    
        }
    } 
    console.log("Indexof"+" "+value+" "+"is "+count)
}
findIndexPos([1,2,3,4,5], 8)
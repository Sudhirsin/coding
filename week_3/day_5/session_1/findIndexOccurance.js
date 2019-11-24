function findIndexOfOcc(arr, value){
    var arr
    var cnt=0
    var value
    var index=[]
    var number=0
   
    for(var i=0; i<arr.length; i++){
        if(arr[i]==value){
            cnt=i
            index.push(cnt)
        }else{
            cnt=-1
            cnt=number
        }
    }
    if(index.length>number){
        console.log(index)
    }else{
        console.log(-1)
    }
    
}

findIndexOfOcc([5,1,2,5,3,4,5,6], 5)

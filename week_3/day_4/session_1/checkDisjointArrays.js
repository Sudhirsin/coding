var arr1=[1,2,3,4,5,6]
var arr2=[1,15,7,8,9,10]


var count=0
function checkDisjointArray(){
    for(var i=0; i<arr1.length; i++){
        for(var j=i+1; j<arr2.length; j++){
            if(arr1[i]==arr2[j]){
                count=count+1
            }
        }
    }
    if(count==0){
        console.log("True")
    }else{
        console.log("False")
    }
}

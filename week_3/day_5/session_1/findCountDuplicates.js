function findCountDuplicates(arr, targetValue){
    var student={
        targetValue:[],
        arr,
        count:0
    }
    for(var i=0; i<student.arr.length; i++){
        for(var j=i+1; j<student.arr.length; j++){
            if(student.arr[i]==student.arr[j]){
                student.arr[j]=null
            }
        }
    }
    for(var k=0; k<student.arr.length; k++){
        if(student.arr[k]==null){
            student.count=student.count+1
        }
    }
    student.targetValue.push(student.count)
   //console.log(student.arr)
    console.log(student.targetValue)

}

findCountDuplicates([10,10,20,10,30,40,10,10,30,20,30])
function findAverageMarks(name, marks){
    var sum=0
    var count=0
    var student={
        name,
        marks,
    }

    for(var i=0; i<student.marks.length; i++){
        //console.log(student.marks[i])
        sum=sum+student.marks[i]
        count=count+1
    }
    avg=sum/count
    console.log(avg)
}
findAverageMarks(["sudhir","ravi","ashish"], [40,50,50])
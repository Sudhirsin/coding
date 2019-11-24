function findAverageMarks(name, marks){
    var sum=0
    var student={
        name,
        marks,
        average: function(){
            for(var i=0; i<this.marks.length; i++){
                //console.log(this.marks[i])
                sum=sum+this.marks[i]
            }
            avg=sum/this.marks.length
            console.log(avg)
        }
    }
    student.average();
}

findAverageMarks(["sudhir","ravi","ashish","sid","abhinav"], [50,40,40,50,50])


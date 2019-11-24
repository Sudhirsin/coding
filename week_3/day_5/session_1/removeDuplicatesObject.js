var student ={
    name: "Sudhir Singh",
    age:24,
    stdId: 45,
    //marks:[10,12,45,10,12,45,60,75,80,75] ,

    removeDulp : function(marks){
        var marks
        var originalArr=[]
        for(var i=0; i<marks.length; i++){
            //console.log(student.marks[i])
            for(var j=i+1; j<marks.length; j++){
                if(marks[i]==marks[j]){
                    marks[j]=null
                }
            }
        }
        //console.log(student.marks)
        //Removing null values from array
        for(var k=0; k<marks.length; k++){
            if(marks[k]!==null){
                originalArr.push(marks[k])
            }
        }
        console.log(originalArr)
    }  
}


student.removeDulp([1,2,3,4,5,5,2,3,8])
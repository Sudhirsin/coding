var student=[{name:'ravi', marks:70},
             {name:'sudhir', marks:50},
             {name:'ashish', marks:85},
             {name:'sid', marks:35},
             {name:'abhinav', marks:95}]



gradeStudent=student.map(function(element){

    if(element.marks>90){
        return element.grade="A" 
    }else if(element.marks>80 && element.marks<90){
        return element.grade="B"
    }else if(element.marks>60 && element.marks<80){
        return element.grade="C"
    }else if(element.marks>40 && element.marks<60){
        return element.grade="D"
    }else{
        return element.grade="F"
    } 
})

console.log(student)


 
class Student{
    constructor(name = 'Invalid', email = 'Invalid', phone = 0){
        this.name = name
        this.email = email
        this.phone = phone
        this.marksArr = []
    }

    assignMarks(...arr){
        this.marksArr = arr
    }

    highestMarks(){
        console.log(Math.max(...this.marksArr))
    }

    totalSubjects(){
        console.log(this.marksArr.length)
    }

    showMarks(){
        console.log(this.marksArr)
    }

    average(){
        let totalMarks = 0
        this.marksArr.forEach(function(val){
            totalMarks += val
        })
        console.log(totalMarks / this.marksArr.length)
    }

    lowMarks(){
        console.log(Math.min(...this.marksArr))
    }
}

let sud = new Student('Sudhir', 'lion.sud.k@gmail.com', 7355279912)
sud.assignMarks(50,40,60,80)
sud.highestMarks()
sud.totalSubjects()
sud.average()
sud.lowMarks()
sud.showMarks()
console.log(sud)
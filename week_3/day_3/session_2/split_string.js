
var name="I am Sudhir Singh"
var string=[]
var i=0

function splitString(){
    while(i<name.length){
        console.log(name[i])
        string[i]=string[i]+name[i]
        i++
    }
    console.log(string)
}

splitString()
var name=['s','u','d','h','i','r']
var string="Hello"
var i=0

function joinArray(){
    while(i<name.length){
        //console.log(name[i])
        string=string+name[i]
        i++
    }
    console.log(string)
}

joinArray()
var name="Sudhir"
var emptyString=""
var splitName=name.split('-')

function reverseString(){
    for(i=name.length-1; i>=0; i--){
        emptyString= emptyString+name[i]
    }
    console.log(emptyString)
}
 reverseString()
var name ="Hello Masai School"
var vowel = ["a","e","i","o","u"]


function printConsonants(){
    for(var j=0; j<name.length; j++){
        for(var k=0; k<vowel.length; k++){
            if(name[j]==vowel[k]){
                console.log(name[j])
            }
        }  
    }
}

printConsonants()
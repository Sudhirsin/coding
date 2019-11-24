var name ="Hello Masai"
var vowel=["a","e","i","o","u"]
var count=0
function printVowel(){
    for(var i=0; i<name.length; i++){
        for(var j=0; j<vowel.length; j++){
            if(name[i]==vowel[j]){
                //console.log(name[i]) 
                count=count+1
            }
        }
    }
    console.log(count)
}

printVowel()
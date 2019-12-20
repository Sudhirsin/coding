var alias = ' '

function aliasCheck() {
    flag=true
    alias = alias.split('')

    for(var i=0; i<alias.length; i++){
        if(alias[i]=="" || alias[i] == '.' || alias[i] == '..' || alias[i] == '_' || alias[i] == '-'){
            return false
        }else{
            return true
        }
    }

}
console.log(aliasCheck())


    // alias.forEach(function (ele) {
    //     console.log(ele)
    //     if (ele == '.' || ele == '..' || ele == '_' || ele == '-') {
    //         return false
    //         break
    //     }else{
    //         return true
    //     }
    // })
    // return flag
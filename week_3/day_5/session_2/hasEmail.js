var email = 'lionmail.com'


function aliasCheck(alias) {
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

function checkDomain(domain){
    if(domain!==""){
        if(domain[0]=='.' || domain[0] == '.' || domain[0] == '..' || domain[0] == '_' || domain[0] == '-'){
            return false
        }else{
            domain=domain.split('.')
            //checkting top leve domain
            if(domain[1]=='com' || domain[1]=='in' || domain[1]=='net' || domain[1]=='masai' || domain[1]=='au' || domain[1]=='co' || domain[1]=='jp'){
                return true
            }else{
                return false
            }
        }
        return true
    }else{
        return false
    }
}


function hasEmail(newemail) {
    //split from @
    var emailCheck=true
    var mail = []
    mail = newemail.split('@')

    // checking mail has otherthan 2 values
    if (mail.length > 2) {
        return false
    }else{
        var alias = mail[0]
        var domain = mail[1]
    
        aliasCheck(alias)
        checkDomain(domain)
    }

    if(aliasCheck(alias)==true && checkDomain(domain)){
        emailCheck=true
        // console.log("Valid email")
    }else{
        emailCheck=false
        // console.log('Invalid email')
    }
    return emailCheck
}


console.log(hasEmail(email))

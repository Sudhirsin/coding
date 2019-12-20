var domain='gmail.net'


function checkDomain(){
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

console.log(checkDomain())
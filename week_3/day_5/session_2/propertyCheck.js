var userObj = {
    'name' : 'sudhir',
    'email' : 'email',
    'password' : 'password'
}

function propertyCheck(userObj, value){
    // var ckeckKey=value
    for (key in userObj) {
        // console.log(userObj[key])
        if (key == value) {
            return true
        } else {
            return false
        }
    }
}

console.log(propertyCheck(userObj, 'naee'))


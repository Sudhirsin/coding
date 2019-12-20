var userObj = {
    'name': 'sudhir',
    'email': 'email',
    'password': 1234
}


function passwordVerify(obj, password) {
    var pswrd = password
    for (key in obj) {
        if (obj['password'] == pswrd) {
            return true
        } else {
            return false
        }
    }
}

console.log(passwordVerify(userObj, 12364))
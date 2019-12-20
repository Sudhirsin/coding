
function newUser(name, email, password) {
    var userObj = {
        'name': name,
        'email': email,
        'password': password
    }

    return userObj
}

console.log(newUser('sudhir', 'lion.sud.k@gmail.com', 1234))
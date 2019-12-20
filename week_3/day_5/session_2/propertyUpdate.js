var userObj = {
    name: 'sudhir',
    email: 'email@email.com',
    password: 12345
}

// userObj.age=18
// userObj.name='singh'
// console.log(userObj)

function propertyUpdate(obj, key, value) {
    obj[key] = value
}

propertyUpdate(userObj, 'name', 'singh')
console.log(userObj)
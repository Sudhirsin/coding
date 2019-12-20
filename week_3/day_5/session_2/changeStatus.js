var userObj = {
    name: 'sudhir',
    age: 25,
    status: 'basic',
    creditLimit: 80000
}

function changeStatus(obj, valueOfStatus) {

    var sat = true
    for (key in obj) {
        if (key == 'status') {
            sat = true

            if (valueOfStatus == 'basic') {
                obj.creditLimit = 80000
                obj.status = 'basic'
            } else if (valueOfStatus == 'premium') {
                obj.status = 'premium'
                obj.creditLimit = 300000
            } else if (valueOfStatus == 'platinum') {
                obj.status = 'platinum'
                obj.creditLimit = 600000
            }
        }
    }
    if (!sat) {
      console.log(invalid)
    }

    return obj
}

var newUser = changeStatus(userObj, 'premium')
console.log(newUser)

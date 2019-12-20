var userObj = {
    name: 'sudhir',
    email: 'email@email.com',
    password: 12345,
    skill: ['coding', 'gaming', 'biking']
}


function addskills(obj, propName, value) {
    var val = value
    var skill = propName
    if (obj.skill.indexOf(val) === -1) {
        obj.skill.push(val)
    } else {
        return false
    }
    return obj
}

console.log(addskills(userObj, 'skill', 'skying'))

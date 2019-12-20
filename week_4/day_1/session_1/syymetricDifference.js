var setA = [1, 2, 3, 4, 5]
var setB = [1,2,3,4, 5]

function symmetricDiffernce(setA, setB) {
    var obj = {}
    // var obj2={}
    var res = []

    setA.forEach(function (val) {
        obj[val] = val
    })

    setB.forEach(function (val) {
        if (obj[val])
            delete obj[val]
        else
            obj[val] = val
    })


    return obj
}

console.log(symmetricDiffernce(setA, setB))
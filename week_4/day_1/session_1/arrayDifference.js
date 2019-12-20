
var setA = [1, 2, 3, 4, 5]
var setB = [4, 5]


function arrayDifference(setA, setB) {
    var obj = {}
    var res = []

    setA.forEach(function (ele) {
        obj[ele] = ele
    })

    setB.forEach(function (val) {
        if (!obj[val]) {
            res.push(val)
        } else {
            obj[val] = null
        }
    })

    return res.length > 0 ? res : -1
}

console.log(arrayDifference(setA, setB))
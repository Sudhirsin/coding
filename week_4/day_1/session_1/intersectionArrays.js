var arr1 = [1, 2, 3, 4, 5, 11]
var arr2 = [6, 7, 8, 4, 5, 11]

function intersectionArray(arr1, arr2) {
    var obj = {}
    var res = []

    arr1.forEach(function (val) {
        obj[val] = val
    });

    arr2.forEach(function (val) {
        if (obj[val]) {
            res.push(val)
        } else {
            obj[val] = null
        }
    })

    //   if(res.length>0)
    //     return res
    //   else
    //     return -1

    return res.length > 0 ? res : -1
}

console.log(intersectionArray(arr1, arr2))
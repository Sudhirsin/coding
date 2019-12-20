var arr2 = [7, 10, 3, 8]
var arr1 = [7, 10]

function checkSubsetArray(arr1, arr1) {
    var obj = {}

    for (var i = 0; i < arr1.length || i < arr2.length; i++) {
        // console.log(arr1[i])
        //console.log(arr2[i])

        if (i < arr1.length) {
            obj[arr1[i]] = null
        }
        if (i < arr2.length) {
            obj[arr2[i]] = null
        }
    }

    var objlen = Object.keys(obj).length
    console.log(objlen)
    //checking subset of arrays
    if (objlen == arr2.length) {
        console.log("A is subset of B")
    } else {
        console.log("A is not subset of B")
    }
}

checkSubsetArray(arr1, arr1)
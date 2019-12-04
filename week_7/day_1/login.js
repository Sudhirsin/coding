function sendLogin(groceryData) {
    var xhr = new XMLHttpRequest()

    var json = JSON.stringify(groceryData)

    //right code
    xhr.addEventListener('load', function () {
        if (xhr.status <= 400) {
            printResponse(xhr.response)
        } else {
            console.log("Error Code is: " + xhr.status)
        }
    })
    xhr.addEventListener('error', function (event) {
        console.log('Error in HTTP request!')
    })

    xhr.open('POST', 'https://reqres.in/api/login')
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    xhr.send(json)
}

function printResponse(input) {
    var body = document.querySelector('body')
    var para = document.createElement('p')
    para.textContent = input
    body.appendChild(para)
}

var form = document.querySelector('#sendForm')
form.addEventListener('submit', function (event) {
    event.preventDefault()
    var inputEle = document.querySelectorAll('.formEle')
    var objData = {
        username: inputEle[0].value,
        password: inputEle[1].value
    }
    console.log(objData)
    sendLogin(objData)
})
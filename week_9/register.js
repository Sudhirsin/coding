function sendLogin(registerForm) {
    var xhr = new XMLHttpRequest()

    var json = JSON.stringify(registerForm)

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

    xhr.open('POST', 'https://reqres.in/api/register')
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    xhr.send(json)
}

function printResponse(input) {
    var body = document.querySelector('body')
    var para =document.querySelector('#para')
    // var para = document.createElement('p')
    para.textContent = input
    para.style.color='green'
    para.fontSize='30px'
    body.appendChild(para)
}

var form = document.querySelector('#sendForm')
form.addEventListener('submit', function (event) {
    event.preventDefault()
    var inputEle = document.querySelectorAll('.formEle')
    var objData = {
        email: inputEle[0].value,
        password: inputEle[1].value
    }
    // console.log(objData)
    sendLogin(objData)
   $('.container').hide()
})
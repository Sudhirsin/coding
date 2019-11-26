//send data to server as JSON

function sendData(objData){
    var xhr = new XMLHttpRequest()
    var json = JSON.stringify(objData)
    xhr.addEventListener('load', function(){
        if(xhr.status <= 400){
            printResponse(xhr.response)
        }else{
            console.log("Error Code is: " + xhr.status)
        }
    })

    xhr.addEventListener('error', function(event){
        console.log('Error in HTTP Request!')
    })
    
    xhr.open('POST', 'http://localhost:8080/auth/register')
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    xhr.send(json)
}
//print the response

function printResponse(input){
    var body=document.querySelector('body')
    var para=document.createElement('p')
    para.textContent=input
    body.appendChild(para)
}

var form=document.querySelector('#sendForm')
form.addEventListener('submit', function(event){
    event.preventDefault()
    var inputEle=document.querySelectorAll('.formEle')
    var postObject={
        name:inputEle[0].value,
        email:inputEle[1].value,
        password:inputEle[2].value,
        username:inputEle[3].value,
        mobile:inputEle[4].value,
        description:inputEle[5].value,
    }
    sendData(postObject)
})


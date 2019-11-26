function sendLogin(objData){
    var xhr=new XMLHttpRequest()

    var json=JSON.stringify(objData)

    //right code
    xhr.addEventListener('load', function(){
        if(xhr.status<=400){
            printResponse(xhr.response)
        }else{
            console.log("Error Code is: "+xhr.status)
        }
    })

    //test case1 failed
    // xhr.onload=function(){
    //     alert("ksahd")
    //     if(xhr.status<=400){
    //         printResponse(xhr.response)
    //     }else{
    //         console.log("Error Code is: "+xhr.status)
    //     }
    // }

    xhr.addEventListener('error', function(event){
        console.log('Error in HTTP request!')
    })

    xhr.open('POST', 'http://localhost:8080/auth/login')
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    xhr.send(json)
}

// Print the response

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
    var objData={
        username:inputEle[0].value,
        password:inputEle[1].value
    }
    console.log(objData)
    sendLogin(objData)
})

// var submit=document.getElementById('register')
// function buttonSubmit(){
//     event.preventDefault()
//     var username=document.getElementById('username').value
//     var password=document.getElementById('password').value
//     var objData={
//         Username:username,
//         Password:password
//     }
//     sendLogin(objData)
//     // console.log(objData)
// }

// submit.addEventListener('click', buttonSubmit)



//albert


// function getUserData(displayFunction, user_id){
//     var result = null;
//     var xhr = new XMLHttpRequest(); 
//     var url = 'https://reqres.in/api/users/'
//              +user_id
//     xhr.open('GET', url); //Here I have simply appended user_id to the string
//     xhr.send()
//     xhr.onload = function (){
//       if(xhr.status == 200){
//         result = xhr.response;
//         displayFunction(result);
//       }
//       else{
//         console.log("Error Code is:" + xhr.status);
//       }
//     } 
//   }
  
//   // This function will check the input to see if it is null and print the input to a p tag if it is not null.
//   var printUserData = function (input){
//     var body = document.querySelector('body');
//     var display = document.createElement('p');
//     if(input == null){ // checking if the input is null
//       display.textContent = 'Error! No user data received or invalid request!';
//       //It will print an error if the input is null
//     }
//     else{
//       display.textContent = input;
//       //Otherwise it will display the text
//     }
//     body.append(display);
//   }
  
//   //Button and listener for the `click here to print the weather data!` button
//   var displayBtn = document.querySelector('#printUser')
//   displayBtn.addEventListener('click',function(){
//     var user_id = document.querySelector('#user').value
//     getUserData(printUserData, user_id);
//   });


var btnLogin=document.querySelector('#login')

//local storage
localStorage.setItem("username", "Sudhir")
localStorage.setItem("password", "1234")


function addUser(){
    event.preventDefault();
    var username=document.querySelector('#username').value
    var password=document.querySelector('#password').value 

    //alert(location)
    var user=localStorage.getItem("username")
    var pswrd=localStorage.getItem("password")

    if(username==user && password==pswrd){
        window.location.href="http://127.0.0.1:5500/session_1/dash.html"        
    }else{
        alert("Please Enter Valid Login and Password")
    }
}

btnLogin.addEventListener('click',addUser)

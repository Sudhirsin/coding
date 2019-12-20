$(document).ready(function () {
      $('#register').click(function () {
        event.preventDefault();
     
        //get data from 
        var name = $('#name').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var username = $('#username').val();
        var mobile = $('#mobile').val();
        var description = $('#description').val();

       
        $.ajax({
            method: "POST",
            url: "http://localhost:8080/auth/register",
            data: JSON.stringify({
                name : name,
                email : email,
                password : password,
                username : username,
                mobile : mobile,
                description : description
            }),
            contentType: "application/json", 

        })

        .done(function(data){
            console.log(data)
        });
    });
});
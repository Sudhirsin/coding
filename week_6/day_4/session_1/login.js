$(document).ready(function(){
   alert("helo")
    // $('#submit').click(function(){
    //     var username = $('#username').val();
    //     alert(username)
    //     var password = $('#password').val();
    //     $.ajax({
    //         url : "http://localhost:8080/auth/login"
    //     })
    //     .done(function(data){
    //         console.log(data)
    //     })
    // })

    $("#submit").click(function(){
        var username = $('#username').val();
        // alert(username)
        var password = $('#password').val();
        $.ajax({
          method: "POST",
          url: "http://localhost:8080/auth/login",
          data: JSON.parse({ username : username , password : password }),
          contentType: "application/json", 

        })
        .done(function(data) {
          console.log(data);
        });
      });
      
      // $("#submit").click(function(){
      //   $.ajax({
      //     url: "http://localhost:8080/auth/login",
      //   })
      //   .done(function(data) {
      //     console.log(data);
      //   });
      // });
   
});
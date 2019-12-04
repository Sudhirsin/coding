$(document).ready(function () {
    $("#email").hide();
    $("#mobile").hide();
    $("#password").hide();
    $("#register").hide();
    $("#lblEmail").hide();
    $("#lblMob").hide();
    $("#lblPassword").hide();


    //validation on name feild
    $('#name').keyup(function () {
        var name = $(this).val();
        if (name.length > 3 && name.length < 10) {
            $('#para').text("Valid name")
            // var para=$("#para").val()
            $("#email").show();
            $("#lblEmail").show();
        } else if (name.length < 3 || name.length > 10) {
            $('#para').text("Invalid name")
            $("#email").hide();
            $("#lblEmail").hide();
        } else {
            $("#para").text("Name should be between the 3 and 10 character")
        }
    });

    //email validation

    $('#email').keyup(function () {
        var email = $(this).val();
        if ($.trim(email).length == 0) {
            $('#para1').text("Invalid email");
        }
        if (validateEmail(email)) {
            $('#para1').text("Valid email");
            $("#password").show();
            $("#lblPassword").show();
            $("#mobile").show();
            $("#lblMobile").show();
           

        } else {
            $('#para1').text("Invalid email");

        }
    });


    // validation on mobile
    $("#mobile").keyup(function () {
        var mobile = $(this).val()
        if (mobile.length == 10) {
            $("#para2").text("Correct Mobile number")
            $('#register').show();
        } else {
            $('#para2').text('Invalid mobile number')
        }
    });

    //submit form
    $('#register').click(function () {
        event.preventDefault();
        // var name=$('#name').val();
        // $('#displayName').text(name)
        //one line code
        $('#displayName').text($('#name').val());
        var email = $('#email').val();
        $('#displayEmail').text(email)
        var mobile = $('#mobile').val();
        $('#displayMob').text(mobile)
        $('#formDetails').hide()
        //fetch data
        $.ajax({
            url: "http://localhost:8080/auth/register",
            type: "POST",
            data: {
                email: ""+$("#email").val()+"",
                password: ""+$("#password").val()+"",
            },
            success: function(response){
                console.log(response);
            }
        });

        //trail2
    });

    //copy form google
    //email functon
    function validateEmail(email) {
        var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (filter.test(email)) {
            return true;
        }
        else {
            return false;
        }
    }

    // //auth register
    $('#register').click(function(){
        $.ajax({
            method: "POST",
            url: "http://localhost:8080/auth/register",
            data: { email: "eve.holt@reqres.in", password: "cityslicka" }
            })
            .done(function (data) {
                console.log(data);
        });
    });
});
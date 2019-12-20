$(document).ready(function(){
    $('#btnSubmit').click(function(){
        event.preventDefault();
        var search=$("#search").val()
       

        $.ajax({
            url: "https://indreed.herokuapp.com/api/jobs?q=javascript",
            type: "GET",
            dataType: 'json',
            contentType: "application/json; charset=utf-8"
        })
        .done(function(data){
            console.log(data)
            // console.log(JSON.parse(data))
        })
        // myurl="https://indreed.herokuapp.com/api/jobs?q="+search
        // $.ajax({
            
        //     url: myurl,
        //     contentType: "application/json"
        //   })
        //   .done(function(data) {
        //     console.log(data);
        // });
       
    });
    

    
    
});

// $('#btnSubmit').click(function(){
//     event.preventDefault();
//     var search=$("#search").val()
//     // console.log("https://indreed.herokuapp.com/api/jobs?q="+search,)
//     $.ajax({
//         url: "https://indreed.herokuapp.com/api/jobs?q="+search,
//         type: "GET",
//         success: function(response){
//             console.log(response);
//         },
//         dataType: "jsonp",
//     });
// })

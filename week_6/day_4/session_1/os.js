$(document).ready(function(){
 
   
    $('#btnSubmit').click(function(){
      var os=$("#selectOs").val()
      event.preventDefault();
      $.ajax({
          url:"http://localhost:8080/codenames/"+os,
      }) 
      .done(function(data){
          data=JSON.parse(data)
        // console.log(data)
        data.codenames.forEach(function(val){
            $('#tbody').html=""
            $('#tbody').append("<tr>"+
            "<td>"+val.version+"</td>"+
            "<td>"+val.name+"</td>"+
            "</tr>");
        });
      });
    }); 
});
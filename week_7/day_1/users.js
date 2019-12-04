$(document).ready(function(){
    $("#get-btn").click(function () {
        event.preventDefault()
        $.ajax({
            url: "https://reqres.in/api/users/",
        })
            .done(function (data) {
                displayData(data)
                console.log(data);
            });
    });
});

//show data
var tbody=document.getElementById('tbody')
function displayData(input){

    tbody.textContent=""
    input.data.forEach(function(val){
        var tr=document.createElement('tr')

        var td1=document.createElement('td')
        td1.textContent=val.id

        var td2=document.createElement('td')
        td2.textContent=val.first_name

        var td3=document.createElement('td')
        td3.textContent=val.last_name
       
        var td4=document.createElement('td')
        td4.textContent=val.email
    
        var td5=document.createElement('td')
        // var img=document.createElement('img')
        // img.setAttribute('src', val.avatar)
        td5.textContent=val.avatar
        // $('td5').append(img)
        $('tr').append(td1);
        $('tr').append(td2);
        $('tr').append(td3);
        $('tr').append(td4);
        $('tr').append(td5);
        $('#tbody').append(tr);
    })

}
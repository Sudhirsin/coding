var submit=document.getElementById('submit')
submit.addEventListener('click', getUserData)

function getUserData(){
    
    var os=document.getElementById('diffOperating').value
    alert("hello")
    var result=null
    var xhr=new XMLHttpRequest()
    xhr.open('GET','http://localhost:8080/codenames/'+os)
    xhr.send()
    xhr.onload=function(){
        if(xhr.status==200){
            result=JSON.parse(xhr.response)
            // console.log(result)
            displayFunction(result)
        }else{
            console.log("Error Code :" + xhr.status)
        }
    }
    event.preventDefault()
}

var cont=document.getElementById('tbody')
var display=document.getElementById('display')

function displayFunction(input){
    cont.innerHTML=""
    input.codenames.forEach(function(val){
        var tr=document.createElement('tr')
        var td1=document.createElement('td')
        td1.textContent = val.version;
        var td2 = document.createElement('td');
        td2.textContent = val.name;
        tr.appendChild(td1);
        tr.appendChild(td2);
        cont.appendChild(tr);
    })
}

display.addEventListener('click', displayFunction)

// var printUserData = function (input){
//     var body = document.querySelector('body');
//     var display = document.createElement('p');
//     if(input == null){ 
//       display.textContent = "Error! No user data received or invalid request!";
      
//     }
//     else{
//       display.textContent = input;
      
//     }
//     body.append(display);
//   }



//   submit.addEventListener('click',function(){
//   getUserData(printUserData);
// });

// var cont = document.getElementById('tBody');
// function displayFunction(input){
//     cont.innerHTML = "";
//     input.codenames.forEach(function(ele){
//          var tr =  document.createElement('tr');
//          var td1 =  document.createElement('td');
//          td1.textContent = ele.version;
//          var td2 = document.createElement('td');
//          td2.textContent = ele.name;
//          tr.appendChild(td1);
//          tr.appendChild(td2);
//          cont.appendChild(tr);
//     })
// }
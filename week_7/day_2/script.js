$(document).ready(function(){

    var userData = []
    $('#table').hide();
    $('#displayData').hide();

   function User(fisrtName, lastName, username, password, email, type){
        this.fisrtName = fisrtName;
        this.lastName = lastName;
        this.username = username; 
        this.password = password; 
        this.email = email; 
        this.type = type;
   }

   function createUser(){
        var fName = $('#firstName').val();
        var lName = $('#lastName').val();
        var usrName = $('#username').val();
        var pswrd = $('#password').val();
        var eml= $('#email').val();
        var typ= $('#type').val();

        var addData = new User(fName, lName, usrName, pswrd, eml, typ)
        userData.push(addData)
        // console.log(addData)
        // console.log(userData)
        
   }

   function appendUser(arr){
        arr.forEach(function(val){
            $('#showData').append(`<option value=${val.username}>${val.fisrtName} (${val.username})</option>`)
        });
   }

   //create details in table
   function createTableDetails(val){
       return `<tr>
                    <td>${val.fisrtName}</td>
                    <td>${val.lastName}</td>
                    <td>${val.email}</td>
                    <td><button id="btnDelete" value="${val.username}" class="btn bg-danger text-white rounded">Delete</button></td>
                </tr>`
   }

   //showing data in table
   $('#filterData').change(function(){
        var filter = $('#filterData').val();
        alert(filter)
        $('#tbody').empty();
        $('#table').show();
        userData.forEach(function(val){
            if(filter=='all'){
                $('#tbody').append(createTableDetails(val))
            }else if(filter=='user'){
                if(val.type=='user'){
                    $('#tbody').append(createTableDetails(val))
                }
            }else{
                if(val.type=='admin'){
                    $('#tbody').append(createTableDetails(val))
                }
            }
        });
   });

   function userInfo(userDetail){
       return   `<div>
                    <h5>Hello ${userDetail.fisrtName} Welcome back</h5>
                    <h5>Username:  ${userDetail.username}</h5>
                    <h5>You are ${userDetail.type}</h5>
                </div>`
   }

   $('#showData').change(function(){
        var shw=$('#showData').val()
        $('#displayData').empty();
        $('#displayData').show();
        userData.forEach(function(val){
            if(val.username==shw){
                $('#displayData').append(userInfo(val))
            }
        })
   });

   //sorting fi=unction
    function sortArray(array, property, direction) {
        direction = direction || 1;
        array.sort(function compare(a, b) {
            let comparison = 0;
            if (a[property] > b[property]) {
                comparison = 1 * direction;
            } else if (a[property] < b[property]) {
                comparison = -1 * direction;
            }
            return comparison;
        });
        return array;
    }

   //sorting the table by asccnding and descending by username
   $('#sortData').change(function(){
       var sort = $('#sortData').val();
       $('#tbody').empty();
       $('#table').show();
       if(sort=='ascending'){
            sortArray(userData, 'username')
            userData.forEach(function(val){
                $('#tbody').append(createTableDetails(val))
            })
        }else{
            sortArray(userData, 'username', -1)
            userData.forEach(function(val){
                $('#tbody').append(createTableDetails(val))
            })
        }
   })
//    //delete function
//     function deleteUsers(array, val){
//         array.filter(function(ele){
//             if()
//         })
//     }
   
    // var newArray = array.filter(function(currentElement, currentIndex, array){}) 

    $(document).on('click','#btnDelete', function(){
        alert('Hello')
        var userdelete = $('#btnDelete').val();
        var target = event.target;
        var parent = target.parentElement;
        var parent = parent.parentElement;

        $(parent).remove();
        
        console.log(userdelete)
        // userData.forEach(function(val){
        //     if(val.username==userdelete){
        //        delete val
        //     }
        // });

        //grep used
        userData = $.grep(userData, function(e){
            console.log(userdelete)
            console.log(e.username)
            return e.username != userdelete
        });
        console.log(userData)
    });

   $('#btnSubmit').click(function(){
       event.preventDefault()
       $('#showData').empty()
       createUser() 
       appendUser(userData) 
   })
});


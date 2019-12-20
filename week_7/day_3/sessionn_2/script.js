$(document).ready(function(){
    //hide student data conatainer
    $('#stdDataContainer').hide()

    //storing student data
    var stdDatabase = []
    //making API call
    window.addEventListener('load',function(){
        console.log('loading')
        var xhr = new XMLHttpRequest()
        xhr.open('GET','http://localhost:8000/students')
        xhr.onload = function(){
            data = xhr.response
            data = JSON.parse(data)
            data.forEach(function(val){
                stdDatabase.push(val)
            })
            // displayStdData(data)
        }
        xhr.send()
    })
    //display the whole student data
    $('#btnShowStdData').click(function(){
        $('#btnStd').slideUp(4000)
        $('#stdDataContainer').show(2000)
        alert('Hello')
        stdDatabase.forEach(function(ele){
            ele.total = parseInt(ele.maths)+parseInt(ele.science)+parseInt(ele.english)
            createTable(ele)
        })
    });
    console.log(stdDatabase)

    $('#stdPage').change(function(){
        var pageVal = $('#stdPage').val();
        $('#tbody').empty();
        alert(pageVal)
        if(pageVal==10){
            stdDataPage(stdDatabase, 10)
            createOption(pageVal)
        }else if(pageVal==25){
            stdDataPage(stdDatabase, 25)
            createOption(pageVal)
        }else if(pageVal==50){
            stdDataPage(stdDatabase, 50)
            createOption(pageVal)
        }else{
            stdDataPage(stdDatabase, 100)
            createOption(pageVal)
        }
    });

    //function for page
    function stdDataPage(arr, pageNo){
        for(var i=0; i<pageNo; i++){
            createTable(arr[i])
        }
    }

    // function for divide page as result
    function createOption(pgValue){
        $('#resPerPage').empty();
        for(let i = 1; i<=(100/pgValue); i++){
            $('#resPerPage').append(`<option value="${i}">${i}</option>`)
        }
    }

    //divide student details as per selected values
    function dividePage(arr, val1, val2){
        var intialPage = ((val1-1)*val2)
        for(let i = intialPage; i < val1*val2; i++){
            createTable(arr[i])
        }
    }

    $('#resPerPage').change(function(){
        $('#tbody').empty();
        var resSelectVal = $('#resPerPage').val();
        var stdPageVal = $('#stdPage').val()
        dividePage(stdDatabase, resSelectVal, stdPageVal)
    });

    //search by lastname, firstname, email etc
    $('#searchStd').on('keyup', function(){
        $('#tbody').empty();
        let search = $('#searchStd').val().toLowerCase();
        stdDatabase.forEach(function(val){
            if(val.first_name.toLowerCase().includes(search) || val.last_name.toLowerCase().includes(search) || val.email.toLowerCase().includes(search)){
                createTable(val)
            }
        });
    })

    //filter through gender
    $('.gender').click(function(){
        $('#tbody').empty()
        var gender = event.target.value; 
        stdDatabase.forEach(function(val){
            if(gender==val.gender.toLowerCase()){
                createTable(val)
            }
        });

    })

    //sort in asc and desc
    $('#sortByAscDesc').change(function(){
        $('#tbody').empty();
        let sort = event.target.value
        if(sort == 'ascending'){
            // console.log(stdDatabase)
            sortArray(stdDatabase, ('first_name' || 'last_name'), 1)
            // console.log(stdDatabase)
            stdDatabase.forEach(function(val){
                createTable(val)
            });
        }else{
            sortArray(stdDatabase, 'first_name', -1)
            stdDatabase.forEach(function(val){
                createTable(val)
            }); 
        }
    });

    //sort based on total marks
    $('#sortTotal').change(function(val){
        $('#tbody').empty()
        var sortTotal = event.target.value 
        // alert(sortTotal) 
        if(sortTotal == 'highToLow'){
            sortArray(stdDatabase, 'total', -1)
            stdDatabase.forEach(function(val){
                createTable(val)
            });
        }else{
            sortArray(stdDatabase, 'total', 1)
            stdDatabase.forEach(function(val){
                createTable(val)
            });
        } 
        stdDatabase.forEach(function(val){

        });
    });

    //sort function
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

    //create table
    function createTable(ele){
        $('#tbody').append(`<tr>
                                <td>${ele.id}</td>
                                <td>${ele.first_name}</td>
                                <td>${ele.last_name}</td>
                                <td>${ele.email}</td>
                                <td>${ele.gender}</td>
                                <td>${ele.maths}</td>
                                <td>${ele.english}</td>
                                <td>${ele.science}</td>
                                <td>${ele.total}</td>
                            </tr>`)
    }
});
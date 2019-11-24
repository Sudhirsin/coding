var arrobj=[]

function stdDetails(){
    var name=document.getElementById('name').value
    var grade=document.getElementById('grade').value
    var science=document.getElementById('science').value
    var math=document.getElementById('math').value
    var english=document.getElementById('english').value
    var history=document.getElementById('history').value
    var geography=document.getElementById('geography').value

    //finding average
    var total=Number(science)+Number(math)+Number(english)+Number(history)+Number(geography)
    var avg=total/5
   
    var stdobj = {
        Name: name,
        Grade:grade,
        Science:science,
        Math:math,
        English:english,
        History:history,
        Geography:geography,
        Average:avg,
        Total:total
    }

    arrobj.push(stdobj);
    event.preventDefault();
    console.log(arrobj);

    //assign value to filter
    //var std1=document.createElement('option')
    //std1.innerHTML=name
    //std1.value=name
    //var optionfilter=document.getElementById('selName')
    //optionfilter.appendChild(std1)
}


//to ses student details
function findDeatils(){
    var studentName=document.getElementById('selName').value
    var result=document.getElementById('showResult')
    var show=""
    //alert(studentName)
    arrobj.forEach(function(element){
    //console.log(element)
        if(studentName==element.Grade){
            //console.log(element)
            for(key in element){           
                show=show+key+':- '+element[key]+'<br />'
            }
        }
    })
    result.innerHTML=show
}




//Showing data in tabular form
//function findDeatils(){
//    var studentName=document.getElementById('selName').value
//    var result=document.getElementById('showResult')
//    var show=""
//    var name=document.getElementById('name').value
//    var tdStdName=document.createElement('td')
//    tdStdName.innerHTML=name
//    var tdStdName1=document.createElement('td')
//    tdStdName.innerHTML=name
//    var trstdName=document.querySelector('#stdName')
//    trstdName.appendChild(tdStdName)
//
//    console.log(trstdName)
//    shownamearrobj.forEach(function(element){
//    console.log(element)
//        if(studentName==element.Name){
//            //console.log(element)
//            for(key in element){
//                show=show+key+':- '+element[key]+'<br />'
//            }
//        }
//    })
//    result.innerHTML=show
//}

//2nd
//to ses student details
//function findDeatils(){  
//    var stdTble=document.querySelector('stdTable')
//    var filterValue=document.querySelector('selName')
//    newStdResultArr=arrobj.filter(function(ele){
//        if(studentName==val.Grade){
//            return ele
//        }
//    })
//
//    newStdResultArr.forEach(function(value){
//        var 
//    })
//
//
//
//}






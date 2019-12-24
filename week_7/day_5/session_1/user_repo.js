$(document).ready(function(){
    // alert('Hello')
    var reposUrl = localStorage.getItem('repos_url')
    console.log(reposUrl)
    fetch(reposUrl)
    .then(res => res.json())
    // .then(res => console.log(res))
    .then(res => res.forEach(function(val){
        console.log(val)
        $('#reposTbody').append(`<tr>
                                    <td>${val.id}</td>
                                    <td>${val.name}</td>
                                    <td>${val.full_name}</td>
                                    <td>${val.updated_at}</td>
                                    <td>${val.pushed_at}</td>
                                </tr>`)
    }))
});
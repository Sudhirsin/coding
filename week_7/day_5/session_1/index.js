$(document).ready(function(){
    $('#btnSearch').click(function(){
        $('#tbody').empty()
        event.preventDefault()
        let userId = $('#search').val()
        let baseUrl = 'https://api.github.com/search/users?q='
        
        fetch(baseUrl + userId)
        .then(res => res.json())
        // .then(res => console.log(res))
        .then(res => {
            res.items.forEach(function(val){
                console.log(val)
                $('#tbody').append(`<tr>
                                    <td>${val.id}</td>
                                    <td><img style="width:200px; height:200px" src="${val.avatar_url}" /></td>
                                    <td>${val.score}</td>
                                    <td><button id="btnGetRepo" value="${val.repos_url}" class="btn btn-outline-dark">Get Repo</button></td>
                                </tr>`)
            }); 
        });
    });
    $(document).on('click', '#btnGetRepo', function(){
        let reposValue = event.target.value;
        alert(reposValue)
        var checkLocal = localStorage.getItem('repos_url')
        if(checkLocal == null){
            localStorage.setItem('repos_url', reposValue)
        }else{
            localStorage.removeItem('repos_url')
            localStorage.setItem('repos_url', reposValue)
        }
        //redirect page to another page dynamically
        window.location.href='user_repo.html';
    });     
});

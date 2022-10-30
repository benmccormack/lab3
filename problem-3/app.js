function findUser(){
    //retrieving the username from the search box
    let username = document.getElementById('searchBar').value;

    //we now fetch the profile of the user
    fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
        getUserInfo(data);
        getUserRepos(data);
    })
}


let getUserInfo = (data) => {
    console.log(data);
    console.log(data.login);
    document.getElementById('profilePic').src = data.avatar_url;
    document.getElementById('name').innerHTML = data.name;
    document.getElementById('username').innerHTML = data.login;
    document.getElementById('email').innerHTML = data.email;
    document.getElementById('location').innerHTML = data.location;
    document.getElementById('gists').innerHTML = data.public_gists;
}

let getUserRepos = (data) => {
    
}
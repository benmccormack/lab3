function findUser(){
    //retrieving the username from the search box
    let username = document.getElementById('searchBar').value;

    //we now fetch the profile of the user
    fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
        setUserInfo(data);
        getUserRepos(data, username);
    })

}

// this function is responsible for setting the user info
let setUserInfo = (data) => {
    document.getElementById('profilePic').src = data.avatar_url;
    document.getElementById('name').innerHTML = 'Name: ' + data.name;
    document.getElementById('username').innerHTML = 'Username: ' + data.login;
    document.getElementById('email').innerHTML = 'Email: ' + data.email;
    document.getElementById('location').innerHTML ='Location: ' + data.location;
    document.getElementById('gists').innerHTML = 'Number of Gists: ' + data.public_gists;
}

// this function is responsible for retriving the repos relevant to the username that has been entered.
let getUserRepos = (data, username) => {
    //clears previously retrieved and created elements
    clearRepos();
    //fetches repos and calls the populate function which creates elements for the content.
    fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(data => {
        populateRepos(data);
    })
}

// this function is responsible for populating the repos. 
let populateRepos = (data) => {
    let repos = document.getElementById('repos');
    //creating the repos title
    let title = document.createElement('h2');
    title.innerHTML = 'Repos'
    repos.appendChild(title);

    //creating a repo title and description for each repo and adding a hr to seperate each repository
    for(let i = 0; i < data.length; i++){
        let repo = document.createElement('div');
        repo.className = 'repo';
        repo.innerHTML = 'Repo Name:  ' + data[i].name;
        repos.appendChild(repo);
        let desc = document.createElement('div');
        desc.className = 'repoDesc';
        desc.innerHTML = 'Description:  ' + data[i].description;
        repos.appendChild(desc);
        let hr = document.createElement("hr");
        repos.append(hr);
    }
}

// purpose of this function is to reset the div by setting the content to null - this gets rid of previously created elements
let clearRepos = () => {
    document.getElementById('repos');
    repos.innerHTML = ' ';
}


fetch("https://api.github.com/users/octocat/repos").then(function (response) {
    response.json().then(function (data) {
        console.log(data);
    });
});


var getUserRepos = function (user) {
    // format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    // make a request to the url
    fetch(apiUrl).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
        });
    });
};



var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

var formSubmitHandler = function (event) {
    event.preventDefault();
    console.log(event);

    // get value from input element
    var username = nameInputEl.value.trim();

    if (username) {
        getUserRepos(username);
        nameInputEl.value = "";
    } else {
        alert("Please enter a GitHub username");
    }
};

userFormEl.addEventListener("submit", formSubmitHandler);
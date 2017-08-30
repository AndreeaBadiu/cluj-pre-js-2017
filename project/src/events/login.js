const checkCredentials = function (e) {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const divElement = document.getElementById('alert-div');
    e.preventDefault();
    if (username === 'user' && password === 'pass') {
        goToEvaluationsPage();
    } else {
        divElement.style.display = 'block';
    }
};


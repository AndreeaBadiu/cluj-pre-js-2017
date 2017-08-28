const checkCredentials = function () {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    if (username === 'user' && password === 'pass') {
        goToEvaluationsPage();
    } else {
        alert('Username or Password wrong. Please try again!');
    }
};

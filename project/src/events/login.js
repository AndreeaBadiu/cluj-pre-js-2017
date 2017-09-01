const checkCredentials = function (username, password) {
    const divElement = document.getElementById('generalAlertElement');
    if (username === 'user' && password === 'pass') {
        localStorage.setItem('isLogged', true);
        const views = setToFalse();
        views.evaluations = true;
        return views;
    }
    divElement.style.display = 'block';
    return null;
};

const LoginEvents = function () {
    this.initEvents = function (build) {
        const button = document.getElementById('login-button');
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const views = checkCredentials(username, password);
            if (views != null) {
                build(views);
            }
        });
    };
};

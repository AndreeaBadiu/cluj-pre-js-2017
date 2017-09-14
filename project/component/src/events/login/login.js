(function () {
    const checkCredentials = function (username, password) {
        const divElement = document.getElementById('generalAlertElement');
        if ((username === 'user' && password === 'pass') || (username === 'user2' && password === 'pass2')) {
            localStorage.setItem('isLogged', true);
            const views = 'evaluations';
            return views;
        }
        divElement.style.display = 'block';
        return null;
    };

    const setEvent = function (build, e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const views = checkCredentials(username, password);
        if (views != null) {
            build(views);
        }
    };

    const LoginEvents = function () {
        this.init = function (build) {
            const button = document.getElementById('login-button');
            button.addEventListener('click', setEvent.bind(null, build));
        };

        this.destroy = function (build) {
            const button = document.getElementById('login-button');
            button.removeEventListener('click', setEvent.bind(null, build));
        };
    };

    interviewApp.login.events = {
        set: new LoginEvents()
    };
}());

window.onload = function () {
    const divEl = document.querySelector('#app');
    divEl.innerHTML = LoginPage();

    const button = document.querySelector('.button');
    const checkCredentials = function () {
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;

        if (username === 'user' && password === 'pass') {
            goToEvaluationsPage();
        } else {
            alert('Username or Password wrong. Please try again!');
        }
    };

    const goToEvaluationsPage = function () {
        divEl.innerHTML = EvaluationsPage();
        setGoToPageEvents('.new-evaluation', goToNewEvaluationPage);
        addLogoutEvent();
    };

    const setGoToPageEvents = function (selectorName, goToPage) {
        const navEvaluations = document.querySelector(selectorName);
        navEvaluations.addEventListener('click', goToPage);
    };

    const goToNewEvaluationPage = function () {
        divEl.innerHTML = NewEvaluationPage();
        setGoToPageEvents('.evaluations', goToEvaluationsPage);
        addLogoutEvent();
    };


    /* ------------Logout functions---------- */

    const addLogoutEvent = function () {
        const logoutButton = document.querySelector('.logout');
        logoutButton.addEventListener('click', logout);
    };

    const logout = function () {
        divEl.innerHTML = LoginPage();
    };


    button.addEventListener('click', checkCredentials);

    // divEl.innerHTML = NewEvaluationPage();
};

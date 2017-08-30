const EvaluationsEvents = function () {
    this.initEvents = function (build) {
        const newEvalButton = document.querySelector('.new-evaluation');
        newEvalButton.addEventListener('click', (e) => {
            e.preventDefault();
            const views = setToFalse();
            views.newEvaluation = true;
            build(views);
        });

        const logoutButton = document.getElementById('logout');
        logoutButton.addEventListener('click', (e) => {
            e.preventDefault();
            const views = setToFalse();
            views.login = true;
            localStorage.setItem('isLogged', false);
            build(views);
        });
    };
};

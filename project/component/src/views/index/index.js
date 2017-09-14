(function () {
    const divEl = document.getElementById('app');
    const isLogged = false;
    let views = '';
    let currentPage = '';

    function getLoggedIn() {
        const user = JSON.parse(localStorage.getItem('isLogged'));
        return !!user;
    }

    let localStArray = localStorage.getItem('evaluationsKey');
    if (localStArray == null) {
        localStArray = [];
        localStorage.setItem('evaluationsKey', JSON.stringify(localStArray));
    }

    if (getLoggedIn()) {
        views = 'evaluations';
    } else {
        views = 'login';
    }

    interviewApp.build = function (object, name) {
        if (currentPage !== '') {
            interviewApp[currentPage].destroy(interviewApp.build);
        }
        currentPage = object;
        interviewApp[object].init();
        if (name !== undefined) {
            interviewApp[object].insert(name);
        }
    };
    interviewApp.build(views);
}());

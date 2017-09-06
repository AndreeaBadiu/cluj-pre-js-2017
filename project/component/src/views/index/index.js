(function () {
    const divEl = document.getElementById('app');
    const isLogged = false;
    let views = '';

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
        interviewApp[object].init(object);
        if (name !== undefined) {
            interviewApp[object].insert(name);
        }
    };
    interviewApp.build(views);
}());

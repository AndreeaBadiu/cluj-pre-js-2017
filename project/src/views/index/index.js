
(function () {
    const divEl = document.querySelector('#app');
    const isLogged = false;
    const views = setToFalse();

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
        views.evaluations = true;
    } else {
        views.login = true;
    }

    const build = function (object) {
        const component = ComponentConstructor(object);
        divEl.innerHTML = component.view.markup;
        component.initEvents.initEvents(build);
    };

    build(views);
}());

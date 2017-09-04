(function () {
    const divEl = document.getElementById('app');
    const isLogged = false;
    let views = '';

    const login = new LoginEvents();
    const evaluations = new EvaluationsEvents();
    const newEvaluation = new NewEvaluationEvents();
    const details = new DetailsEvents();


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

    const build = function (object, name) {
        //  const component = ComponentConstructor(object);
        // divEl.innerHTML = component.view.markup;
        // component.events();
        // if (object === 'details') {
        //   component.insertData();
        // }
        window.interviewApp.login.init(object);
    };


    window.interviewApp = {};

    window.interviewApp.login = {
        init(object) {
            const component = ComponentConstructor(object);
            divEl.innerHTML = component.view.markup;
            component.events.init();
        }
        // destroy: login.destroy
    };

    window.interviewApp.evaluations = {
        init(object) {
            const component = ComponentConstructor(object);
            divEl.innerHTML = component.view.markup;
            component.events.init();
        }
        // destroy: evaluations.destroy
    };

    window.interviewApp.newEvaluation = {
        init(object) {
            const component = ComponentConstructor(object);
            divEl.innerHTML = component.view.markup;
            component.events.init();
        }
        // destroy: newEvaluation.destroy
    };

    window.interviewApp.details = {
        init(object) {
            const component = ComponentConstructor(object);
            divEl.innerHTML = component.view.markup;
            component.events.init();
        },
        insertData: details.insertData.bind(null, name),
        // destroy: details.destroy
    };

    build(views);
}());

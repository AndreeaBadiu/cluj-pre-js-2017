(function () {
    const divEl = document.getElementById('app');
    const isLogged = false;
    let views = '';

    /*
    const login = new LoginEvents();
    const evaluations = new EvaluationsEvents();
    const newEvaluation = new NewEvaluationEvents();
    const details = new DetailsEvents();
*/

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
            interviewApp.details.insert(object, name);
        }
    };
    /*
    window.interviewApp = {};

    window.interviewApp.login = {
        init() {
            const component = ComponentConstructor('login');
            divEl.innerHTML = component.view.markup;
            component.events.init(build);
        }
        // destroy: login.destroy
    };

    window.interviewApp.evaluations = {
        init() {
            const component = ComponentConstructor('evaluations');
            divEl.innerHTML = component.view.markup;
            component.events.init(build);
        }
        // destroy: evaluations.destroy
    };

    window.interviewApp.newEvaluation = {
        init() {
            const component = ComponentConstructor('newEvaluation');
            divEl.innerHTML = component.view.markup;
            component.events.init(build);
        }
        // destroy: newEvaluation.destroy
    };

    window.interviewApp.details = {
        init() {
            const component = ComponentConstructor('details');
            divEl.innerHTML = component.view.markup;
            component.events.init(build);
        },
        insert(object, name) {
            const component = ComponentConstructor('details');
            component.events.insertData(build, name);
        }
        // destroy: details.destroy
    };
*/
    interviewApp.build(views);
}());

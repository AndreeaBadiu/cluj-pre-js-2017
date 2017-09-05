var interviewApp = {};

(function () {
    const divEl = document.getElementById('app');
    const login = new LoginEvents();
    const evaluations = new EvaluationsEvents();
    const newEvaluation = new NewEvaluationEvents();
    const details = new DetailsEvents();

    interviewApp.login = {
        init() {
            const component = ComponentConstructor('login');
            divEl.innerHTML = component.view.markup;
            component.events.init(interviewApp.build);
        }
    // destroy: login.destroy
    };

    interviewApp.evaluations = {
        init() {
            const component = ComponentConstructor('evaluations');
            divEl.innerHTML = component.view.markup;
            component.events.init(interviewApp.build);
        }
    // destroy: evaluations.destroy
    };

    interviewApp.newEvaluation = {
        init() {
            const component = ComponentConstructor('newEvaluation');
            divEl.innerHTML = component.view.markup;
            component.events.init(interviewApp.build);
        }
    // destroy: newEvaluation.destroy
    };

    interviewApp.details = {
        init() {
            const component = ComponentConstructor('details');
            divEl.innerHTML = component.view.markup;
            component.events.init(interviewApp.build);
        },
        insert(object, name) {
            const component = ComponentConstructor('details');
            component.events.insertData(interviewApp.build, name);
        }
    // destroy: details.destroy
    };
}());

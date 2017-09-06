const interviewApp = {};

(function () {
    const divEl = document.getElementById('app');

    interviewApp.login = {
        init() {
            renderPage(interviewApp.login.view.set);
            setupEvent(interviewApp.login.events.set, interviewApp.build);
        }
    // destroy: login.destroy
    };

    interviewApp.evaluations = {
        init() {
            renderPage(interviewApp.evaluations.view.set);
            setupEvent(interviewApp.evaluations.events.set, interviewApp.build);
        }
    // destroy: evaluations.destroy
    };

    interviewApp.newEvaluation = {
        init() {
            renderPage(interviewApp.newEvaluation.view.set);
            setupEvent(interviewApp.newEvaluation.events.set, interviewApp.build);
        }
    // destroy: newEvaluation.destroy
    };

    interviewApp.details = {
        init() {
            renderPage(interviewApp.details.view.set);
            setupEvent(interviewApp.details.events.set, interviewApp.build);
        },
        insert(name) {
            interviewApp.details.events.set.insertData(name);
        }
    // destroy: details.destroy
    };
}());

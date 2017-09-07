const interviewApp = {};

(function () {
    const divEl = document.getElementById('app');

    interviewApp.login = {
        init() {
            renderPage(interviewApp.login.view.set);
            setupEvent(interviewApp.login.events.set, interviewApp.build);
        },
        destroy() {
            destroyEvent(interviewApp.login.events.set);
        }
    };

    interviewApp.evaluations = {
        init() {
            renderPage(interviewApp.evaluations.view.set);
            setupEvent(interviewApp.evaluations.events.set, interviewApp.build);
        },
        destroy() {
            destroyEvent(interviewApp.evaluations.events.set);
        }
    };

    interviewApp.newEvaluation = {
        init() {
            renderPage(interviewApp.newEvaluation.view.set);
            setupEvent(interviewApp.newEvaluation.events.set, interviewApp.build);
        },
        destroy() {
            destroyEvent(interviewApp.newEvaluation.events.set);
        }
    };

    interviewApp.details = {
        init() {
            renderPage(interviewApp.details.view.set);
            setupEvent(interviewApp.details.events.set, interviewApp.build);
        },
        destroy() {
            destroyEvent(interviewApp.details.events.set);
        },
        insert(name) {
            interviewApp.details.events.set.insertData(name);
        }
    };
}());

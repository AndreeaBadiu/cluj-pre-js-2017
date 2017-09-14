(function () {
    const EvaluationsEvents = function () {
        this.init = function (build) {
            setEvents('new-evaluation', 'newEvaluation', build);
            setEvents('logout', 'login', build);
            const detailsButtons = document.getElementsByClassName('details');
            Array.prototype.slice.call(detailsButtons).forEach((element) => {
                const id = element.getAttribute('id');
                setEvents(id, 'details', build);
            });
        };
        this.destroy = function (build) {
            removeEvents('new-evaluation', setEvents.bind(null, 'new-evaluation', 'newEvaluation', build));
            removeEvents('logout', setEvents.bind(null, 'logout', 'login', build));

            const detailsButtons = document.getElementsByClassName('details');
            Array.prototype.slice.call(detailsButtons).forEach((element) => {
                const id = element.getAttribute('id');
                removeEvents(id, setEvents(id, 'details', build));
            });
        };
    };

    interviewApp.evaluations.events = {
        set: new EvaluationsEvents()
    };
}());

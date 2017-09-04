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
};

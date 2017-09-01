const EvaluationsEvents = function () {
    this.initEvents = function (build) {
        setEvents('new-evaluation', 'newEvaluation', build);
        setEvents('logout', 'login', build);

        const views = setToFalse();
        const detailsButtons = document.getElementsByClassName('details');
        Array.prototype.slice.call(detailsButtons).forEach((element) => {
            const id = element.getAttribute('id');
            setEvents(id, 'details', build);
        });
    };
};

const DetailsEvents = function (options) {
    this.initEvents = function (build) {
        setEvents('new-evaluation', 'newEvaluation', build);
        setEvents('evaluations', 'details', build);
        setEvents('logout', 'login', build);
    };
    this.insertData = function (build) {
        const getRightInput = (key) => {
            const localStorageInfo = JSON.parse(localStorage.getItem('evaluationsKey'));
            let rightInput;
            localStorageInfo.forEach((el) => {
                if (options.details.name === el.candidateFormData[key]) {
                    rightInput = el;
                }
            });
            return rightInput;
        };

        insertIntoForm = (id, key) => {
            const input = document.getElementById(id);
            input.value = getRightInput(key).candidateFormData[key];
        };


        getRightInput('candidate');
        getRightInput('interviewer');
        getRightInput('date');

        insertIntoForm('inputs-candidate', 'candidate');
        insertIntoForm('inputs-interviewer', 'interviewer');
        insertIntoForm('inputs-date', 'date');
    };
};

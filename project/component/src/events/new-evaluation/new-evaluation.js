(function () {
    const NewEvaluationEvents = function () {
        this.init = function (build) {
            setEvents('evaluations', 'evaluations', build);
            setEvents('logout', 'login', build);

            const submitButton = document.getElementById('submit-button');
            submitButton.addEventListener('click', getFormData);

            document.getElementById('evaluations').classList.remove('navigation-bar-active');
            const newEvalButton = document.getElementById('new-evaluation');
            newEvalButton.classList.add('navigation-bar-active');
        };

        this.destroy = function (build) {
            removeEvents('evaluations', setEvents.bind(null, 'evaluations', 'evaluations', build));
            removeEvents('logout', setEvents.bind(null, 'evaluations', 'evaluations', build));

            const submitButton = document.getElementById('submit-button');
            submitButton.removeEventListener('click', getFormData);
        };
    };


    /* ------------------ candidateDetailForm ------------------------ */

    const getCandidateDetailData = function () {
        const inputData = {
            candidate: document.getElementById('inputs-candidate').value,
            interviewer: document.getElementById('inputs-interviewer').value,
            date: document.getElementById('inputs-date').value,
        };

        return inputData;
    };

    /* ---------------------- technicalLevelPicker --------------------- */

    const getTechnicalLvData = function () {
        return document.querySelector('input[name="level"]:checked').value;
    };
    /* ------------------------- Textarea ----------------------------- */

    const getTextarea = function () {
        const textarea = interviewApp.data.newEvaluation.getTextareaData().map((el) => {
            const key = setKey(el.title);
            const textareaObj = {};
            textareaObj[key] = document.getElementById(setKey(el.title)).value;
            return textareaObj;
        });

        return textarea;
    };

    /* ------------------------- technicalAreaPicker --------------------- */

    const getSelectedOption = function (id) {
        const e = document.getElementById(`${id}`);
        return e.options[e.selectedIndex].value;
    };

    const getTechnicalData = function (data) {
        const fieldsetsObj = {};
        data.forEach((el) => {
            const legend = setKey(el.legends);
            fieldsetsObj[legend] = {};
            const all = {};
            el.items.forEach((i) => {
                const label = setId(el.legends, i.label);
                all[label] = getSelectedOption(label);
                fieldsetsObj[legend] = all;
            });
        });


        const formData = {
            candidateFormData: getCandidateDetailData(),
            technicalLvData: getTechnicalLvData(),
            textareaInfo: getTextarea(),
            technicalAreaData: fieldsetsObj
        };

        const arr = JSON.parse(localStorage.getItem('evaluationsKey')) || [];
        arr.push(formData);
        localStorage.setItem('evaluationsKey', JSON.stringify(arr));
    };

    const getFormData = function () {
        interviewApp.data.newEvaluation.getTechnicalAreaData().then(data => getTechnicalData(data));
    };

    interviewApp.newEvaluation.events = {
        set: new NewEvaluationEvents()
    };
}());

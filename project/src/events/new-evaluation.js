const goToNewEvaluationPage = function () {
    const divEl = document.querySelector('#app');
    divEl.innerHTML = NewEvaluationPage();
    setEvents('.evaluations', goToEvaluationsPage);
    setEvents('.logout', logout);
    const submitButton = document.querySelector('.submit-button');
    submitButton.addEventListener('click', getFormData);
    removeEventListener('click', getFormData); 
};

/* ------------------ candidateDetailForm ------------------------ */

const getCandidateDetailData = function () {
    const inputData = {
        candidate: document.querySelector('.inputs-candidate').value,
        interviewer: document.querySelector('.inputs-interviewer').value,
        date: document.querySelector('.inputs-date').value,
    };

    return inputData;
};

/* ---------------------- technicalLevelPicker --------------------- */

const getTechnicalLvData = function () {
    return document.querySelector('input[name="level"]:checked').value;
};
/* ------------------------- Textarea ----------------------------- */

const getTextarea = function () {
    const textarea = getTextareaData().map((el) => {
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

const getTechnicalData = function () {
    const fieldsetsObj = {};
    const fieldsetData = getTechnicalAreaData().map((el) => {
        const legend = setKey(el.legends);
        fieldsetsObj[legend] = {};
        const all = {};
        el.items.forEach((i) => {
            const label = setId(el.legends, i.label);
            all[label] = getSelectedOption(label);
            fieldsetsObj[legend] = all;
        });
        return fieldsetsObj;
    });
};

const getFormData = function (e) {
    const formData = {
        candidateFormData: getCandidateDetailData(),
        technicalLvData: getTechnicalLvData(),
        textareaInfo: getTextarea(),
        technicalAreaData: getTechnicalData()
    };
    e.preventDefault();
    const arr = JSON.parse(localStorage.getItem('evaluationsKey'));
    arr.push(formData);
    localStorage.setItem('evaluationsKey', JSON.stringify(arr));
    goToEvaluationsPage();
};


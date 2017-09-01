const DetailsEvents = function (options) {
    this.initEvents = function (build) {
        setEvents('new-evaluation', 'newEvaluation', build);
        setEvents('evaluations', 'details', build);
        setEvents('logout', 'login', build);
    };
    this.insertData = function (build) {
        const getRightInput = () => {
            const localStorageInfo = JSON.parse(localStorage.getItem('evaluationsKey'));
            const rightInput = localStorageInfo.filter(el =>
                options.details.name === setKey(el.candidateFormData.candidate));
            return rightInput;
        };

        // -------- inputs ---------//

        insertIntoForm = (id, key, arr) => {
            const input = document.getElementById(id);
            input.value = arr[0].candidateFormData[key];
            disable(id);
        };
        const rightArr = getRightInput();

        insertIntoForm('inputs-candidate', 'candidate', rightArr);
        insertIntoForm('inputs-interviewer', 'interviewer', rightArr);
        insertIntoForm('inputs-date', 'date', rightArr);


        // -------- Technical Level Picker ------//

        const lsId = rightArr[0].technicalLvData;
        document.getElementById(lsId).checked = true;
        radioButtons = document.getElementsByName('level');
        radioButtons.forEach((e) => {
            const rb = e;
            if (!e.checked) {
                e.disabled = true;
            }
        });

        // -------- Textarea ------- //

        const textareas = rightArr[0].textareaInfo;
        textareas.forEach((obj, i) => {
            textareaKey = Object.keys(textareas[i])[0];
            const val = obj[textareaKey];
            document.getElementById(textareaKey).value = val;
            disable(textareaKey);
        });

        // ------- Technical Area Picker -------//

        const fieldsets = rightArr[0].technicalAreaData;
        const fieldsetKey = Object.keys(fieldsets);
        fieldsetKey.forEach((el) => {
            const fieldsetObjects = fieldsets[el];
            const objKeys = Object.keys(fieldsetObjects);
            objKeys.forEach((e) => {
                const values = fieldsetObjects[e];
                document.getElementById(e).value = values;
                disable(e);
            });
        });
    };
};

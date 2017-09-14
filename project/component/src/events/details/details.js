(function () {
    const DetailsEvents = function (options) {
        this.init = function (build) {
            setEvents('new-evaluation', 'newEvaluation', build);
            setEvents('evaluations', 'evaluations', build);
            setEvents('logout', 'login', build);
        };
        this.destroy = function (build) {
            removeEvents('new-evaluation', setEvents.bind(null, 'new-evaluation', 'newEvaluation', build));
            removeEvents('evaluations', setEvents.bind(null, 'evaluations', 'evaluations', build));
            removeEvents('new-evaluation', setEvents.bind(null, 'logout', 'login', build));
        };
        this.insertData = function (index) {
            const getRightInput = () => {
                const localStorageInfo = JSON.parse(localStorage.getItem('evaluationsKey'));
                console.log(localStorageInfo[index]);
                return localStorageInfo[index];
            };

            // -------- inputs ---------//

            insertIntoForm = (id, key, arr) => {
                const input = document.getElementById(id);
                input.value = arr.candidateFormData[key];
                disable(id);
            };
            const rightArr = getRightInput();

            insertIntoForm('inputs-candidate', 'candidate', rightArr);
            insertIntoForm('inputs-interviewer', 'interviewer', rightArr);
            insertIntoForm('inputs-date', 'date', rightArr);

            // -------- Technical Level Picker ------//

            const lsId = rightArr.technicalLvData;
            document.getElementById(lsId).checked = true;
            radioButtons = document.getElementsByName('level');
            radioButtons.forEach((e) => {
                const rb = e;
                if (!e.checked) {
                    e.disabled = true;
                }
            });

            // -------- Textarea ------- //

            const textareas = rightArr.textareaInfo;
            textareas.forEach((obj, i) => {
                textareaKey = Object.keys(textareas[i])[0];
                const val = obj[textareaKey];
                document.getElementById(textareaKey).value = val;
                disable(textareaKey);
            });

            // ------- Technical Area Picker -------//

            const fieldsets = rightArr.technicalAreaData;
            console.log(fieldsets);
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

    interviewApp.details.events = {
        set: new DetailsEvents()
    };
}());

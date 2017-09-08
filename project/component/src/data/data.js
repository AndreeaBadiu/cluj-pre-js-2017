interviewApp.data = {};

(function () {
    interviewApp.data.evaluations = {
        getEvaluationsData: () => {
            const evaluationsObj = { headings: ['Nume', 'Tehnologie', 'Nivel', ''] };
            const lsInfo = JSON.parse(localStorage.getItem('evaluationsKey'));
            evaluationsObj.rows = [];
            if (lsInfo) {
                lsInfo.forEach((el) => {
                    const rows = {
                        name: el.candidateFormData.candidate,
                        technology: 'Javascript',
                        level: el.technicalLvData
                    };
                    evaluationsObj.rows.push(rows);
                });
            }
            return evaluationsObj;
        }
    };
    interviewApp.data.newEvaluation = {
        getTechnicalLevelData: () =>
            ({
                title: 'Technical Level',
                headers: ['Trainee', 'Junior', 'Middle', 'Senior'],
                columnData: [
                    {
                        inputLevels: ['t'],
                    },
                    {
                        inputLevels: ['jun1', 'jun2', 'jun3'],
                    },
                    {
                        inputLevels: ['mid1', 'mid2', 'mid3'],
                    },
                    {
                        inputLevels: ['sen1', 'sen2', 'sen3'],
                    },
                ],
            }),
        getTextareaData: () =>
            [
                {
                    title: 'Should the candidate be hired?',
                    content: 'The type of project that is suitable for the candidate Is guidance required for the candidate'
                },
                {
                    title: 'General Impressions',
                    content: '*required'
                },
                {
                    title: 'Workflow, Leadership & Soft Skills',
                    content: 'Describe the environment in which the candidate works. Describe any guidance or management experience'
                }
            ],
        getTechnicalAreaData: () => {
            const ENDPOINT_URL = 'http://localhost:3000/new-evaluation.json';
            const promise = new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', ENDPOINT_URL);
                xhr.send();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status < 400) {
                            try {
                                const response = JSON.parse(xhr.responseText).fieldsets;
                                resolve(response);
                            } catch (e) {
                                reject('ERROR');
                            }
                        } else {
                            reject('ERROR blabla');
                        }
                    }
                };
            });
            return promise;
        }
    };
}());

const getEvaluationsData = function () {
    const evaluationsObj = { headings: ['Nume', 'Tehnologie', 'Nivel', ''] };
    const lsInfo = JSON.parse(localStorage.getItem('evaluationsKey'));
    evaluationsObj.rows = [];
    lsInfo.forEach((el) => {
        const rows = {
            name: el.candidateFormData.candidate,
            technology: 'Javascript',
            level: el.technicalLvData
        };
        evaluationsObj.rows.push(rows);
    });
    return evaluationsObj;
};

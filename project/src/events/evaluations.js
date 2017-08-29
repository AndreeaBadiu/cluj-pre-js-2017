const goToEvaluationsPage = function () {
    const divEl = document.querySelector('#app');
    divEl.innerHTML = EvaluationsPage();
    setEvents('.new-evaluation', goToNewEvaluationPage);
    setEvents('.logout', logout);
};

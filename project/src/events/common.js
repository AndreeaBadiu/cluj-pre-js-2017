const setEvents = function (selectorName, goToPage) {
    const navEvaluations = document.querySelector(selectorName);
    navEvaluations.addEventListener('click', goToPage);
};

const logout = function () {
    const divEl = document.querySelector('#app');
    divEl.innerHTML = LoginPage();
};

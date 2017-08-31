const setEvents = function (selectorName, goToPage) {
    const navEvaluations = document.querySelector(selectorName);
    navEvaluations.addEventListener('click', goToPage);
    removeEventListener('click', goToPage);
};

const logout = function () {
    localStorage.removeItem('isLogged');
    const divEl = document.querySelector('#app');
    divEl.innerHTML = LoginPage();
};

/*
const setManyEvents = function(selector, function) {

}
*/

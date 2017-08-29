window.onload = function () {
    const divEl = document.querySelector('#app');
    divEl.innerHTML = LoginPage();

    const button = document.querySelector('.button');
    button.addEventListener('click', checkCredentials);
    removeEventListener('click', checkCredentials);

    let localStArray = localStorage.getItem('evaluationsKey');
    if (localStArray == null) {
        localStArray = [];
        localStorage.setItem('evaluationsKey', JSON.stringify(localStArray));
    }
};

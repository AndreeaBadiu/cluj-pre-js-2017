window.onload = function () {
    const divEl = document.querySelector('#app');
    divEl.innerHTML = LoginPage();

    const button = document.querySelector('.button');
    button.addEventListener('click', checkCredentials);
};

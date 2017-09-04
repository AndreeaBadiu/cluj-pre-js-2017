const setEvents = (buttonId, page, build) => {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const views = page;
        checkIfLogout(buttonId);
        const name = button.dataset.name;
        build(views, name);
    });
};

const checkIfLogout = (buttonId) => {
    if (buttonId === 'logout') {
        localStorage.setItem('isLogged', false);
    }
};

const setToFalse = () => ({
    login: false,
    evaluations: false,
    newEvaluation: false,
    details: {
        pageDisplay: false,
        name: ''
    }
});

const disable = ((id) => {
    const element = document.getElementById(id);
    element.disabled = true;
});

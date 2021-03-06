const setEvents = (buttonId, pageToBeShown, build) => {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const views = setToFalse();
        checkIfLogout(buttonId);
        changeActiveTab(buttonId);
        if (pageToBeShown === 'details') {
            views[pageToBeShown].pageDisplay = true;
            views[pageToBeShown].name = button.dataset.name;
        } else {
            views[pageToBeShown] = true;
        }
        build(views);
    });
};

const checkIfLogout = (buttonId) => {
    if (buttonId === 'logout') {
        localStorage.setItem('isLogged', false);
    }
};

const changeActiveTab = (buttonId) => {
    if (buttonId === 'new-evaluation') {
        const evalButton = document.getElementById('evaluations');
        evalButton.classList.remove('navigation-bar-active');
        const newEvalButton = document.getElementById('new-evaluation');
        newEvalButton.classList.add('navigation-bar-active');
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

const getRightInput = (key) => {
    const localStorageInfo = JSON.parse(localStorage.getItem('evaluationsKey'));
    let rightInput;
    localStorageInfo.forEach((el) => {
        if (options.details.name === el.candidateFormData.key) {
            rightName = el;
        }
    });
    return rightInput;
};

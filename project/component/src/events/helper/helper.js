const setKey = function (name) {
    return name.split(/[ |,]/).join('');
};

const setId = function (legend, label) {
    const splitFirst = legend.split(/[ |,]/).join('');
    const splitSecond = label.split(/[ |,]/).join('');
    return splitFirst + splitSecond;
};

const renderPage = function (page) {
    divEl = document.getElementById('app');
    divEl.innerHTML = page.markup;
};

const setupEvent = function (page, build) {
    page.init(build);
};

const destroyEvent = function (page) {
    page.destroy();
};

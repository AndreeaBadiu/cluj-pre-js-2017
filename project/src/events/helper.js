const setKey = function (name) {
    return name.split(/[ |,]/).join('');
};

const setId = function (legend, label) {
    const splitFirst = legend.split(/[ |,]/).join('');
    const splitSecond = label.split(/[ |,]/).join('');
    return splitFirst + splitSecond;
};

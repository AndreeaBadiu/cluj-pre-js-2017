const Component = function (options = {}) {
    const arr = options.map(el =>
        `<div class="content-box-fields">
            <fieldset class="content-box-evaluations content-box-evaluations-skin">
                ${DropdownSelector(el)}
            </fieldset>
        </div>`);
    return arr.join('');
};

/* -------------- BEFORE -------------------------
const TechnicalAreaPicker = (options = {}) =>
    `${Component(getTechnicalAreaData((result) => {
        const res = JSON.parse(result).fieldsets;
        console.log(res);
        return res;
    }))}`;
*/

/*
const TechnicalAreaPicker = (options = {}) =>
    `${(getTechnicalAreaData((result) => {
        console.log(Component(JSON.parse(result).fieldsets));
        return Component(JSON.parse(result).fieldsets);
    }))}`;
*/

/*
module.init = function () {
    getTechnicalAreaData((result) => {
        console.log(TechnicalAreaPicker(Component(result)));
    });
}; */

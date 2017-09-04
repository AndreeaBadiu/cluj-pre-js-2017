const DetailDropdownSelector = function (options = {}) {
    const arr = [`<legend class="field-title field-title-skin">${setKey(options.legends)}</legend>`];
    const constant = options.items.map((el) => {
        const dropDownOptions = el.options.map(e => `<option value="${e}">${e}</option>`);
        const dropdownEl = dropDownOptions.join('');
        const forNameId = setId(options.legends, el.label);
        return `
            <ul>
             <li>
                <label for="${forNameId}">${el.label}</label>
                <select name="${forNameId}" id="${forNameId}">
                ${dropdownEl}
                </select> 
              </li>
            </ul>
   `;
    },
    );

    const selectOption = arr.push(constant.join(''));
    return arr.join('');
};

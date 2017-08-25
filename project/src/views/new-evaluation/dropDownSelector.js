const DropdownSelector = function(options = {}) {
  
  const arr = [`<legend class="field-title field-title-skin">${options.legends}</legend>`];
  const constant = options.items.map((el) => {
    const dropDownOptions= el.options.map((e) => `<option value="${e}">${e}</option>`)
    const dropdownEl = dropDownOptions.join("");
    const aux = el.label.split(' ').join('_');
    
    return `        
            <ul>
             <li>
                <label class="firstLi" for="${aux}">${el.label}</label>
                <select name="classEvalOptions" id="${aux}">
                ${dropdownEl}
                </select> 
              </li>
            </ul>
   `;
    }
);
  
    return constant.join('');
  }
  
  
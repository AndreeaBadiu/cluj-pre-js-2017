const Component = function (options = {}) {
    const arr = options.map(el => `<div class="content-box-fields">
                                       <fieldset class="content-box-evaluations content-box-evaluations-skin">
                                            ${DropdownSelector(el)}
                                        </fieldset>
                                </div>`);
    return arr.join('');
};

const TechnicalAreaPicker = (options = {}) => `${Component(getTechnicalAreaData())}
                                               <div class="submit-button submit-button-skin">
                                                   <input class="sub-button sub-button-skin" type="submit" value="Submit">
                                               </div>
                                             `;

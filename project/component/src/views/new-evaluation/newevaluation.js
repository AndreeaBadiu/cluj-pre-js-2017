
(function () {
// ------------------------ Candidate details ----------------------

    const CandidateDetailsForm = function () {
        return `
        <div class="inputs inputs-skin">
            <input class="inputs-candidate inputs-candidate-skin" id="inputs-candidate" type="text" name="Candidate" placeholder="Candidate">
            <input class="inputs-interviewer inputs-interviewer-skin" id="inputs-interviewer" type="text" name="Interviewer" placeholder="Interviewer">
            <input class="inputs-date inputs-date-skin" id="inputs-date" type="date">
        </div>
    `;
    };

    // -----------------------Technical Level Picker ------------------

    const TechnicalLevelPickerHeader = function (options = {}) {
        const headers = options.map(h =>
            `<th class="tbl-head tbl-head-skin">${h}</th>`);
        return headers.join('');
    };

    const TechnicalLevelPickerColumn = function (options = {}) {
        const allColumns = options.map((cd) => {
            const columns = ['<td class="newevaluation-table">'];
            const columnsArr = cd.inputLevels.map(ip => `<input type="radio" id= "${ip}" name="level" value="${ip}">`);
            columns.push(columnsArr.join(''));
            columns.push('</td>');
            return columns.join('');
        });
        return allColumns.join('');
    };

    const TechnicalLevelPicker = function (options = {}) {
        const title = `<caption class="content-box-tbl-tl content-box-tbl-tl-skin">${options.title}</caption>`;
        const headers = TechnicalLevelPickerHeader(options.headers);
        const columns = TechnicalLevelPickerColumn(options.columnData);

        return `<div class="content-box">
              <table class="content-box-tbl content-box-tbl-skin">
                ${title}
                  <tr>
                    ${headers}
                  </tr>
                  <tr class="second-half-of-table second-half-of-table-skin">
                    ${columns}
                  </tr>
              </table>
            </div> `;
    };


    // ------------------------------- Textarea -----------------------------

    const Textarea = function (options = {}) {
        return `<div class="content-box-same">
            <h2 class="content-box-head content-box-head-skin">${options.title}</h2>
            <textarea class="content-box-text content-box-text-skin" id="${setKey(options.title)}" rows="2" placeholder='${options.content}'></textarea>
            </div>`;
    };

    const TextareaSection = function (options = {}) {
        const section = options.map(Textarea); // (t) => Textarea(t)
        return section.join('');
    };


    // --------------------------- Technical Area Picker -------------------

    const DropdownSelector = function (options = {}) {
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


    const Component = function (options = {}) {
        const arr = options.map(el =>
            `<div class="content-box-fields">
            <fieldset class="content-box-evaluations content-box-evaluations-skin">
                ${DropdownSelector(el)}
            </fieldset>
        </div>`);
        return arr.join('');
    };


    const TechnicalAreaPicker = (options = []) =>
        `${Component(options)}`;


    // ----------------------- NewEvaluationPage -------------------------------------

    const NewEvaluationPage = function () {
        this.markup = '';
        interviewApp.data.newEvaluation.getTechnicalAreaData().then((data) => {
            this.markup =
            `
            ${interviewApp.common.view.NAV()}
            <form>
                ${CandidateDetailsForm()}
                <div class="content">
                    ${TechnicalLevelPicker(interviewApp.data.newEvaluation.getTechnicalLevelData())}
                    ${TextareaSection(interviewApp.data.newEvaluation.getTextareaData())}
                    ${TechnicalAreaPicker(data)}
                    <div class="submit-button submit-button-skin">
                        <input class="sub-button sub-button-skin" id="submit-button" type="submit" value="Submit">
                    </div>
                </div>
            </form>
            ${interviewApp.common.view.Footer()}
            `
            ;
        }
        ).catch((e) => {
            console.log('ERROR!!!', e);
        });
    };

    interviewApp.newEvaluation.view = {
        set: new NewEvaluationPage()
    };
}());

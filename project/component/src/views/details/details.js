(function () {
// ---------------- Candidate Details ------------------------------------------

    const DetailCandidateDetailsForm = function () {
        return `
    <div class="inputs inputs-skin">
        <input class="inputs-candidate inputs-candidate-skin" id="inputs-candidate" type="text" name="Candidate" value="Candidate">
        <input class="inputs-interviewer inputs-interviewer-skin" id="inputs-interviewer" type="text" name="Interviewer" value="Interviewer">
        <input class="inputs-date inputs-date-skin" id="inputs-date" type="date">
    </div>
    `;
    };

    // --------------- TechnicalLevelPicker --------------------------------

    const DetailTechnicalLevelPickerHeader = function (options = {}) {
        const headers = options.map(h =>
            `<th class="tbl-head tbl-head-skin">${h}</th>`);
        return headers.join('');
    };

    const DetailTechnicalLevelPickerColumn = function (options = {}) {
        const allColumns = options.map((cd) => {
            const columns = ['<td class="newevaluation-table">'];
            const columnsArr = cd.inputLevels.map(ip => `<input type="radio" id= "${ip}" name="level" value="${ip}">`);
            columns.push(columnsArr.join(''));
            columns.push('</td>');
            return columns.join('');
        });
        return allColumns.join('');
    };

    const DetailTechnicalLevelPicker = function (options = {}) {
        const title = `<caption class="content-box-tbl-tl content-box-tbl-tl-skin">${options.title}</caption>`;
        const headers = DetailTechnicalLevelPickerHeader(options.headers);
        const columns = DetailTechnicalLevelPickerColumn(options.columnData);

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


    // -------------------------------- Textarea -------------------------------------

    const DetailTextarea = function (options = {}) {
        return `<div class="content-box-same">
            <h2 class="content-box-head content-box-head-skin">${options.title}</h2>
            <textarea class="content-box-text content-box-text-skin" id="${setKey(options.title)}" rows="2" placeholder='${options.content}'></textarea>
            </div>`;
    };


    const DetailTextareaSection = function (options = {}) {
        const section = options.map(DetailTextarea); // (t) => Textarea(t)

        return section.join('');
    };


    // ----------------------- TechnicalAreaPicker ------------------------------------


    const DetailDropdownSelector = function (options = {}) {
        const arr = [`<legend class="field-title field-title-skin">${setKey(options.legends)}</legend>`];
        const dropDownOptions = options.options.map(e => `<option value="${e}">${e}</option>`).join('');
        const constant = options.items.map((el) => {
            const forNameId = setId(options.legends, el.label);
            return `
            <ul>
             <li>
                <label for="${forNameId}">${el.label}</label>
                <select name="${forNameId}" id="${forNameId}">
                ${dropDownOptions}
                </select> 
              </li>
            </ul>
   `;
        },
        );

        const selectOption = arr.push(constant.join(''));
        return arr.join('');
    };

    const DetailComponent = function (options = {}) {
        const arr = options.map(el =>
            `<div class="content-box-fields">
            <fieldset class="content-box-evaluations content-box-evaluations-skin">
                ${DetailDropdownSelector(el)}
            </fieldset>
        </div>`);
        return arr.join('');
    };

    const DetailTechnicalAreaPicker = (options = []) =>
        `${DetailComponent(options)}`;

    // ----------------------------- DetailsPage -----------------------------------

    const DetailsPage = function () {
        this.markup = '';
        interviewApp.data.newEvaluation.getTechnicalAreaData().then((data) => {
            this.markup = `
                ${interviewApp.common.view.NAV()}
                <form>
                    ${DetailCandidateDetailsForm()}
                    <div class="content">
                        ${DetailTechnicalLevelPicker(interviewApp.data.newEvaluation.getTechnicalLevelData())}
                        ${DetailTextareaSection(interviewApp.data.newEvaluation.getTextareaData())}
                        ${DetailTechnicalAreaPicker(data)}
                    </div>
                </form>
                ${interviewApp.common.view.Footer()}
            `;
        }).catch((e) => {
            console.log('ERROR!!!', e);
        });
    };

    interviewApp.details.view = {
        set: new DetailsPage()
    };
}());

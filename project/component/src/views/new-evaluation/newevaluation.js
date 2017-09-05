

const NewEvaluationPage = function () {
    this.markup = `
        ${NAV()}
        <form>
            ${CandidateDetailsForm()}
            <div class="content">
                ${TechnicalLevelPicker(getTechnicalLevelData())}
                ${TextareaSection(getTextareaData())}
                ${bla()}
                <div class="submit-button submit-button-skin">
                    <input class="sub-button sub-button-skin" id="submit-button" type="submit" value="Submit">
                </div>
            </div>
        </form>
        ${Footer()}
    `;
};

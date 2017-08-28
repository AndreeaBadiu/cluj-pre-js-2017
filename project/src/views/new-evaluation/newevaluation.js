const NewEvaluationPage = function () {
    return `
        ${NAV()}
        <form onSubmit="getFormData()">
            ${CandidateDetailsForm()}
            <div class="content">
                ${TechnicalLevelPicker(getTechnicalLevelData())}
                ${TextareaSection(getTextareaData())}
                ${TechnicalAreaPicker()}
                <div class="submit-button submit-button-skin">
                    <input class="sub-button sub-button-skin" type="submit" value="Submit">
                </div>
            </div>
        </form>
        ${Footer()}
    `;
};

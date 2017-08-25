const NewEvaluationPage = function () {
    return `
        ${NAV()}
        <form>
            ${CandidateDetailsForm()}
            <div class="content">
                ${TechnicalLevelPicker(getTechnicalLevelData())}
                ${TextareaSection(getTextareaData())}
                ${TechnicalAreaPicker()}
            </div>
        </form>
        ${Footer()}
    `;
};

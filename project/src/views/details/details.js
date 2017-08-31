const DetailsPage = function () {
    this.markup = `
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

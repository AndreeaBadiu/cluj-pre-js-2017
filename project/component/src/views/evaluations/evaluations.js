(function () {
    const EvaluationsTableHeader = function (options = {}) {
        const headings = options.headings.map(el => `<th class="evaluations-tbl-head evaluations-tbl-head-skin">${el}</th>`).join('');

        return `
      <tr>
          ${headings}
      </tr>
      `;
    };

    const EvaluationTableRow = function (options = {}, index) {
        return `
      <tr class="tbl-row">
          <td class="evaluation-table">${options.name}</td>
          <td class="evaluation-table">${options.technology}</td>
          <td class="evaluation-table">${options.level}</td>
          <td class="evaluation-table"><label>Detalii</label><button class="details btn" id ="${index}" data-name="${index}">+</button></td>
      </tr>
      `;
    };

    const EvaluationsTableBody = function (options = {}) {
        const rowsElements = options.items.map((rowObj, index) => EvaluationTableRow(rowObj, index));
        const rowsEl = rowsElements.join('');
        return rowsEl;
    };

    const EvaluationsTable = function (options = {}) {
        return `
    <div class="content-eval content-eval-skin" >
        <table class="evaluations-tbl evaluations-tbl-skin">
            ${EvaluationsTableHeader({
        headings: options.itemHeadings,
    })}
            ${EvaluationsTableBody({
        items: options.items,
    })}
        </table>
    </div>
    `;
    };

    const EvaluationsPage = function (options = {}) {
        this.markup = `
          ${interviewApp.common.view.NAV()}
          ${EvaluationsTable(
        {
            items: interviewApp.data.evaluations.getEvaluationsData().rows,
            itemHeadings: interviewApp.data.evaluations.getEvaluationsData().headings,
        })}
          ${interviewApp.common.view.Footer()}
           `;
    };

    interviewApp.evaluations.view = {
        set: new EvaluationsPage()
    };
}());

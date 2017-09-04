const EvaluationsTableHeader = function (options = {}) {
    const headings = options.headings.map(el => `<th class="evaluations-tbl-head evaluations-tbl-head-skin">${el}</th>`).join('');

    return `
      <tr>
          ${headings}
      </tr>
      `;
};

const EvaluationTableRow = function (options = {}) {
    return `
      <tr class="tbl-row">
          <td class="evaluation-table">${options.name}</td>
          <td class="evaluation-table">${options.technology}</td>
          <td class="evaluation-table">${options.level}</td>
          <td class="evaluation-table"><a class="details" id ="${setKey(options.name)}" data-name="${setKey(options.name)}">Detalii</a></td>
      </tr>
      `;
};

const EvaluationsTableBody = function (options = {}) {
    const rowsElements = options.items.map(rowObj => EvaluationTableRow(rowObj));
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
          ${NAV()}
          ${EvaluationsTable(
        {
            items: getEvaluationsData().rows,
            itemHeadings: getEvaluationsData().headings,
        })}
          ${Footer()}
           `;
};


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
      <tr>
          <td>${options.name}</td>
          <td>${options.technology}</td>
          <td>${options.level}</td>
          <td>Detalii</td>
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
    <div class="content content-skin" >
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
    return `
          ${NAV()}
          ${EvaluationsTable(
        {
            items: getEvaluationsData().rows,
            itemHeadings: getEvaluationsData().headings,
        })}
          ${Footer()}
           `;
};

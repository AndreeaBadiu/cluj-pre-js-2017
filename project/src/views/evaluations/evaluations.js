
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

    return `
          ${rowsEl}
      `;
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
    const rows = [
        {
            name: 'Adrian Popescu',
            technology: 'Javascript',
            level: 'mid2',
        },
        {
            name: 'Adrian Popescu2',
            technology: 'Javascript',
            level: 'mid2',
        },
        {
            name: 'Adrian Popescu3',
            technology: 'Javascript',
            level: 'mid2',
        },
        {
            name: 'Ioana Popescu',
            technology: 'Javascript',
            level: 'mid2',
        }];

    const headings = ['Nume', 'Tehnologie', 'Nivel', ''];
    return `
          ${NAV()}
          ${EvaluationsTable({
        items: rows,
        itemHeadings: headings,
    })}
          ${Footer()}
      `;
};

const EvaluationsPage = function(options = {}) {
    const rows = [
        {
            name: 'Adrian Popescu',
            technology: 'Javascript',
            level: 'mid2'
        },
        {
            name: 'Adrian Popescu2',
            technology: 'Javascript',
            level: 'mid2'
        },
        {
            name: 'Adrian Popescu3',
            technology: 'Javascript',
            level: 'mid2'
        },
        {
            name: 'Ioana Popescu',
            technology: 'Javascript',
            level: 'mid2'
    }];
    
    const headings = ['Nume','Tehnologie','Nivel',''];
    return `
        ${NAV()}
        ${EvaluationsTable({
            items: rows,
            itemHeadings: headings
        })}
        ${Footer()}
    `;
}

const EvaluationsTable = function(options = {}) {

    return `
    <div class="content content-skin" >
        <table class="evaluations-tbl evaluations-tbl-skin">
            ${EvaluationsTableHeader({
               headings: options.itemHeadings
            })}
            ${EvaluationsTableBody({
                items: options.items
            })}
        </table>
    </div>
    `;
}

const EvaluationsTableHeader = function(options = {}) {    
    const headings = [];
    options.headings.forEach(function(el) {
        const generateEl = `<th class="evaluations-tbl-head evaluations-tbl-head-skin">${el}</th>`;
        headings.push(generateEl);
    })
    const headingsEl = `${headings.join('')}`;
;
    return `
    <tr>
        ${headingsEl}
    </tr>
    `;
}

const EvaluationTableRow = function(options = {}) {
    return `
    <tr>
        <td>${options.name}</td>
        <td>${options.technology}</td>
        <td>${options.level}</td>
        <td>Detalii</td>
    </tr>
    `;
}
const EvaluationsTableBody = function(options={}) {
    const rowsElements = options.items.map(function(rowObj) {
        return EvaluationTableRow(rowObj);
    });
    const rowsEl = rowsElements.join('');

    return `
        ${rowsEl}
    `;
}

window.onload = function() {
    const divEl = document.querySelector('#app');
    divEl.innerHTML = EvaluationsPage();
}
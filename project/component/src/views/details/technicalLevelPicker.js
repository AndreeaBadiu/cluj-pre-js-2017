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
    const headers = TechnicalLevelPickerHeader(options.headers);
    const columns = TechnicalLevelPickerColumn(options.columnData);

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

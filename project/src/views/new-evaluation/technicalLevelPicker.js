const TechnicalLevelPickerHeader = function (options = {}) {
    const headers = options.map(h => `<th class="tbl-head tbl-head-skin">${h}</th>`);
    // const concatHeaders = headers.join("");
    return headers.join('');
};

const TechnicalLevelPickerColumn = function (options = {}) {
    const allColumns = options.map((cd) => {
        const columns = ['<td>'];
        const columnsArr = cd.inputLevels.map(ip => `<input type="radio" id= "${ip}" name="level">`);
        columns.push(columnsArr.join(''));
        columns.push('</td>');
        return columns.join('');
    });
    return allColumns.join('');
};

const TechnicalLevelPicker = function (options = {}) {
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

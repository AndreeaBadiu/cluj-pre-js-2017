const EvaluationsPage = function() {
    return `
        ${NAV()}
        ${EvaluationsTable()}
        ${Footer()}
    `;
}

const EvaluationsTable = function() {
    return `
    <div class="content content-skin" >
    <table class="evaluations-tbl evaluations-tbl-skin">
        <tr>
          <th class="evaluations-tbl-head evaluations-tbl-head-skin">Nume</th>
          <th class="evaluations-tbl-head evaluations-tbl-head-skin">Tehnologie</th>
          <th class="evaluations-tbl-head evaluations-tbl-head-skin">Nivel</th>
          <th class="evaluations-tbl-head evaluations-tbl-head-skin"></th>
        </tr>

        <tr>
          <td>Popescu Adrian</td>
          <td>Javascript</td>
          <td>Mid 2</td>
          <td>Detalii</td>
        </tr>

        <tr>
          <td>Dragan Roxana</td>
          <td>PHP</td>
          <td>Mid 1</td>
          <td>Detalii</td>
        </tr>

        <tr>
          <td>Florescu Mihai</td>
          <td>Javascript</td>
          <td>Junior 3</td>
          <td>Detalii</td>
        </tr>

        <tr>
          <td>Gheorghe Andrei</td>
          <td>Ruby</td>
          <td>Senior 1</td>
          <td>Detalii</td>
        </tr>
    </table>
  </div>
    `;
}

const Footer = function() {
    return`
    <div class="page-footer page-footer-skin">
        <footer>
         <br><p class="page-footer-text">Copyright@Softvision 2017</p>
        </footer>
    </div>
    `;
}


window.onload = function() {
    const divEl = document.querySelector('#app');
    divEl.innerHTML = EvaluationsPage();
    console.log('loaded');
}
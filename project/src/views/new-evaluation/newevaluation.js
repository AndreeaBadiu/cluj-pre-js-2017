const NewEvaluationPage = function() {
  const items = {
    title: 'Technical Level',
    headers: ['Trainee', 'Junior','Middle','Senior'],
    columnData: [ 
      {
        inputLevels: ['t']
      },
      {
        inputLevels: ['jun1', 'jun2', 'jun3']
      },
      {
        inputLevels: ['mid1', 'mid2', 'mid3']
      },
      {
        inputLevels: ['sen1', 'sen2', 'sen3']
      }
  ]
  }
  
  const textareas= [
    {
      title: 'Should the candidate be hired?',
      content: 'The type of project that is suitable for the candidate Is guidance required for the candidate'
    },
    {
      title: 'General Impressions',
      content: '*required'
    },
    {
      title: 'Workflow, Leadership &amp; Soft Skills',
      content: 'Describe the environment in which the candidate works. Describe any guidance or management experience'
    },
];
  
  return `
        ${NAV()}
        <form action="/action_page.php" method="get">
            ${CandidateDetailsForm()}
            <div class="content">
                ${TechnicalLevelPicker(items)}
                ${TextareaSection(textareas)}
                ${TechnicalAreaPicker()}
            </div>
        </form>
        ${Footer()}
    `;
}


//------------------------------------------Function onLoad()-------------------------------


window.onload = function() {
    const divEl = document.querySelector('#app');
    divEl.innerHTML = NewEvaluationPage();
}


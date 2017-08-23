const NewEvaluationPage = function() {
    return `
        ${NAV()}
        <form action="/action_page.php" method="get">
            ${CandidateDetailsForm()}
            <div class="content">
                ${TechnicalLevelPicker()}
                ${Textarea()}
                ${TechnicalAreaPicker()}
            </div>
        </form>
        ${Footer()}
    `;
}

const CandidateDetailsForm = function() {
    return `
    <div class="inputs inputs-skin">
        <input class="inputs-candidate inputs-candidate-skin" type="text" name="Candidate" value="Candidate">
        <input class="inputs-interviewer inputs-interviewer-skin" type="text" name="Interviewer" value="Interviewer">
        <input class="inputs-date inputs-date-skin" type="date">
    </div>
    
    `;
}

const TechnicalLevelPicker = function() {
    return `
        <div class="content-box">
            <table class="content-box-tbl content-box-tbl-skin">
            <caption class="content-box-tbl-tl content-box-tbl-tl-skin">Technical Level</caption>
            <tr>
                <th class="tbl-head tbl-head-skin">Trainee</th>
                <th class="tbl-head tbl-head-skin">Junior</th>
                <th class="tbl-head tbl-head-skin">Middle</th>
                <th class="tbl-head tbl-head-skin">Senior</th>
            </tr>
            <tr class="second-half-of-table second-half-of-table-skin">
                <td><input type="radio"></td>
                <td><input type="radio"><input type="radio"><input type="radio"></td>
                <td><input type="radio"><input type="radio"><input type="radio"></td>
                <td><input type="radio"><input type="radio"><input type="radio"></td>
            </tr>
            </table>
        </div>
    `;
}

const Textarea = function() {
    return `
    <div class="content-box-same">
        <h2 class="content-box-head content-box-head-skin">Should the candidate be hired?</h2>
        <textarea class="content-box-text content-box-text-skin" rows="2">The type of project that is suitable for the candidate Is guidance required for the candidate</textarea>
    </div>

    <div class="content-box-same">
        <h2 class="content-box-head content-box-head-skin">General Impression</h2>
        <textarea class="content-box-text content-box-text-skin" required>*required</textarea>
    </div>

    <div class="content-box-same">
        <h2 class="content-box-head content-box-head-skin">Workflow, Leadership &amp; Soft Skills</h2>
        <textarea class="content-box-text content-box-text-skin" rows="2">Describe the environment in which the candidate works.
        Describe any guidance or management experience</textarea>
    </div>
    `;
}

const DropdownSelector = function(options = {}) {

  const dropDownOptions = [];
  let val = 0;


  options.options.forEach(function(el) {
    const generatedEl = `<option value="${val}">${el}</option>`;
    val ++;
    dropDownOptions.push(generatedEl);
  });

  const dropdownEl = dropDownOptions.join('');

  const aux = options.label.split(' ').join('_');
  return `
    <li>
      <label class="firstLi" for="${aux}">${options.label}</label>
      <select name="classEvalOptions" id="${options.label}">
      ${dropdownEl}
      </select> 
    </li>`;
}

const TechnicalAreaPicker = function(options = {}) {
    return `
  
    <div class="content-box-fields">
    <fieldset class="content-box-evaluations content-box-evaluations-skin">
      <legend class="field-title field-title-skin">OOP, Design Patterns</legend>
        <ul>
            ${DropdownSelector({
            label: 'Classes',
            options: ["0","1","2","3"]
          })}

            ${DropdownSelector({
            label: 'Exception Handling',
            options: ["0","1","2","3"]
          })}

           ${DropdownSelector({
            label: 'Version Control',
            options: ["0","1","2","3"]
          })}

            ${DropdownSelector({
            label: 'Access Modifiers',
            options: ["0","1","2","3"]
          })}

            ${DropdownSelector({
            label: 'Design patterns',
            options: ["0","1","2","3"]
          })}

            ${DropdownSelector({
            label: 'Issue Tracking',
            options: ["0","1","2","3"]
          })}

            ${DropdownSelector({
            label: 'Polymorphism',
            options: ["0","1","2","3"]
          })}

            ${DropdownSelector({
            label: 'RegEx',
            options: ["0","1","2","3"]
          })}
        </ul>
    </fieldset>
  </div>

  <div class="content-box-fields">
    <fieldset class="content-box-evaluations content-box-evaluations-skin">
      <legend class="field-title field-title-skin">HTTP</legend>
        <ul>
          ${DropdownSelector({
            label: 'Protocol',
            options: ["0","1","2","3"]
          })}


          ${DropdownSelector({
            label: 'Response Codes',
            options: ["0","1","2","3"]
          })}


          ${DropdownSelector({
            label: 'Rest',
            options: ["0","1","2","3"]
          })}


          ${DropdownSelector({
            label: 'Headers',
            options: ["0","1","2","3"]
          })}


          ${DropdownSelector({
            label: 'Request Methods',
            options: ["0","1","2","3"]
          })}


          ${DropdownSelector({
            label: 'Sessions & Cookies',
            options: ["0","1","2","3"]
          })}


        </ul>
    </fieldset>
  </div>

  <div class="content-box-fields">
    <fieldset class="content-box-evaluations content-box-evaluations-skin">
      <legend class="field-title field-title-skin">HTML</legend>
        <ul>
          ${DropdownSelector({
            label: 'Doctype',
            options: ["0","1","2","3"]
          })}


          ${DropdownSelector({
            label: 'Tags',
            options: ["0","1","2","3"]
          })}


          ${DropdownSelector({
            label: 'Basic SEO',
            options: ["0","1","2","3"]
          })}


          ${DropdownSelector({
            label: 'Syntax Rules',
            options: ["0","1","2","3"]
          })}


          ${DropdownSelector({
            label: 'Attributes',
            options: ["0","1","2","3"]
          })}

        </ul>
    </fieldset>
  </div>


  <div class="content-box-fields">
    <fieldset class="content-box-evaluations content-box-evaluations-skin">
      <legend class="field-title field-title-skin">CSS</legend>
        <ul>
          ${DropdownSelector({
            label: 'Usage',
            options: ["0","1","2","3"]
          })}


          ${DropdownSelector({
            label: 'Box modelling',
            options: ["0","1","2","3"]
          })}


          ${DropdownSelector({
            label: 'CSS 3.0',
            options: ["0","1","2","3"]
          })}


          ${DropdownSelector({
            label: 'Selectors',
            options: ["0","1","2","3"]
          })}


          ${DropdownSelector({
            label: 'Styling',
            options: ["0","1","2","3"]
          })}


          ${DropdownSelector({
            label: 'Dynamic Stylesheets',
            options: ["0","1","2","3"]
          })}

        </ul>
    </fieldset>
  </div>


  <div class="content-box">
    <fieldset class="JS content-box-evaluations content-box-evaluations-skin">
      <legend class="field-title field-title-skin">Javascript</legend>
        <ul>
          ${DropdownSelector({
            label: 'Data types & Variables',
            options: ["0","1","2","3"]
          })}


          ${DropdownSelector({
            label: 'Object Manipulation',
            options: ["0","1","2","3"]
          })}


          ${DropdownSelector({
            label: 'DOM Manipulation',
            options: ["0","1","2","3"]
          })}


          ${DropdownSelector({
            label: 'Functions',
            options: ["0","1","2","3"]
          })}


          ${DropdownSelector({
            label: 'Templating',
            options: ["0","1","2","3"]
          })}


          ${DropdownSelector({
            label: 'Event handling',
            options: ["0","1","2","3"]
          })}


          ${DropdownSelector({
            label: 'Prototype & OOP',
            options: ["0","1","2","3"]
          })}


          ${DropdownSelector({
            label: 'Testing (unit E2E)',
            options: ["0","1","2","3"]
          })}


          ${DropdownSelector({
            label: 'AJAX',
            options: ["0","1","2","3"]
          })}


          ${DropdownSelector({
            label: 'Debugging',
            options: ["0","1","2","3"]
          })}



        ${DropdownSelector({
          label: 'Websockets',
          options: ["0","1","2","3"]
        })}

        ${DropdownSelector({
          label: 'Tooling',
          options: ["0","1","2","3"]
        })}

        ${DropdownSelector({
          label: 'Libraries',
          options: ["0","1","2","3"]
        })}

        ${DropdownSelector({
          label: 'Promises',
          options: ["0","1","2","3"]
        })}

        ${DropdownSelector({
          label: 'Browser Engines',
          options: ["0","1","2","3"]
        })}


        ${DropdownSelector({
          label: 'Frameworks',
          options: ["0","1","2","3"]
        })}

        </ul>
    </fieldset>
  </div>

  <div class="content-box-fields">
    <fieldset class="content-box-evaluations content-box-evaluations-skin">
      <legend class="field-title field-title-skin">NodeJS</legend>
        <ul>
        ${DropdownSelector({
          label: 'Backend frameworks',
          options: ["0","1","2","3"]
        })}


          ${DropdownSelector({
            label: 'Templating',
            options: ["0","1","2","3"]
          })}


          ${DropdownSelector({
            label: 'DOM Manipulation',
            options: ["0","1","2","3"]
          })}


          ${DropdownSelector({
            label: 'Unit Testing',
            options: ["0","1","2","3"]
          })}


        </ul>
    </fieldset>
  </div>

  <div class="submit-button submit-button-skin">
    <input class="sub-button sub-button-skin" type="submit" value="Submit">
  </div>
    `;
}


window.onload = function() {
    const divEl = document.querySelector('#app');
    divEl.innerHTML = NewEvaluationPage();
}


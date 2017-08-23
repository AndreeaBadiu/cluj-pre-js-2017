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

const TechnicalAreaPicker = function() {
    return `
    <div class="content-box-fields">
    <fieldset class="content-box-evaluations content-box-evaluations-skin">
      <legend class="field-title field-title-skin">OOP, Design Patterns</legend>
        <ul>
          <li><label class="firstLi" for="classes">Classes</label>
            <select name="classEvalOptions" id="classes">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label for="exceptionhandling">Exception handling</label>
            <select name="exceptionEvalOptions" id="exceptionhandling">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label for="versioncontrol">Version Control</label>
            <select name="versionControlEvalOptions" id="versioncontrol">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label class="firstLi" for="accessmodifiers">Access modifiers</label>
            <select name="accessModifiersEvalOptions" id="accessmodifiers" class="firstSel">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label for="designpatterns">Design patterns</label>
            <select name="designPatternsEvalOptions" id="designpatterns">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label for="issuetracking">Issue Tracking</label>
            <select name="issueTrackingEvalOptions" id="issuetracking">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label class="firstLi" for="polymorphism">Polymorphism</label>
              <select name="polymorphismEvalOptions" class="firstSel" id="polymorphism">
                <option value="Evaluation" selected disabled>Evaluation</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
          </li>

          <li><label for="regex">RegEx</label>
            <select name="regExEvalOptions" id="regex">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>
        </ul>
    </fieldset>
  </div>

  <div class="content-box-fields">
    <fieldset class="content-box-evaluations content-box-evaluations-skin">
      <legend class="field-title field-title-skin">HTTP</legend>
        <ul>
          <li><label class="firstLi" for="protocol">Protocol</label>
            <select name="protocolEvalOptions"  id="protocol" class="firstSel">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label for="responsivecodes">Response codes</label>
            <select name="responseCodesEvalOptions" id="responsivecodes">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label for="rest">REST</label>
            <select name="RESTEvalOptions" id="rest">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label class="firstLi" for="headers">Headers</label>
            <select name="headersEvalOptions" class="firstSel" id="headers">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label for="requestmethods">Request methods</label>
            <select name="requestMethodsEvalOptions" id="requestmethods">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label for="sessionscookies">Sessions &amp; Cookies</label>
            <select name="sessionsCookiesEvalOptions" id="sessionscookies">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

        </ul>
    </fieldset>
  </div>

  <div class="content-box-fields">
    <fieldset class="content-box-evaluations content-box-evaluations-skin">
      <legend class="field-title field-title-skin">HTML</legend>
        <ul>
          <li><label class="firstLi" for="doctype">Doctype</label>
            <select name="doctypeEvalOptions" class="firstSel" id="doctype">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label for="tags">Tags</label>
            <select name="tagsEvalOptions" id="tags">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label for="basicseo">Basic SEO</label>
            <select name="basicSEOEvalOptions" id="basicseo">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label class="firstLi" for="syntaxrules">Syntax Rules</label>
            <select name="syntaxRulesEvalOptions" id="syntaxrules" class="firstSel">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label for="attributes">Attributes</label>
            <select name="attributesEvalOptions" id="attributes">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>
        </ul>
    </fieldset>
  </div>


  <div class="content-box-fields">
    <fieldset class="content-box-evaluations content-box-evaluations-skin">
      <legend class="field-title field-title-skin">CSS</legend>
        <ul>
          <li><label class="firstLi" for="usage">Usage</label>
            <select name="usageEvalOptions" id="usage" class="firstSel">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label for="boxmodelling">Box modeling</label>
            <select name="boxModellingEvalOptions" id="boxmodelling">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label for="css3">CSS 3.0</label>
            <select name="cssEvalOptions" id="css3">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label class="firstLi" for="selectors">Selectors</label>
            <select name="selectorsEvalOptions" id="selectors" class="firstSel">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label for="styling">Styling</label>
            <select name="stylingEvalOptions" id="styling">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label for="dynamicstylesheets">Dynamic Stylesheets</label>
            <select name="dinamicStylesheetsEvalOptions"  id="dynamicstylesheets">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>
        </ul>
    </fieldset>
  </div>


  <div class="content-box">
    <fieldset class="JS content-box-evaluations content-box-evaluations-skin">
      <legend class="field-title field-title-skin">Javascript</legend>
        <ul>
          <li><label class="firstLi" for="datatypesvariables">Data types &amp; Variables</label>
            <select name="dataTypesVariablesEvalOptions" id="datatypesvariables" class="firstSel">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label for="objectmanipulation">Object Manipulation</label>
            <select name="objectManipulationEvalOptions" id="objectmanipulation">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label for="domMan">DOM Manipulation</label>
            <select name="DOMEvalOptions" id="domMan">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label class="firstLi" for="functions">Functions</label>
            <select name="functionsEvalOptions" class="firstSel" id="functions">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label for="templating">Templating</label>
            <select name="templatingEvalOptions" id="templating">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label for="eventhandling">Event Handling</label>
            <select name="eventHandlingEvalOptions" id="eventhandling">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label class="firstLi" for="prototypeoop">Prototype &amp; OOP</label>
              <select name="prototypeOOPEvalOptions" class="firstSel" id="prototypeoop">
                <option value="Evaluation" selected disabled>Evaluation</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
          </li>

          <li><label for="testing">Testing (unit, E2E)</label>
            <select name="testingEvalOptions" id="testing">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label for="ajax">AJAX</label>
            <select name="ajaxEvalOptions" id="ajax">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label for="debugging">Debugging</label>
            <select name="debuggingEvalOptions" id="debugging">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>


        <li><label for="websockets">Websockets</label>
          <select name="websocketsEvalOptions" id="websockets">
            <option value="Evaluation" selected disabled>Evaluation</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </li>

        <li><label for="tooling">Tooling</label>
          <select name="toolingEvalOptions" id="tooling">
            <option value="Evaluation" selected disabled>Evaluation</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </li>

        <li><label for="libraries">Libraries</label>
          <select name="librariesEvalOptions" id="libraries">
            <option value="Evaluation" selected disabled>Evaluation</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </li>

        <li><label for="promises">Promises</label>
          <select name="promisesEvalOptions" id="promises">
            <option value="Evaluation" selected disabled>Evaluation</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </li>

        <li><label for="browserengines">Browser Engines</label>
          <select name="browserEnginesEvalOptions" id="browserengines">
            <option value="Evaluation" selected disabled>Evaluation</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </li>


        <li><label for="frameworks">Frameworks</label>
          <select name="frameworksEvalOptions" id="frameworks">
            <option value="Evaluation" selected disabled>Evaluation</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </li>

        </ul>
    </fieldset>
  </div>

  <div class="content-box-fields">
    <fieldset class="content-box-evaluations content-box-evaluations-skin">
      <legend class="field-title field-title-skin">NodeJS</legend>
        <ul>
          <li><label class="firstLi" for="backendframeworks">Backend frameworks</label>
            <select name="backendFrameworksEvalOptions" id="backendframeworks" class="firstSel">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label for="templatingOption">Templating</label>
            <select name="templatingEvalOptions" id="templatingOption">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label for="dommanipulation">DOM Manipulation</label>
            <select name="DOMmanipulationEvalOptions" id="dommanipulation">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

          <li><label class="firstLi" for="unittesting">Unit Testing</label>
            <select name="unitTestingEvalOptions" id="unittesting" class="firstSel">
              <option value="Evaluation" selected disabled>Evaluation</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>

        </ul>
    </fieldset>
  </div>

  <div class="submit-button submit-button-skin">
    <input class="sub-button sub-button-skin" type="submit" value="Submit">
  </div>
    `;
}

const Footer = function() {
    return `
    <div class="footer-section footer-section-skin">
    <footer>
      <br><p class="footer-section-text">Copyright@Softvision 2017</p>
    </footer>
    </div>
    `;
}

window.onload = function() {
    const divEl = document.querySelector('#app');
    divEl.innerHTML = NewEvaluationPage();
    console.log('loaded');
}




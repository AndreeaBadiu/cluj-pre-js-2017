const goToNewEvaluationPage = function () {
    const divEl = document.querySelector('#app');
    divEl.innerHTML = NewEvaluationPage();
    setEvents('.evaluations', goToEvaluationsPage);
    setEvents('.logout', logout);
};

/* ------------------ candidateDetailForm ------------------------ */

const getCandidateDetailData = function () {
    const inputData = {
        candidate: document.querySelector('.inputs-candidate').value,
        interviewer: document.querySelector('.inputs-interviewer').value,
        date: document.querySelector('.inputs-date').value,
    };

    return inputData;
};

/* ---------------------- technicalLevelPicker --------------------- */

const getTechnicalLvData = function () {
    return document.querySelector('input[name="level"]:checked').value;
};
/* ------------------------- Textarea ----------------------------- */

const getTextarea = function () {
    const textarea = getTextareaData().map((el) => {
        const key = setKey(el.title);
        const textareaObj = {};
        textareaObj[key] = document.getElementById(setKey(el.title)).value;
        return textareaObj;
    });

    return textarea;

    /* const textarea = {
        hired: document.querySelector('.Should').value,
        generalImpressions: document.querySelector('.General').value,
        workflow: document.querySelector('.Workflow').value
    }; */
};

/* ------------------------- technicalAreaPicker --------------------- */

const getSelectedOption = function (id) {
    const e = document.getElementById(`${id}`);
    return e.options[e.selectedIndex].value;
};

const getTechnicalData = function () {
    const fieldsetData = {
        oopDesignPatterns: {
            classes: getSelectedOption('Classes_OOP'),
            exception_handling: getSelectedOption('Exception_OOP'),
            version_control: getSelectedOption('Version_OOP'),
            access_modifiers: getSelectedOption('Access_OOP'),
            design_patterns: getSelectedOption('Design_OOP'),
            issue_tracking: getSelectedOption('Issue_OOP'),
            polymorphism: getSelectedOption('Polymorphism_OOP'),
            regEx: getSelectedOption('RegEx_OOP')
        },
        http: {
            protocol: getSelectedOption('Protocol_HTTP'),
            response_codes: getSelectedOption('Response_HTTP'),
            rest: getSelectedOption('Rest_HTTP'),
            headers: getSelectedOption('Headers_HTTP'),
            request_methods: getSelectedOption('Request_HTTP'),
            sessions_cookies: getSelectedOption('Sessions_HTTP'),
        },
        html: {
            doctype: getSelectedOption('Doctype_HTML'),
            tags: getSelectedOption('Tags_HTML'),
            basic_seo: getSelectedOption('Basic_HTML'),
            syntax_rules: getSelectedOption('Syntax_HTML'),
            attributes: getSelectedOption('Attributes_HTML')
        },
        css: {
            usage: getSelectedOption('Usage_CSS'),
            box_modelling: getSelectedOption('Box_CSS'),
            css: getSelectedOption('CSS_CSS'),
            styling: getSelectedOption('Styling_CSS'),
            dynamic_stylesheets: getSelectedOption('Dynamic_CSS')
        },
        javascript: {
            data_types_variables: getSelectedOption('Data_JAVASCRIPT'),
            object_manipulation: getSelectedOption('Object_JAVASCRIPT'),
            dom_manipulation: getSelectedOption('DOM_JAVASCRIPT'),
            functions: getSelectedOption('Functions_JAVASCRIPT'),
            templating: getSelectedOption('Templating_JAVASCRIPT'),
            event_handling: getSelectedOption('Event_JAVASCRIPT'),
            prototype_oop: getSelectedOption('Prototype_JAVASCRIPT'),
            testing: getSelectedOption('Testing_JAVASCRIPT'),
            ajax: getSelectedOption('AJAX_JAVASCRIPT'),
            debugging: getSelectedOption('Debugging_JAVASCRIPT'),
            websockets: getSelectedOption('Websockets_JAVASCRIPT'),
            tooling: getSelectedOption('Tooling_JAVASCRIPT'),
            libraries: getSelectedOption('Libraries_JAVASCRIPT'),
            promises: getSelectedOption('Promises_JAVASCRIPT'),
            browser_engines: getSelectedOption('Browser_JAVASCRIPT'),
            frameworks: getSelectedOption('Frameworks_JAVASCRIPT')
        },
        nodejs: {
            backend_frameworks: getSelectedOption('Backend_NODEJS'),
            templating: getSelectedOption('Templating_NODEJS'),
            dom_manipulation: getSelectedOption('DOM_NODEJS'),
            unit_testing: getSelectedOption('Unit_NODEJS')
        }
    };

    return fieldsetData;
};

const getFormData = function () {
    const formData = {
        candidateFormData: getCandidateDetailData(),
        technicalLvData: getTechnicalLvData(),
        textareaInfo: getTextarea(),
        technicalAreaData: getTechnicalData()
    };
    console.log(formData);
    return formData;
};


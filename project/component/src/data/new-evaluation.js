const getTechnicalLevelData = function () {
    return {
        title: 'Technical Level',
        headers: ['Trainee', 'Junior', 'Middle', 'Senior'],
        columnData: [
            {
                inputLevels: ['t'],
            },
            {
                inputLevels: ['jun1', 'jun2', 'jun3'],
            },
            {
                inputLevels: ['mid1', 'mid2', 'mid3'],
            },
            {
                inputLevels: ['sen1', 'sen2', 'sen3'],
            },
        ],
    };
};

const getTextareaData = function () {
    return [
        {
            title: 'Should the candidate be hired?',
            content: 'The type of project that is suitable for the candidate Is guidance required for the candidate'
        },
        {
            title: 'General Impressions',
            content: '*required'
        },
        {
            title: 'Workflow, Leadership & Soft Skills',
            content: 'Describe the environment in which the candidate works. Describe any guidance or management experience'
        }
    ];
};

const getTechnicalAreaData = function (result) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/new-evaluation.json');
    xhr.send();
    xhr.onreadystatechange = (event) => {
        if (xhr.readyState === 4) {
            // return JSON.parse(xhr.responseText).fieldsets;
            result(xhr.responseText);
        }
        return 0;
    };
};
/* return [
        {
            items: [
                {
                    label: 'Classes',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Exception Handling',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Version Control',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Access Modifiers',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Design patterns',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Issue Tracking',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Polymorphism',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'RegEx',
                    options: ['0', '1', '2', '3'],
                }],
            legends: 'OOP, Design Patterns',
        },

        {
            items: [
                {
                    label: 'Protocol',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Response Codes',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Rest',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Headers',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Request Methods',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Sessions & Cookies',
                    options: ['0', '1', '2', '3'],
                },
            ],
            legends: 'HTTP',
        },
        {
            items: [
                {
                    label: 'Doctype',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Tags',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Basic SEO',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Syntax Rules',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Attributes',
                    options: ['0', '1', '2', '3'],
                },
            ],

            legends: 'HTML',
        },
        {
            items: [
                {
                    label: 'Usage',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Box modelling',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'CSS 3.0',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Selectors',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Styling',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Dynamic Stylesheets',
                    options: ['0', '1', '2', '3'],
                }],
            legends: 'CSS',
        },
        {
            items: [
                {
                    label: 'Data types & Variables',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Object Manipulation',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'DOM Manipulation',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Functions',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Templating',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Event handling',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Prototype & OOP',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Testing (unit E2E)',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'AJAX',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Debugging',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Websockets',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Tooling',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Libraries',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Promises',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Browser Engines',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Frameworks',
                    options: ['0', '1', '2', '3'],
                }],

            legends: 'Javascript',
        },

        {
            items: [
                {
                    label: 'Backend frameworks',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Templating',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'DOM Manipulation',
                    options: ['0', '1', '2', '3'],
                },
                {
                    label: 'Unit Testing',
                    options: ['0', '1', '2', '3'],
                }],
            legends: 'NodeJS',
        },


    ]
    ; */

const ComponentConstructor = function (options) {
    if (options.login) {
        return {
            view: new LoginPage(),
            initEvents: new LoginEvents()
        };
    } else
    if (options.evaluations) {
        return {
            view: new EvaluationsPage(),
            initEvents: new EvaluationsEvents()
        };
    } else
    if (options.details.pageDisplay) {
        return {
            view: new DetailsPage(),
            initEvents: new DetailsEvents(options)
        };
    }
    return {
        view: new NewEvaluationPage(),
        initEvents: new NewEvaluationEvents()
    };
};

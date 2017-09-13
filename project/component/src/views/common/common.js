(function () {
    interviewApp.common = {};

    interviewApp.common.view = {
        NAV: () => `
        <div class= "navigation-bar navigation-bar-skin">
        <nav>
            <img class="navigation-bar-svlogo" src="component/images/logo.png" alt="Softvision Logo">
            <a  href="#evaluations" class="navigation-bar-active evaluations" id="evaluations">Evaluations</a>
            <a href="#newEval" class="new-evaluation" id="new-evaluation">New Evaluation</a>
            <a class="navigation-bar-logout" id="logout">Logout</a>
        </nav>
        </div>
        `,
        Footer: () => `
                <div class="page-footer page-footer-skin">
                    <footer>
                    <br><p class="page-footer-text">Copyright@Softvision 2017</p>
                    </footer>
                </div>
                    `
    };
}());

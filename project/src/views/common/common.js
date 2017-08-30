

const NAV = function (options = {}) {
    return `
        <div class= "navigation-bar navigation-bar-skin">
        <nav>
            <img class="navigation-bar-svlogo" src="assets/images/logo.png" alt="Softvision Logo">
            <a  class="navigation-bar-active evaluations">Evaluations</a>
            <a class="new-evaluation">New Evaluation</a>
            <a class="navigation-bar-logout" id="logout">Logout</a>
        </nav>
        </div>
    `;
};

const Footer = function () {
    return `
    <div class="page-footer page-footer-skin">
        <footer>
         <br><p class="page-footer-text">Copyright@Softvision 2017</p>
        </footer>
    </div>
    `;
};

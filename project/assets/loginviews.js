const LoginForm = function (options) {
    return `
    <div class="grid login-form">
    
                    <div class="col-3 login-form-background-image">
                        <img src="assets/images/feedback-banner.jpg" alt="Feedback Image">
                    </div>
    
                    <div class="col-1 login-form-box login-form-box-skin">
                        <div class="login-form-box-header login-form-box-header-skin">
                            <h3>Interview Feedback</h3>
                        </div>
    
                        <div class="login-form-box-content">
                            <form action="/action_page.php">
                                <input class="field" type="text" name="username" placeholder="Username">
                                <input class="field" type="password" name="password" placeholder="Password">
                                <input class="button button-skin" type="submit" value="Login">
                            </form>
                        </div>
                    </div>
    
                </div>
    `;
}

const LoginHeader = function() {
    return `
    <header>
    ${LoginForm()}
    </header>
    `;
}

const SubmitFeedbackSection = function() {
    return `
    <div class="grid login-section1 login-section1-skin">
    <div class="col-1">
        <img width="400" src="assets/images/new%20feedback.jpg" alt="Feedback Image">
    </div>

    <article class="login-section-text col-1">
        <h2>Submit new feedback</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra
    nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus,
    tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque
    nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in
    tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis
    sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit
    amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque
    arcu mauris, malesuada quis ornare accumsan, blandit sed diam. </p>
    </article>
    </div>
    `;

}

const SubmitFeedbackResults = function() {
    return `
    <div class="grid login-section2 login-section2-skin">
    <article class="login-section-text col-1">
        <h2>View feedback results</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra
            nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus,
            tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque
            nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in
            tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis
            sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit
            amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque
            arcu mauris, malesuada quis ornare accumsan, blandit sed diam. </p>
    </article>

    <div class="col-1">
        <img width="400" src="assets/images/results.jpg" alt="Feedback Image">
    </div>
</div>
    `;
}

const Footer = function() {
    return `    
	<div class="grid login-footer login-footer-skin">
        <footer>
              <p class="login-footer-text col-1">Copyright@Softvision 2017</p>
        </footer>
    </div>
    `;
}

const LoginPage = function() {
    return `
    ${LoginHeader()}
    ${SubmitFeedbackSection()}
    ${SubmitFeedbackResults()}
    ${Footer()}
    `;

}
window.onload = function() {
    const divEl = document.querySelector('#app');
    divEl.innerHTML = LoginPage();
    console.log('loaded');
}


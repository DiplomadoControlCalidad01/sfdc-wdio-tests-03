const commonActions = require('../core/CommonActions');
const {url} = require('../../environment');

class Login {
    setUsername(value) {
        commonActions.setValue('#username', value);
    }
    setPassword(value) {
        commonActions.setValue('#password', value);
    }
    clickOnLogin() {
        commonActions.click('#Login');
    }

    static loginAs(username, password) {
        browser.url(url);
        
        commonActions.waitForVisible('#theloginform');
        
        let login = new Login();
        login.setUsername(username);
        login.setPassword(password);
        login.clickOnLogin();
    }

}

module.exports = Login;
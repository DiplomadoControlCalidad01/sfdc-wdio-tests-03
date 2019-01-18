var assert = require('assert');
const credentials = require('../../environment').credentials;

describe('Login to salesforce', () => {
    it('Login', () => {
        browser.url('https://login.salesforce.com');

        browser.waitForVisible('#theloginform', 30000);

        browser.element('#username').setValue(credentials.sysadmin.username);
        browser.element('#password').setValue(credentials.sysadmin.password);
        browser.element('#Login').click();

        browser.waitForVisible('#userNav', 30000);
        browser.element('#userNav').click();

        // menu button

        browser.waitForVisible('.menuButtonMenuLink*=Setup', 30000);
        browser.element('.menuButtonMenuLink*=Setup').click();

        // click create image
        browser.waitForVisible('img[title="Expand - Create - Level 1"]', 30000);
        browser.element('img[title="Expand - Create - Level 1"]').click();

        
        browser.waitForVisible('#CustomObjects_font', 30000);
        browser.element('#CustomObjects_font').click();

        browser.pause(30000);
    });
});

var assert = require('assert');
const credentials = require('../../environment').credentials;

const commonActions = require('../core/CommonActions');
const login = require('../pages/Login.po');
const navigation = require('../pages/Navigation.po');
const ruleCreator = require('../pages/RuleCreator.po');

describe('Login to salesforce', () => {
    it('Login', () => {
        browser.url('https://login.salesforce.com');

        browser.waitForVisible('#theloginform', 30000);

        login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
        
        navigation.goToObject('Prueba');

        ruleCreator.setupDefaultFields('Nombre de la Prueba', true, 'Descripción de Prueba', 'Telefono es requerido si Casilla esta marcada.', 'field', 'Telefono');
        browser.pause(30000);
    });
});

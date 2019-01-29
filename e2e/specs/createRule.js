const expect = require('chai').expect;
const credentials = require('../../environment').credentials;

const commonActions = require('../core/CommonActions');
const login = require('../pages/Login.po');
const navigation = require('../pages/Navigation.po');
const RuleForm = require('../pages/RuleFormModal.po');
const objectCreator = require('../pages/ObjectCreator.po');
const RuleView = require('../pages/RuleView.po');

describe('Login to salesforce', () => {
    it('Login', () => {
        browser.url('https://login.salesforce.com');

        browser.waitForVisible('#theloginform', 30000);

        login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
        
        navigation.goToObject('Prueba');

        let ruleForm = new RuleForm();
        let rule = {
            'Name': 'Nombre_de_la_Prueba',
            'Description':'Descripción de Prueba',
            'Active':false,
            'ErrorMessage':'Telefono es requerido si Casilla esta marcada.',
            'ErrorLocation':'field',
            'ErrorLocationField':'Telefono',
            'Formula':'AND(Casilla__c = false, Telefono__c = null)'
        };
        ruleForm.fillForm(rule);
        ruleForm.clickSaveButton();

        navigation.goToCreateForm();

        objectCreator.createObject('Test 01');

        
        let ruleView = new RuleView();
        const error = ruleView.getErrorMessage();

        expect(ruleView.getErrorMessage()).to.equal('Error: ' + rule.ErrorMessage);

        navigation.goToObject('Prueba');

        ruleForm.deleteRule(rule.Name);

        browser.pause(30000);
    });
});

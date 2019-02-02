const expect = require('chai').expect;
const credentials = require('../../environment').credentials;

const commonActions = require('../core/CommonActions');
const ApiUtilities = require('../core/ApiUtilities');

const login = require('../pages/Login.po');
const navigation = require('../pages/Navigation.po');
const RuleForm = require('../pages/RuleFormModal.po');
const objectHandler = require('../pages/ObjectHandler.po');
const RuleView = require('../pages/RuleView.po');

describe('Login to salesforce', () => {
    it('Login', () => {
        browser.url('https://login.salesforce.com');

        //Lets create first our condition.
        let api = new ApiUtilities();
        let ruleMetadata = {
            fullName: 'Prueba__c.Nombre_Unico_BVTEx',
            description: 'Creado desde API',
            active: true,
            errorDisplayField: 'Telefono__c',
            errorConditionFormula: 'AND(Casilla__c = false, Telefono__c = null)', //Dummy value
            errorMessage: 'Telefono es requerido si Casilla esta marcada.'
        };
 
        api.createValidationRule(ruleMetadata);

        browser.waitForVisible('#theloginform', 30000);

        login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
        
        navigation.goToCreateForm();

        objectHandler.createObject('Test 01');

        let ruleView = new RuleView();
        const error = ruleView.getErrorMessage();

        expect(ruleView.getErrorMessage()).to.equal('Error: ' + ruleMetadata.errorMessage);

        api.deleteValidationRule(ruleMetadata.fullName);

        navigation.goToCreateForm();
        objectHandler.createObject('Test 01');

        expect(commonActions.getText('#Name_ileinner')).to.equal('Test 01');

        objectHandler.deleteObject();
        browser.pause(30000);
    });
});

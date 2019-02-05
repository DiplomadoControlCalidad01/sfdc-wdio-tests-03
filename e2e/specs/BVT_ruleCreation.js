const expect = require('chai').expect;
const credentials = require('../../environment').credentials;

const commonActions = require('../core/CommonActions');
const ApiUtilities = require('../core/APIUtilities');

const login = require('../pages/Login.po');
const navigation = require('../pages/Navigation.po');
const RuleForm = require('../pages/RuleFormModal.po');
const objectHandler = require('../pages/ObjectHandler.po');
const RuleView = require('../pages/RuleView.po');

describe('Rule creation', () => {
    it('Creation', () => {
        
        login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
        
        navigation.goToObject('Prueba');
        navigation.goToCreateRules();

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

        let ruleView = new RuleView();

        expect(rule.Name).to.equal(ruleView.getFieldValue('Name'));
        console.log('Success for Name.');
        expect(rule.Description).to.equal(ruleView.getFieldValue('Description'));
        console.log('Success for Description.');
        expect(rule.Formula).to.equal(ruleView.getFieldValue('Formula'));
        console.log('Success for Formula.');
        expect(rule.ErrorMessage).to.equal(ruleView.getFieldValue('ErrorMessage'));
        console.log('Success for ErrorMessage.');
        expect(rule.ErrorLocationField).to.equal(ruleView.getFieldValue('ErrorLocationField'));
        console.log('Success for ErrorLocationField.');
        
        let api = new ApiUtilities();
        api.deleteValidationRule('Prueba__c.' + rule.Name);
    });
});

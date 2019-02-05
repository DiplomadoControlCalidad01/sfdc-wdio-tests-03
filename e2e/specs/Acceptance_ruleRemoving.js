/*[Aceptación]Verificar que es posible eliminar la regla de validación si se accede desde la sección de reglas de validación del objeto personalizado*/

const expect = require('chai').expect;
const credentials = require('../../environment').credentials;

const commonActions = require('../core/CommonActions');
const ApiUtilities = require('../core/APIUtilities');
const login = require('../pages/Login.po');
const navigation = require('../pages/Navigation.po');
const RuleForm = require('../pages/RuleFormModal.po');
const objectHandler = require('../pages/ObjectHandler.po');
const RuleView = require('../pages/RuleView.po');

describe('Rule removing', () => {
    it('Removing', () => {
        
        //Lets create first our condition.
        let api = new ApiUtilities();
        let ruleMetadata = {
            fullName: 'Prueba__c.Nombre_Unico',
            description: 'Creado desde API',
            active: true,
            errorConditionFormula: 'false', //Dummy value
            errorMessage: 'Text'
        };

        api.createValidationRule(ruleMetadata);

        login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
        
        navigation.goToObject('Prueba');

        objectHandler.deleteRule('Nombre_Unico');

        //Checking default message when there are no rules created.
        expect(commonActions.getText('//div[@id="ValidationFormulaList_body"]/descendant::th')).to.equal('No se han definido reglas de validación.');
    });
});

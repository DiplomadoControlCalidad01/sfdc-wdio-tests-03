const commonActions = require('../core/CommonActions');

const Form = require('./Form.po');

class RuleForm extends Form {

    constructor() {
        super();
        commonActions.click('[title="Nuevo Reglas de validación"]');
        this.formulaField = '#ValidationFormula';
        this.nameField = '#ValidationName';
        this.activeField = '#Active';
        this.descriptionField = '#Description';
        this.errorMessageField = '#ValidationMessage';
        this.fieldError = '#pLocFIELD';
        this.topError = '#pLocTOP_OF_PAG';
        this.errorLocationField = '#FieldEnumOrId';
    }
   
    static setActiveFlag(fieldKey, value) {
        if (value === true) {
            commonActions.click(fieldKey);
        }
    }

    static setErrorLocation(fieldError, topError, errorLocation) {
        if (errorLocation == 'field') {
            commonActions.click(fieldError);
        } else if (errorLocation == 'top of the page') {
            commonActions.click(topError);
        }
    }

    deleteRule (ruleName) {
        commonActions.click('[title="Eliminar - Registro 1 - ' + ruleName + '"]');
    }

    fillForm(ruleJSON) {
        let ruleSteps = {
            'Name': () => commonActions.setValue(this.nameField, ruleJSON.Name),
            'Description': () => commonActions.setValue(this.descriptionField, ruleJSON.Description),
            'Active': () => RuleForm.setActiveFlag(this.activeField, ruleJSON.Active),
            'Formula': () => commonActions.setValue(this.formulaField, ruleJSON.Formula),
            'ErrorMessage': () => commonActions.setValue(this.errorMessageField, ruleJSON.ErrorMessage),
            'ErrorLocation': () => RuleForm.setErrorLocation(this.fieldError, this.topError, ruleJSON.ErrorLocation),
            'ErrorLocationField': () => commonActions.selectInList(this.errorLocationField, ruleJSON.ErrorLocationField)
        };
        Object.keys(ruleJSON).forEach(key => {
            ruleSteps[key].call();
        });
    }

}

module.exports = RuleForm;

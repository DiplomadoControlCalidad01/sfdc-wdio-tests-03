const commonActions = require('../core/CommonActions');

class RuleCreator {
    static insertField(fieldName) {
        commonActions.click('#setupLink');
        commonActions.click('img[title="Ampliar - Crear - Nivel 1"]');
        commonActions.click('#CustomObjects_font');
        commonActions.click('=' + objectName);
    }

    static insertOperator(operatorName) {

    }

    static insertFunction(functionName) {

    }

    static checkSintaxis() {

    }

    setRuleName(value) {
        commonActions.setValue('#ValidationName', value);
    }

    setActiveFlag(value) {
        if (value === true) {
            commonActions.click('#Active');
        }
    }

    setDescription(value) {
        commonActions.setValue('#Description', value);
    }

    setErrorMessage(value) {
        commonActions.setValue('#ValidationMessage', value);
    }

    setErrorLocation(errorLocation) {
        if (errorLocation == 'field') {
            commonActions.click('#pLocFIELD');
        } else if (errorLocation == 'top of the page') {
            commonActions.click('#pLocTOP_OF_PAGE');
        }
    }

    static setupDefaultFields(ruleName, active, description, errorMessage, errorLocation, errorLocField) {
        commonActions.click('[title="Nuevo Reglas de validación"]');
        let ruleCreator = new RuleCreator();
        ruleCreator.setRuleName(ruleName);
        ruleCreator.setActiveFlag(active);
        ruleCreator.setDescription(description);
        ruleCreator.setErrorMessage(errorMessage);
        ruleCreator.setErrorLocation(errorLocation);
        commonActions.selectInList('#FieldEnumOrId', errorLocField);
    }
}

module.exports = RuleCreator;
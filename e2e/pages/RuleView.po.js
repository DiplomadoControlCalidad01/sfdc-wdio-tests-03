const commonActions = require('../core/CommonActions');

class RuleView {

    constructor() {
        this.actionMap = {
            'Name': () => this.getFieldValueBasedOnColumn('Nombre de regla', 'dataCol col02'),
            'Description': () => this.getFieldValueBasedOnColumn('Descripción', 'data2Col'),
            'ErrorMessage': () => this.getFieldValueBasedOnColumn('Formula de condición de error', 'data2Col'),
            'Formula': () => this.getFieldValueBasedOnColumn('Formula de condición de error', 'data2Col'),
            'ErrorMessage': () => this.getFieldValueBasedOnColumn('Mensaje de error', 'dataCol col02'),
            'ErrorLocationField': () => this.getFieldValueBasedOnColumn('Ubicación del error', 'dataCol')
        };
    }

    getErrorMessage() {
        return commonActions.getText('.errorMsg');
    }

    getFieldValue(fieldName) {
        return this.actionMap[fieldName].call();
    }

    getFieldValueBasedOnColumn(fieldName, className) {
        return commonActions.getText('//label[text()="' + fieldName  + '"]/parent::td/following-sibling::td[@class="' + className + '"]');
    }
    
}

module.exports = RuleView;
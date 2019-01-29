const commonActions = require('../core/CommonActions');

class Form {

    constructor() {
        this.saveButton = 'input[name="save"]';
    }

    clickSaveButton() {
        commonActions.click(this.saveButton);
    }

}

module.exports = Form;

const commonActions = require('../core/CommonActions');

class RuleView {

    getErrorMessage() {
        return commonActions.getText('.errorMsg');
    }

    getPhoneText() {
        return commonActions.getText('.slds-page-header__detail-row .slds-form-element__static span[data-aura-class="uiOutputPhone"]');
    }

    clickDetailsTab() {
        commonActions.click('a.tabHeader[title="Details"]');
    }
}

module.exports = RuleView;
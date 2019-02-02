const commonActions = require('../core/CommonActions');

class ObjectHandler {
    static createObject(name) {
        commonActions.setValue('#Name', name);
        commonActions.click('input[name="save"]');
    }

    static updateObject(fullName) {
        commonActions.click('//a[text()="' + fullName + '"]/parent::th/preceding-sibling::td/descendant::a[contains(text(),"Modificar")]');
    }

    static deleteRule(specificName) {
        commonActions.click('//div[@id="ValidationFormulaList_body"]/descendant::a[text()="' + specificName + '"]/parent::th/preceding-sibling::td/descendant::a[text()="Eliminar"]');
        browser.alertAccept();
    }
    static deleteObject() {
        commonActions.click('//td[@id="topButtonRow"]/descendant::input[@name="del"]');
        browser.alertAccept();
    }
}

module.exports = ObjectHandler;
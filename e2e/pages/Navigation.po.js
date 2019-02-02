const commonActions = require('../core/CommonActions');

class Navigation {
    static goToObject(objectName) {
        commonActions.click('#setupLink');
        commonActions.click('#DevTools_icon');
        commonActions.click('#CustomObjects_font');
        commonActions.click('=' + objectName);
    }

    static goToCreateForm() {
        commonActions.click('//div[@id="tabContainer"]/descendant::ul[@id="tabBar"]/descendant::a[text()="Pruebas"]');
        commonActions.click('input[title="Nuevo"]');
    }

    static goToCreateRules() {
        commonActions.click('//div[@id="ValidationFormulaList"]/descendant::div[@class="bPageBlock brandSecondaryBrd secondaryPalette"]//descendant::input[@name="new"]');
    }

    static goToRule(ruleName) {
        commonActions.click('//div[@id="ValidationFormulaList_body"]/descendant::tr/descendant::a[text()="' + ruleName + '"]');
    }

}

module.exports = Navigation;
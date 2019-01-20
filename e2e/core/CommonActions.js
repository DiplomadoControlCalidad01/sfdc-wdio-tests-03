class CommonActions {
    static setValue(locator, value) {
        browser.waitForVisible(locator, 30000);
        browser.element(locator).setValue(value);
    }

    static click(locator) {
        browser.waitForVisible(locator, 30000);
        browser.element(locator).click();
    }

    static selectInList(locator, toBeSelected) {
        let elements = $(locator).elements("option").value;
        elements.map(function(option) {
            let text = option.getAttribute("text");
            let index = option.getAttribute("index");
            index++;
            if (text == toBeSelected) {
                CommonActions.click(locator + '>option:nth-child(' + index + ')');
            }
        });

    }
}

module.exports = CommonActions;
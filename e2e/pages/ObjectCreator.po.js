const commonActions = require('../core/CommonActions');

class ObjectCreator {
    static createObject(name) {
        commonActions.setValue('#Name', name);
        
        commonActions.click('input[name="save"]');
    }

}

module.exports = ObjectCreator;
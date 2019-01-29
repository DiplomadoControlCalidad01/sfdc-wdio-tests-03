const commonActions = require('../core/CommonActions');

class Navigation {
    static goToObject(objectName) {
        commonActions.click('#setupLink');
        commonActions.click('img[title="Ampliar - Crear - Nivel 1"]');
        commonActions.click('#CustomObjects_font');
        commonActions.click('=' + objectName);
    }

    static goToCreateForm() {
        commonActions.click('a[title="Ficha Pruebas"]');
        commonActions.click('input[title="Nuevo"]');
    }

}

module.exports = Navigation;
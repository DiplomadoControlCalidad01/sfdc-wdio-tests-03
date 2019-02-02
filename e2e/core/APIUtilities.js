const credentials = require('../../environment').credentials;

class ApiUtilities {

    constructor() {
        this.objFullName = '';
        var jsforce = require('jsforce');
        this.conn = new jsforce.Connection({
        // you can change loginUrl to connect to sandbox or prerelease env.
            loginUrl : 'https://login.salesforce.com',
            instanceUrl: 'https://na85.salesforce.com',
            version: '33.0'
        });

        this.conn.login(credentials.sysadmin.username, credentials.sysadmin.password, function(err, userInfo) {
            if (err) { return console.error(err); }
        });
    }

    createValidationRule(ruleForm) {
        this.conn.metadata.create('ValidationRule', ruleForm, function(err, results) {
                if (err) { console.log('Error:', err); }
                console.log('Create:Success: ', JSON.stringify(results), results.fullName);
            }
        );
    }

    updateValidationRule(ruleForm) {
        this.conn.metadata.create('ValidationRule', ruleForm, function(err, results) {
            console.log('success ? : ' + results.metadata.id);
            console.log('fullName : ' + results.fullName);
            }
        );
    }

    deleteValidationRule(fullName) {
        this.conn.metadata.delete('ValidationRule', fullName, function(err, results) {
                if (err) { console.log('Error:', err); }
                console.log('Delete:Success: ', JSON.stringify(results));
            }
        );
    }
}

module.exports = ApiUtilities;
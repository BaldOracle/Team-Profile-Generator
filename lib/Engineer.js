const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHubUserName) {


        super(name, id, email);

        this.gitHubUserName = gitHubUserName;

        
    }

    getRole() {
        return 'Engineer';
    }

    getgitHubUserName(){
        return this.gitHubUserName
    }
}

module.exports = Engineer
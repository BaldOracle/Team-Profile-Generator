const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHubUserName){
        super(name, id, email);
        this.gitHubUserName = gitHubUserName;
    }

    getRole() {
        return 'Engineer';
    }

    getGithub(){
        return this.gitHubUserName
    }
}

module.exports = Engineer
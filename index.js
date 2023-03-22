//import inquirer from 'inquirer'
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// function menu() {
//    createManager()

// }
const team = []
function createTeam() {
   inquirer
      .prompt([
         {
            type: 'list',
            name: 'teamType',
            message: 'Who do you want to add first?',
            choices: ['Engineer', 'Intern', 'Exit']
         },
      ])
      .then((response) => {
         console.log(response)
         // Use user feedback for... whatever!!
         if (response.teamType === 'Engineer') {
            console.log("yaa!!")
            createEngineer();

         } else if (response.teamType === 'Intern') {
            createIntern();
         } else if (response.teamType === 'Exit'){
            console.log(team)
         }
      })
}


function createManager() {
   inquirer
      .prompt([
         /* Pass your questions in here */
         {
            type: 'input',
            message: 'What is the managers name?',
            name: 'managerName',
         },
         {
            type: 'input',
            message: 'What is employee ID number?',
            name: 'employeeId',
         },
         {
            type: 'input',
            message: 'What is email?',
            name: 'email',
         },
         {
            type: 'input',
            message: 'What is the office number?',
            name: 'officeNumber',
         }
      ])
      .then((response) => {
         // Use user feedback for... whatever!!
         const newManager = new Manager(response.managerName, response.employeeId, response.email, response.officeNumber)
         console.log(newManager)
         team.push(newManager)
         createTeam()
      })
      .catch((error) => {
         if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
         } else {
            // Something else went wrong
         }
      });
}


function createEngineer() {
   inquirer
      .prompt([
         /* Pass your questions in here */
         {
            type: 'input',
            message: 'What is the engineers name?',
            name: 'engineerName',
         },
         {
            type: 'input',
            message: 'What is employee ID number?',
            name: 'employeeId',
         },
         {
            type: 'input',
            message: 'What is email?',
            name: 'email',
         },
         {
            type: 'input',
            message: 'What is their Github user name?',
            name: 'gitHubUserName',
         }
      ])
      .then((response) => {
         // Use user feedback for... whatever!!
      
         const newEngineer = new Engineer(response.engineerName, response.employeeId, response.email, response.gitHubUserName)
         console.log(newEngineer)
         team.push(newEngineer)
         createTeam();

      })
      .catch((error) => {
         if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
         } else {
            // Something else went wrong
         }
      });
}

function createIntern() {
   inquirer
      .prompt([
         /* Pass your questions in here */
         {
            type: 'input',
            message: 'What is the intern name?',
            name: 'interName',
         },
         {
            type: 'input',
            message: 'What is employee ID number?',
            name: 'employeeId',
         },
         {
            type: 'input',
            message: 'What is email?',
            name: 'email',
         },
         {
            type: 'input',
            message: 'What is their school user name?',
            name: 'school',
         }
      ])
      .then((response) => {
         // Use user feedback for... whatever!!
         const newIntern = new Intern(response.interName, response.employeeId, response.email, response.school)
         console.log(newIntern)
         team.push(newIntern)
         createTeam();
      })
      .catch((error) => {
         if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
         } else {
            // Something else went wrong
         }
      });
}


// //menu()
createManager()
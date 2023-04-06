//import inquirer from 'inquirer'
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


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
         } else if (response.teamType === 'Exit') {
            console.log(team)
            buildTeam();
         }
      })
}

function buildTeam() {
   fs.writeFileSync("./dist/team.html", putItTogether()) 
}

function putItTogether() {
   return `
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">

    <title>Document</title>
</head>
<body>


   ${team.map(teamMember => {
      let role = teamMember.getRole()
      let email = teamMember.getEmail()
      let phone = teamMember.getOfficeNumber()
      let git = teamMember.getGithub()
      let htmlCard = `
      <div class="card" style="width: 18rem;">
         <div class="card-header">
           Role: ${role}
         </div>
         <ul class="list-group list-group-flush">
           <li class="list-group-item">Name: ${teamMember.getName()}</li>
           <li class="list-group-item">ID: ${teamMember.getId()}</li>
           <li class="list-group-item" href=${email}>Email: ${teamMember.getEmail()}</li>
      `
      if (role === 'Manager') {
         return `
         
            ${htmlCard}
           <li class="list-group-item" href=${phone}>Phone Number: ${phone}</li>
 
         </ul>
       </div>`
      } else if (role === 'Engineer') {
         return `
         ${htmlCard}
           <li class="list-group-item" href =https://github.com/${git}>Github: ${teamMember.getGithub()}</li>
 
         </ul>
       </div>
         `

      } else if (role === 'Intern') {
         return `
         ${htmlCard}
         <li class="list-group-item">A=School: ${teamMember.getSchool()}</li>
       </ul>
     </div>
       `
      }
   })}
   </body>
</html>
   `
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
            name: 'getGithub',
         }
      ])
      .then((response) => {
         // Use user feedback for... whatever!!

         const newEngineer = new Engineer(response.engineerName, response.employeeId, response.email, response.getGithub)
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
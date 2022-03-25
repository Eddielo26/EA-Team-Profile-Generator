// import packages
const inquirer = require('inquirer');
const fs = require('fs');
// import classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const team = [];

const questions = () => {
    return inquirer.prompt ([
// prompt manager questions
// const addManager = [
    {
        name: 'role',
        type: 'confirm',
        message: 'Welcome to Team Profile Generator! Would you like to begin?'
    },
    {
        name: 'name',
        type: 'input',
        message: "Please enter Manager's name:"
    },
    {
        name: 'id',
        type: 'input',
        message: 'What is your employee ID: (Required)',
        validate: idInput => {
            if (idInput){
                return true;
            }else {
                console.log('Please enter employee ID');
                return false;
            }
        }
    },
    {
        name: 'email',
        type: 'input',
        message: 'Please enter email address:'
    },
    {
        name: 'officeNumber',
        type: 'input',
        message: 'Please enter office number: (Required)',
        validate: officeInput => {
            if(officeInput){
                return true;
            }else {
                console.log('Please provide office number!');
            }
        }
    },
    {
        name: 'followUp',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'All done!'],
        message: 'What you like to do next?'
    },
    
]);
};

const addEngineer = [
    {
        name: 'name',
        type: 'input',
        message: 'Please enter engineer name'
    },
    {
        name: 'id',
        type: 'input',
        message: 'Please enter engineer id: (Required)',
        validate: engID => {
            if (engID){
                return true;
            } else {
                console.log('Please enter engineer ID');
                return false;
            }
        }
    },
    {
        name: "email",
        type: 'input',
        message: 'Please enter email address:'
    },
    {
        name: 'github',
        type: 'input',
        message: ' Please enter engineers github (Required)',
        validate: engGit => {
            if (engGit){
                return true;
            }else {
                console.log('Please provide engineer github');
                return false;
            }
        }
    },
    {
        name: 'followUp',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'All done!'],
        message: 'What you like to do next?'
    },

];

const addIntern = [
    {
        name: 'name',
        type: 'input',
        message: 'Please enter intern name'
    },
    {
        name: 'id',
        type: 'input',
        message: 'Please enter intern id: (Required)',
        validate: ternID => {
            if (ternID){
                return true;
            } else {
                console.log('Please enter intern ID');
                return false;
            }
        }
    },
    {
        name: "email",
        type: 'input',
        message: 'Please enter email address:'
    },
    {
        name: 'school',
        type: 'input',
        message: ' Please enter interns school (Required)',
        validate: ternSchool => {
            if (ternSchool){
                return true;
            }else {
                console.log('Please provide interns school');
                return false;
            }
        }
    },
    {
        name: 'followUp',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'All done!'],
        message: 'What you like to do next?'
    },

];


questions();
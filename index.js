// import packages
const inquirer = require('inquirer');
const fs = require('fs');
// import classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const team = [];

const addManager = [
    {
        name: 'role',
        type: 'cofirm',
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
        message: 'What is your employee ID (Required)',
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
];




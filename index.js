// import packages
const inquirer = require("inquirer");
const fs = require("fs");
// import classes
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const team = [];

// prompt manager questions
const addManager = [
  {
    name: "role",
    type: "confirm",
    message: "Welcome to Team Profile Generator! Would you like to begin?",
  },
  {
    name: "name",
    type: "input",
    message: "Please enter Manager's name:",
  },
  {
    name: "id",
    type: "input",
    message: "What is your employee ID: (Required)",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter employee ID");
        return false;
      }
    },
  },
  {
    name: "email",
    type: "input",
    message: "Please enter email address:",
  },
  {
    name: "officeNumber",
    type: "input",
    message: "Please enter office number: (Required)",
    validate: (officeInput) => {
      if (officeInput) {
        return true;
      } else {
        console.log("Please provide office number!");
      }
    },
  },
  {
    name: "followUp",
    type: "list",
    choices: ["Add Engineer", "Add Intern", "All done!"],
    message: "What you like to do next?",
  },
];
// prompt engineer questions
const addEngineer = [
  {
    name: "name",
    type: "input",
    message: "Please enter engineer name",
  },
  {
    name: "id",
    type: "input",
    message: "Please enter engineer id: (Required)",
    validate: (engID) => {
      if (engID) {
        return true;
      } else {
        console.log("Please enter engineer ID");
        return false;
      }
    },
  },
  {
    name: "email",
    type: "input",
    message: "Please enter email address:",
  },
  {
    name: "github",
    type: "input",
    message: " Please enter engineers github (Required)",
    validate: (engGit) => {
      if (engGit) {
        return true;
      } else {
        console.log("Please provide engineer github");
        return false;
      }
    },
  },
  {
    name: "followUp",
    type: "list",
    choices: ["Add Engineer", "Add Intern", "All done!"],
    message: "What you like to do next?",
  },
];
// prompt intern questions
const addIntern = [
  {
    name: "name",
    type: "input",
    message: "Please enter intern name",
  },
  {
    name: "id",
    type: "input",
    message: "Please enter intern id: (Required)",
    validate: (ternID) => {
      if (ternID) {
        return true;
      } else {
        console.log("Please enter intern ID");
        return false;
      }
    },
  },
  {
    name: "email",
    type: "input",
    message: "Please enter email address:",
  },
  {
    name: "school",
    type: "input",
    message: "Please enter interns school (Required)",
    validate: (ternSchool) => {
      if (ternSchool) {
        return true;
      } else {
        console.log("Please provide interns school");
        return false;
      }
    },
  },
  {
    name: "followUp",
    type: "list",
    choices: ["Add Engineer", "Add Intern", "All done!"],
    message: "What you like to do next?",
  },
];

// start intial questions
questions(addManager);

// cycle through questions when members are added
function questions(questionArr) {
  inquirer
    .prompt(questionArr)
    .then((member) => {
      team.push(member);

      if (member.followUp === "Add Engineer") {
        questions(addEngineer);
      } else if (member.followUp === "Add Intern") {
        questions(addIntern);
      } else {
        createProfiles(team);
      }
    })
    .catch((err) => console.log(err));
}

function createProfiles(team) {
  const employees = team.map((member) => {
    const { name, id, email } = member;

    // when adding manager,  require office number
    if (member.hasOwn("officeNumber")) {
      const { officeNumber } = member;
      return new Manager(name, id, email, officeNumber);
    }
    // when adding engineer, require github
    if (member.hasOwn("github")) {
      const { gitHub } = member;
      return new Engineer(name, id, email, gitHub);
    }
    // when adding intern, require school
    if (member.hasOwn("school")) {
      const { school } = member;
      return new Engineer(name, id, email, school);
    }
  });

// Generate HTML from the employees profiles made
    generateHtml(employees);
}   

function generateHtml(employees) {
    let employeeCards = '';
    profiles.forEach((employees) => {
      if (employees instanceof Manager) {
        const card = addManagerCard(employees);
        employeeCards += card;
      } else if (employees instanceof Engineer) {
        const card = addEngineerCard(employees);
        employeeCards += card;
      } else if (employees instanceof Intern) {
        const card = addInternCard(employees;
        employeeCards += card;
      }
})


const newHtml = wrapProfileCards(employeeCards);

writeHtml(newHtml);
};
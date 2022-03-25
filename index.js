// import packages
const inquirer = require("inquirer");
const fs = require("fs");
// import classes
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Import HTML templates
const addManagerCard = require("./src/card-manager");
const addEngineerCard = require("./src/card-engineer");
const addInternCard = require("./src/card-intern");
const wrapProfileCards = require("./src/card-wrapper");

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
  const profiles = team.map((member) => {
    const { name, id, email } = member;

    // when adding manager,  require office number
    if (member.hasOwnProperty("officeNumber")) {
      const { officeNumber } = member;
      return new Manager(name, id, email, officeNumber);
    }
    // when adding engineer, require github
    if (member.hasOwnProperty("github")) {
      const { github } = member;
      return new Engineer(name, id, email, github);
    }
    // when adding intern, require school
    if (member.hasOwnProperty("school")) {
      const { school } = member;
      return new Intern(name, id, email, school);
    }
  });

  // Generate HTML from the employees profiles made
  generateHtml(profiles);
}

function generateHtml(profiles) {
  let profileCards = "";
  profiles.forEach((profile) => {
    if (profile instanceof Manager) {
      const card = addManagerCard(profile);
      profileCards += card;
    } else if (profile instanceof Engineer) {
      const card = addEngineerCard(profile);
      profileCards += card;
    } else if (profile instanceof Intern) {
      const card = addInternCard(profile);
      profileCards += card;
    }
  });

  const newHtml = wrapProfileCards(profileCards);

  writeHtml(newHtml);
}

// Function to write the final HTML document in dist folder
function writeHtml(newHtml) {
  fs.writeFile("./dist/team-profile.html", newHtml, (err) => {
    if (err) throw err;
    console.log("HTML document successfully created in the /dist folder.");
  });
}

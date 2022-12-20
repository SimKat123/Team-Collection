const inquirer = require("inquirer");
const template = require("./src/template")
const fs = require("fs");
const genEmpFile = [];
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

inquirer
  .prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the Team Manager's name?",
    },
    {
      type: "input",
      name: "managerID",
      message: "What is the Team Manager's ID?",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is the Team Manager's Email?",
    },
    {
      type: "input",
      name: "managerOfficeNum",
      message: "What is the Team Manager's office number?",
    },
  ])
  .then((ans) => {
    let manager = new Manager(ans.managerName, ans.managerID, ans.managerEmail, ans.managerOfficeNum);
      genEmpFile.push(manager);
    console.log(genEmpFile);
    teamMember();
  });

// Select which employee to add, if none, skip all questions and create HTML page. If Engineer: display engineer questions, if Intern: display intern questions.
function teamMember() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "memberAdd",
        message: "Which type of team member would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members",
        ],
      },
    ])
    .then((ans) => {
      console.log(ans);
      if (ans.memberAdd === "Engineer") {
        engineerQs();
      } else if (ans.memberAdd === "Intern") {
        interQs();
      } else if (ans.memberAdd === "I don't want to add any more team members") {
        noMoreEmp();
      }
      return;
    });
}

// Engineer questions
function engineerQs() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engName",
        message: "What is your Engineer's Name?",
      },
      {
        type: "input",
        name: "engID",
        message: "What is your Engineer's ID?",
      },
      {
        type: "input",
        name: "engEmail",
        message: "What is your Engineer's Email?",
      },
      {
        type: "input",
        name: "engGitName",
        message: "What is your Engineer's GitHub Username?",
      },
    ])
    // Propmt to memberAdd questions
    .then((ans) => {
      let engineer = new Engineer(ans.engName, ans.engID, ans.engEmail, ans.engGitName);
      genEmpFile.push(engineer);
      console.log(genEmpFile);
      teamMember();
    });
}

// Intern questions
function interQs() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is your Intern's Name?",
      },
      {
        type: "input",
        name: "internID",
        message: "What is your Intern's ID?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your Intern's Email?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is your Intern's School?",
      },
    ])
    // Propmt to memberAdd questions
    .then((ans) => {
      let intern = new Intern(ans.internName, ans.internID, ans.internEmail, ans.internSchool);
      genEmpFile.push(intern);
      console.log(genEmpFile);
      teamMember();
    });
}
function noMoreEmp() {
  const createHTML = template(genEmpFile);
  fs.writeFile("./dist/index.html", createHTML, (err) =>
      err ? console.log(err) : console.log("Successfully created index.html!")
  );
}
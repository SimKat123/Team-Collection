const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(empName, empID, empEmail, engGitName) {
    super(empName, empID, empEmail);
    this.engGitName = engGitName;
  }

  getGitHub() {
    return this.engGitName;
  }
  getRole() {
    return "Engineer";
  }
}

const engineer = new Engineer(
  "exampleEng",
  2,
  "exampleEng@gmail.com",
  "exampleEngGit"
);
engineer.getName();
engineer.getId();
engineer.getEmail();
engineer.getGitHub();
engineer.getRole();

module.exports = Engineer;

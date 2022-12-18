const Employee = require("./Employee");

class Intern extends Employee {
  constructor(empName, empID, empEmail, internSchool) {
    super(empName, empID, empEmail);
    this.internSchool = internSchool;
  }

  getSchool() {
    return this.internSchool;
  }
  getRole() {
    return "Intern";
  }
}

const intern = new Intern(
  "exampleIntern",
  3,
  "exampleIntern@gmail.com",
  "UNCC"
);
intern.getName();
intern.getId();
intern.getEmail();
intern.getSchool();
intern.getRole();

module.exports = Intern;

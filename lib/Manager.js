const Employee = require("./Employee");

class Manager extends Employee {
  constructor(empName, empID, empEmail, managerOfficeNum) {
    super(empName, empID, empEmail);
    this.managerOfficeNum = managerOfficeNum;
  }

  getOfficeNum() {
    return this.managerOfficeNum;
  }
  getRole() {
    return "Manager";
  }
}

const manager = new Manager("exampleMang", 4, "exampleMang@gmail.com", 10);
manager.getName();
manager.getId();
manager.getEmail();
manager.getOfficeNum();
manager.getRole();

module.exports = Manager;

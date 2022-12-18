class Employee {
  constructor(empName, empID, empEmail) {
    this.empName = empName;
    this.empID = empID;
    this.empEmail = empEmail;
  }

  getName() {
    return this.empName;
  }

  getId() {
    return this.empID;
  }

  getEmail() {
    return this.empEmail;
  }

  getRole() {
    return "Employee";
  }
}

const employee = new Employee("exampleEmp", 1, "exampleEmp@gmail.com");
employee.getName();
employee.getId();
employee.getEmail();
employee.getRole();

module.exports = Employee;

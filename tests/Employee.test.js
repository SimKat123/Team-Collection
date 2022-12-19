// Parent class: name, id, email, getName(), getId(), getEmail(), getRole() =>returning employee
const Employee = require("../lib/Employee.js");

describe("Get", () => {
  it("Can get name via getName()", () => {
    const empName = "Emp";
    const test = new Employee("Emp", 1, "Emp@gmail.com");
    expect(test.getName()).toBe(empName);
  });

  it("Can get ID via getId()", () => {
    const empId = 1;
    const test = new Employee("Emp", 1, "Emp@gmail.com");
    expect(test.getId()).toBe(empId);
  });

  it("Can get email via getEmail()", () => {
    const empEmail = "Emp@gmail.com";
    const test = new Employee("Emp", 1, "Emp@gmail.com");
    expect(test.getEmail()).toBe(empEmail);
  });

  it("Can get role via getRole()", () => {
    const empRole = "Employee";
    const test = new Employee("Emp", 1, "Emp@gmail.com");
    expect(test.getRole()).toBe(empRole);
  });
});

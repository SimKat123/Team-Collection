const Manager = require("../lib/Manager.js");

describe("Get", () => {
  it("Can get name via getName()", () => {
    const managerName = "Mang";
    const test = new Manager("Mang", 4, "Mang@gmail.com", 10);
    expect(test.getName()).toBe(managerName);
  });

  it("Can get ID via getId()", () => {
    const managerID = 4;
    const test = new Manager("Mang", 4, "Mang@gmail.com", 10);
    expect(test.getId()).toBe(managerID);
  });

  it("Can get email via getEmail()", () => {
    const managerEmail = "Mang@gmail.com";
    const test = new Manager("Mang", 4, "Mang@gmail.com", 10);
    expect(test.getEmail()).toBe(managerEmail);
  });

  it("Can get email via getOfficeNum()", () => {
    const managerOfficeNum = 10;
    const test = new Manager("Mang", 4, "Mang@gmail.com", 10);
    expect(test.getOfficeNum()).toBe(managerOfficeNum);
  });

  it("Can get role via getRole()", () => {
    const managerRole = "Manager";
    const test = new Manager("Mang", 4, "Mang@gmail.com", 10);
    expect(test.getRole()).toBe(managerRole);
  });
});

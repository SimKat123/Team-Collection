const Intern = require("../lib/Intern.js");

describe("Get", () => {
  it("Can get name via getName()", () => {
    const internName = "In";
    const test = new Intern("In", 3, "Intern@gmail.com", "UNCC");
    expect(test.getName()).toBe(internName);
  });

  it("Can get ID via getId()", () => {
    const internID = 3;
    const test = new Intern("In", 3, "Intern@gmail.com", "UNCC");
    expect(test.getId()).toBe(internID);
  });

  it("Can get email via getEmail()", () => {
    const internEmail = "Intern@gmail.com";
    const test = new Intern("In", 3, "Intern@gmail.com", "UNCC");
    expect(test.getEmail()).toBe(internEmail);
  });

  it("Can get role via getRole()", () => {
    const internRole = "Intern";
    const test = new Intern("In", 3, "Intern@gmail.com", "UNCC");
    expect(test.getRole()).toBe(internRole);
  });

  it("Can get role via getSchool()", () => {
    const internSchool = "UNCC";
    const test = new Intern("In", 3, "Intern@gmail.com", "UNCC");
    expect(test.getSchool()).toBe(internSchool);
  });
});

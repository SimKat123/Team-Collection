const Engineer = require("../lib/Engineer.js");

describe("Get", () => {
  it("Can get name via getName()", () => {
    const engName = "Eng";
    const test = new Engineer("Eng", 2, "Eng@gmail.com", "EngGitHub");
    expect(test.getName()).toBe(engName);
  });

  it("Can get ID via getId()", () => {
    const engID = 2;
    const test = new Engineer("Eng", 2, "Eng@gmail.com", "EngGitHub");
    expect(test.getId()).toBe(engID);
  });

  it("Can get email via getEmail()", () => {
    const engEmail = "Eng@gmail.com";
    const test = new Engineer("Eng", 2, "Eng@gmail.com", "EngGitHub");
    expect(test.getEmail()).toBe(engEmail);
  });

  it("Can get role via getRole()", () => {
    const engRole = "Engineer";
    const test = new Engineer("Eng", 2, "Eng@gmail.com", "EngGitHub");
    expect(test.getRole()).toBe(engRole);
  });

  it("Can get role via getGitHub()", () => {
    const engGitName = "EngGitHub";
    const test = new Engineer("Eng", 2, "Eng@gmail.com", "EngGitHub");
    expect(test.getGitHub()).toBe(engGitName);
  });
});

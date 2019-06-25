const assert = require("assert");
const Brief = require("../database/schemas/Brief.js"); //imports the Brief model.
describe("Creating documents", () => {
  it("creates a brief", done => {
    //assertion is not included in mocha so
    //require assert which was installed along with mocha
    const newBrief = new Brief({
      companyName: "ABC Corporation Plc",
      contactPerson: "Jiminy Cricket",
      projectName: "T-shirt Designs",
      projectBrief: "I need 500 t-shirts made with fabulous designs",
      projectDeadline: "20-07-2019",
      estimatedWorkload: "4",
      projectPrice: "500",
      additionalInfo: "please check in frequently with updates",
      studentSkills: ["sewing", "typing", "design"],

      jobClient: "ABC Corporation Plc",
      jobType: "new", //new, jobAccepted, current, completed
      jobStudent: "Larry Thatcher"
    });
    newBrief
      .save() //takes some time and returns a promise
      .then(done => {
        assert(!newBrief.isNew); //if brief is saved to db it is not new
      })
      .catch(err => console.log("creates a brief error: ", err));
    done();
  });
});

// delete_test.js
const assert = require("assert");
const Brief = require("../database/schemas/Brief.js");
describe("Deleting a newBrief", () => {
  let newBrief;

  beforeEach(done => {
    newBrief = new Brief({
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
    newBrief.save().then(() => done());
  });

  it("removes a newBrief using its instance", done => {
    newBrief
      .remove()
      .then(() => Brief.findOne({ companyName: "ABC Corporation Plc" }))
      .then(newBrief => {
        assert(newBrief === null);
        done();
      });
  });

  it("removes multiple newBriefs", done => {
    Brief.remove({ companyName: "ABC Corporation Plc" })
      .then(() => Brief.findOne({ companyName: "ABC Corporation Plc" }))
      .then(newBrief => {
        assert(newBrief === null);
        done();
      });
  });

  it("removes a newBrief", done => {
    Brief.findOneAndRemove({ companyName: "ABC Corporation Plc" })
      .then(() => Brief.findOne({ companyName: "ABC Corporation Plc" }))
      .then(newBrief => {
        assert(newBrief === null);
        done();
      });
  });
});

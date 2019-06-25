// update_test.js
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

  function assertHelper(statement, done) {
    statement.then(() => Brief.find({}));
    done();
  }

  it("sets and saves newBrief using an instance", done => {
    newBrief.set("companyName", "ABC Corporation Ltd"); //not updated in mongodb yet
    assertHelper(newBrief.save(), done());
  });

  it("update newBrief using instance", done => {
    //useful to update multiple fields of the object
    assertHelper(
      newBrief.update({ companyName: "ABC Corporation Ltd" }),
      done()
    );
  });

  it("update all matching briefs using model", done => {
    assertHelper(
      Brief.update(
        { companyName: "ABC Corporation Plc" },
        { companyName: "ABC Corporation Ltd" }
      ),
      done()
    );
  });

  it("update one newBrief using model", done => {
    assertHelper(
      Brief.findOneAndUpdate(
        { companyName: "newBrief" },
        { companyName: "ABC Corporation Ltd" }
      ),
      done()
    );
  });

  it("update one newBrief with id using model", done => {
    assertHelper(
      Brief.findByIdAndUpdate(newBrief._id, {
        companyName: "ABC Corporation Ltd"
      }),
      done()
    );
  });
});

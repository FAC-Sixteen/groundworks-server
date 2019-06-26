// update_test.js
const assert = require("assert");
const Client = require("../database/schemas/Client.js");
describe("Deleting a Client", () => {
  let newClient;

  beforeEach(done => {
    newClient = new Client({
      firstName: "James",
      lastName: "Lemon",
      email: "jameslemon@gmail.com",
      password: "password",
      phoneNumber: "07592232212",

      jobTitle: "manager",
      companyName: "ABC Incorporated Ltd",
      companyUrl: "www.abcincorporated.com"
    });
    newClient.save().then(() => done());
  });

  function assertHelper(statement, done) {
    statement.then(() => Client.find({}));
    done();
  }

  it("sets and saves newClient using an instance", done => {
    newClient.set("firstName", "Jeremy"); //not updated in mongodb yet
    assertHelper(newClient.save(), done());
  });

  it("update newClient using instance", done => {
    //useful to update multiple fields of the object
    assertHelper(newClient.update({ firstName: "Jeremy" }), done());
  });

  it("update all matching clients using model", done => {
    assertHelper(
      Client.update({ firstName: "James" }, { firstName: "Jeremy" }),
      done()
    );
  });

  it("update one client using model", done => {
    assertHelper(
      Client.findOneAndUpdate({ firstName: "James" }, { firstName: "Jeremy" }),
      done()
    );
  });

  it("update one newClient with id using model", done => {
    assertHelper(
      Client.findByIdAndUpdate(newClient._id, {
        firstName: "James"
      }),
      done()
    );
  });
});

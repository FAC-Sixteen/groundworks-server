const assert = require("assert");
const Client = require("../database/schemas/Client.js"); //imports the Client model.
describe("Creating documents", () => {
  it("creates a client", done => {
    //assertion is not included in mocha so
    //require assert which was installed along with mocha
    const newClient = new Client({
      firstName: "James",
      lastName: "Lemon",
      email: "jameslemon1234@gmail.com",
      password: "password",
      phoneNumber: "07592232212",

      jobTitle: "manager",
      companyName: "ABC Incorporated Ltd",
      companyUrl: "www.abcincorporated.com"
    });
    newClient
      .save() //takes some time and returns a promise
      .then(() => {
        assert(!newClient.isNew); //if poke is saved to db it is not new
      });
    done();
  });
});

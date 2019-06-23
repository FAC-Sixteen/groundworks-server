const request = require("supertest");
const app = require("../../app.js");

describe("jest is working", () => {
  it("should be showing James", () => {
    expect("James").toBe("James");
  });
});

describe("GET client/all-briefs", function() {
  it("should return status code of 200", function() {
    request(app)
      .get("/client/all-briefs")
      .expect(200);
  });
});

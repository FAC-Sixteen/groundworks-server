const mockingoose = require("mockingoose").default;
const briefControllers = require("../../controllers/briefControllers.js");
const Brief = require("../../database/schemas/Brief.js");
const Client = require("../../database/schemas/Client.js");
const Register = require("../../database/schemas/Register.js");
const Student = require("../../database/schemas/Student.js");
const User = require("../../database/schemas/User.js");

describe("getAllBriefs returns a truthy value", () => {
  it("should be truthy", () => {
    expect(briefControllers.getAllBriefs()).toBeTruthy();
  });
});

describe("getAllBriefs returns an object", () => {
  it("should be truthy", () => {
    expect(typeof briefControllers.getAllBriefs()).toBe("object");
  });
});

it("should find", () => {
  mockingoose.Brief.toReturn({ _id: "" });
  return Brief.find().then(result => {
    expect(typeof result).toEqual("object");
  });
});

it("should find", () => {
  mockingoose.Client.toReturn({ _id: "" });
  return Client.find().then(result => {
    expect(typeof result).toEqual("object");
  });
});

it("should find", () => {
  mockingoose.Register.toReturn({ _id: "" });
  return Register.find().then(result => {
    expect(typeof result).toEqual("object");
  });
});

it("should find", () => {
  mockingoose.Student.toReturn({ _id: "" });
  return Student.find().then(result => {
    expect(typeof result).toEqual("object");
  });
});

it("should find", () => {
  mockingoose.User.toReturn({ _id: "" });
  return User.find().then(result => {
    expect(typeof result).toEqual("object");
  });
});

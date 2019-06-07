const app = require("./app"); // requiring app.js from ./app file
const mongoose = require("mongoose"); // Framework for MongoDB
const env = require("env2")("./config.env"); // used to hide Keys

const port = process.env.PORT || 8080; //Setting port on which we can view backend.

// Listening to see if server is up and running.
app.listen(port, () => {
  console.log(`Node/Express server running on port ${port}`);
});

// mongoose got updated and now this is essiential.
const options = {
  useNewUrlParser: true
};

mongoose.connect(process.env.DB_CONNECTION, options); // initial connection.

const db = mongoose.connection;

db.once("open", () => console.log("connected to the database")); // Opening Connection.
db.on("error", console.error.bind(console, "MongoDB connection error")); // catching errors.

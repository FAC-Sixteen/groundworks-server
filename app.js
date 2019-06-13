const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const logger = require("morgan");

const studentRouter = require("./routes/studentRouter");
const clientRouter = require("./routes/clientRouter");

const app = express(); // Setting express to app, which is best practise.

app.disable("x-powered-by"); // This is so people can't see what framework we are using.
app.use(cors()); // middleware, Cross origin resouce sharing. So you can get data from different name or portal.
app.use(express.json()); // middleware to convert automatically to JSON.
app.use(bodyParser.urlencoded({ extended: false })); // Middleware for parsing.
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "..", "public"))); // Will server everything in public folder, static files

app.use("/student", studentRouter); // sends the request to the router in roots file.
app.use("/client", clientRouter); // sends the request to the router in roots file.

//router
// app.get("/", (req, res) => {
//   res.send("Hello FAC16");
// });

module.exports = app; // exports the app func.

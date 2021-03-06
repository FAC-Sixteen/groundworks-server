const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const logger = require("morgan");

const studentRouter = require("./routes/studentRouter");
const clientRouter = require("./routes/clientRouter");
const briefRouter = require("./routes/briefRouter");

const app = express(); //  Initialize Express app

app.use(compression()); //gzip compression, reduces size up to 70%
// app.disable("x-powered-by"); // This is so people can't see what framework we are using.
app.use(helmet()); //provides security against several types of attacks
app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:8080",
      "http://localhost:3000",
      "https://objective-volhard-137078.netlify.com/"
    ]
  })
); // middleware, Cross origin resouce sharing. So you can get data from different name or portal.
app.use(express.json({  //parse incoming requests with JSON payloads based on body-parser
  inflate: true,  //enables handling compressed bodies
  limit: "20mb",  //sets max req.body size
  strict: true    //only accepting arrays and objects
}));
app.use(bodyParser.urlencoded({   // Middleware for parsing.
  extended: true, //parses url-encoded data with qs library.  set to false for querystring library
  inflate: true,  //handles compressed bodies
  limit: "20mb" //controls max body size
   })); 
process.env.NODE_ENV !== "production" && app.use(logger("dev")); //morgan logger, gives logging info

const staticOptions = {
  dotfiles: "ignore", //if files starting with "." do not exist, respond with 404 and call next()
  redirect: true,     //redirect to trailing / when pathname is a directory
  maxAge: "30d"       //sets max-age property of the Cache-Control header
}

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '..', 'public'), staticOptions));
  app.get('*', (req, res) => { res.sendFile(path.resolve(__dirname, '/public/index.html'))
  })
}

app.use("/student", studentRouter); // sends the request to the router in roots file.
app.use("/client", clientRouter); // sends the request to the router in roots file. //STARTS HERE AFTER POST FROM FE
app.use("/brief", briefRouter);
app.use("/", (req, res) => {
  res.json({ message: "Server up and running" });
});

app.use((req, res, next) => {
  //error-handling any routes not covered above
  const error = new Error("Not Found"); //built-in Error object
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  //handles any other error: database, etc
  res.status(error.status || 500);
  res.json({ error: { message: error.message } });
});

module.exports = app; // exports the app func.

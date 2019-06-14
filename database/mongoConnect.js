const mongoose = require("mongoose"); // Framework for MongoDB
const env = require("env2")("./config.env"); // used to hide Keys

module.exports = {
  mongoConnect: (callback) => {

  const options = {
    useNewUrlParser: true,  //Previous connection string parser deprecated
    autoIndex: true,  //for large production deployment: set to false
    useCreateIndex: true,  //silence deprecation warnings
    reconnectTries: Number.MAX_VALUE,//autoreconnect single server or mongo proxy
    reconnectInterval: 500,
    poolSize: 10, //Max sockets driver keeps open for this connection, default 5.
    connectTimeoutMS: 30000, //how long MongoDB waits before killing initial connect
    socketTimeoutMS: 30000 //Set to 2-3x your longest running individual operation
    // bufferCommands: false, //turn these on for DB ops to fail when driver...
    // bufferMaxEntries: 0,   //disconnected instead of trying to reconnect
    //family: 4, //driver tries IPv6 first then IPv4. If connection is slow...
  };              //try going straight to 4

  mongoose.connect(process.env.DB_CONNECTION, options); // Initial connection.

  const db = mongoose.connection;

  // Opening a socket on request, and error-handling
  db.once("open", () => console.log("connected to the database"));
  db.on("error", console.error.bind(console, "MongoDB connection error"));

  return callback();
  }
}

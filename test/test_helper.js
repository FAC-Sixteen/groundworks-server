const mongoose = require("mongoose");
//tell mongoose to use es6 implementation of promises
mongoose.Promise = global.Promise;

const options = {
  useNewUrlParser: true, //Previous connection string parser deprecated
  autoIndex: true, //for large production deployment: set to false
  useCreateIndex: true, //silence deprecation warnings
  reconnectTries: Number.MAX_VALUE, //autoreconnect single server or mongo proxy
  reconnectInterval: 500,
  poolSize: 10, //Max sockets driver keeps open for this connection, default 5.
  connectTimeoutMS: 30000, //how long MongoDB waits before killing initial connect
  socketTimeoutMS: 30000 //Set to 2-3x your longest running individual operation
  // bufferCommands: false, //turn these on for DB ops to fail when driver...
  // bufferMaxEntries: 0,   //disconnected instead of trying to reconnect
  //family: 4, //driver tries IPv6 first then IPv4. If connection is slow...
}; //try going straight to 4

mongoose.connect(
  "mongodb://localhost/groundworkstestdb",
  options
);
mongoose.connection
  .once("open", () => console.log("Connected!"))
  .on("error", error => {
    console.warn("Error : ", error);
  });
//Called hooks which runs before something.
beforeEach(done => {
  mongoose.connection.collections.briefs.drop(() => {
    //this function runs after the drop is completed
    //go ahead everything is done now.
  });
  mongoose.connection.collections.clients.drop(() => {
    //this function runs after the drop is completed
    //go ahead everything is done now.
  });
  done();
});

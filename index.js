const app = require('./app');
const dbInit = require('./database/mongoConnect.js')

const port = process.env.PORT || 8080; //Setting server port

app.listen(port, () => {    //Start server
  console.log(`Node/Express server running on port ${port}`);
});

dbInit.mongoConnect(err => {  //Connect to database
  if(err) return console.log(err);
})

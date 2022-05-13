const express = require("express");
const app = express();

const port = 3000;

app.use(express.static(__dirname + "/views"));

app.get('/', function(res,req){
  res.sendfile(__dirname + "/index.html");
})

app.listen(port, function(){
  console.log("Server start");
})

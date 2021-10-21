const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/addissoftware";
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors({
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  origin: '*'
}));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//      next();
// });

mongoose.connect(url, { useNewUrlParser: true });

const con = mongoose.connection;

con.on("open", () => {
  console.log("connected ...");
});

app.use(express.json());

const employeeRouter = require("./routes/Employee");
app.use("/employee", employeeRouter);

app.use(bodyParser.json());


app.use("/", (req, res) => {
  res.json({
    goto: `http://localhost:3001/employee`,
  });
});

app.listen(3001, () => {
  console.log("server started");
});

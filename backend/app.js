const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/addissoftware";
const app = express();

mongoose.connect(url, { useNewUrlParser: true });

const con = mongoose.connection;

con.on("open", () => {
  console.log("connected ...");
});

app.use(express.json());

const employeeRouter = require("./routes/Employee");
app.use("/employee", employeeRouter);
app.use("/", (req, res) => {
  res.json({
    "goto": 'http://localhost:3000/employee'
  });
});

app.listen(3000, () => {
  console.log("server started");
});

const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/addissoftware";
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    origin: "*",
  })
);

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

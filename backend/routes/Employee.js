const express = require("express");
const router = express.Router();
const Employee = require("../models/Employees");

router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(400).send("Error" + err);
  }
});

router.post("/", async (req, res) => {
  const employee = new Employee({
    name: req.body.name,
    birthday: req.body.birthday,
    gender: req.body.gender,
    salary: req.body.salary,
  });

  try {
    const a1 = await employee.save();
    res.json(a1);
  } catch (err) {
    res.status(400).send("Error " + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
  } catch (err) {
    res.status(400).send("Error " + err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    employee.name = req.body.name;
    employee.birthday = req.body.birthday;
    employee.gender = req.body.gender;
    employee.salary = req.body.salary;
    const a1 = await employee.save();
    res.json(a1);
  } catch (err) {
    res.status(400).send("Error " + err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    const name = employee.name;
    employee.delete();
    res.json({ Deleted: name });
  } catch (err) {
    res.status(400).send("Error " + err);
  }
});

module.exports = router;

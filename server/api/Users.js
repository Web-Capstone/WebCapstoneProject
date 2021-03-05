const express = require("express");
const Registration = require("../models/Registration");
const router = express.Router();
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

router.get("/", async (req, res, next) => {
  try {
    const allUsers = await Registration.find();
    console.log(allUsers);
    res.json(allUsers);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const singleUser = await Registration.findById(id);
    res.json(singleUser);
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res) => {
  const { FirstName, LastName, Email, Password } = req.body;
  // Validating
  if (FirstName || LastName || Email || Password) {
    return res.status(400).json({ msg: "PLease Enter all the values" });
  }
  // checking for existing user
  Registration.findOne({ Email }).then((user) => {
    if (user) return res.status(400).json({ msg: "User Already Exists" });
    const newUser = new Registration({
      FirstName,
      LastName,
      Email,
      Password,
    });
  });
});

module.exports = router;

const express = require("express");
const Registration = require("../models/Registration");
const router = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const becrypt = require("bcryptjs");
mongoose.set("useFindAndModify", false);

// shows all the users
router.get("/", async (req, res, next) => {
  try {
    const allUsers = await Registration.find();
    res.json(allUsers);
  } catch (error) {
    next(error);
  }
});

//shows a specific user
router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const singleUser = await Registration.findById(id);
    res.json(singleUser);
  } catch (error) {
    next(error);
  }
});

// Login user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await Registration.findOne({ email });
    if (!existingUser) return res.status(400).json("User Doesn't exist");

    const isPasswordCorrect = await becrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json("Invalid Creditianls ! Try Again");

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.token,
      { expiresIn: "1h" }
    );
    res.status(201).json({ result: existingUser, token });
  } catch (error) {
    res.status(401).json({ msg: "Someting went wrong" });
  }
});

// register user
router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Validating all the required fields
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ msg: "Please Enter all the values" });
  }

  try {
    const existingUser = await Registration.findOne({ email });

    if (existingUser)
      return res.status(404).json({ msg: "User already exist" });

    const hashedPassword = await becrypt.hash(password, 12);

    const result = await Registration.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.token,
      { expiresIn: "1h" }
    );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ msg: "SOmeting went wrong" });
    console.log(error);
  }
});

// route to get posts => use middlware.auth
module.exports = router;

const express = require("express");
const Registration = require("../models/Registration");
const router = expresss.Router();

router.get("/", async (req, res, next) => {
  const id = req.params.id;

  try {
    const allUsers = await Registration.find();
    res.json(allUsers);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

const express = require("express");

const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/auth");

// controller
const { createUserDetails } = require("../controllers/userDetails");

router.post("/createuserdetails", authCheck, createUserDetails);

module.exports = router;

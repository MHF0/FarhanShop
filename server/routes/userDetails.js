const express = require("express");

const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/auth");

// controller
const {
  createUserDetails,
  updateUserDetails,
  getUserDetailsById,
} = require("../controllers/createUserDetaeils");

router.post("/createuserdetails", authCheck, createUserDetails);
router.put("/updateUserDetails", authCheck, updateUserDetails);
router.get("/getUserDetails", authCheck, getUserDetailsById);


module.exports = router;

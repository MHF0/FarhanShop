const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userDetailsSchema = new mongoose.Schema(
  {
    user: { type: ObjectId, ref: "User" },
    firstName: { type: String, required: true, index: true },
    lastName: { type: String, required: true, index: true },
    city: { type: String, required: true, index: true },
    phoneNumber: { type: Number, required: true, index: true },
    region: { type: String, required: true, index: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserDetails", userDetailsSchema);

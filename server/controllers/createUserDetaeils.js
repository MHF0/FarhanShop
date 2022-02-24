const UserDetails = require("../models/userDetaels");
const User = require("../models/user");

exports.createUserDetails = async (req, res) => {
  const user = await User.findOne({ email: req.user.email }).exec();
  const { firstName, lastName, city, phoneNumber, region } = req.body;

  const newUserDetails = new UserDetails({
    user: user._id,
    firstName,
    lastName,
    city,
    phoneNumber,
    region,
  });
  newUserDetails
    .save()
    .then((result) => {
      res.json(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.updateUserDetails = async (req, res) => {
  const user = await User.findOne({ email: req.user.email }).exec();

  const { firstName, lastName, city, phoneNumber, region } = req.body;

  const userAddress = await UserDetails.findOneAndUpdate(
    { user: user._id },
    { firstName, lastName, city, phoneNumber, region }
  ).exec();

  res.json({ ok: true, userAddress });
};

exports.getUserDetailsById = async (req, res) => {
  const user = await User.findOne({ email: req.user.email }).exec();

  const userAddress = await UserDetails.find({ user: user._id }).exec();

  res.json({ ok: true, userAddress });
};

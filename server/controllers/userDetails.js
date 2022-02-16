const UserDetails = require("../database/models/userDetaels");
const User = require("../database/models/user");

exports.createUserDetails = async (req, res) => {
  const user = await User.findOne({ email: req.user.email }).exec();

  const { firstName, lastName, city, phoneNumber, region } = req.body;

  const userAddress = await UserDetails.findOneAndUpdate(
    { user: user._id },
    { firstName, lastName, city, phoneNumber, region }
  ).exec();

  res.json({ ok: true, userAddress });
};


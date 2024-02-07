const { getUserProfile } = require("../userRepo/userRepo");
const asyncHandler = require("express-async-handler");
const message = require("../../../services/Utils/message")

const getUserProfileCtrl = asyncHandler(async (req, res) => {
  // Find the user profile
  const user = await getUserProfile(req.userAuthId);

  res.json({
    status: "success",
    message: message.userprofilefetchsuccessfully,
    user,
  });
});
module.exports = { getUserProfileCtrl };

const asyncHandler = require("express-async-handler");
const { hashPassword } = require("../../../services/Utils/helpers");
const {
  checkUserExists,
  createUser,
} = require("../../User/userRepo/userRepo.js");
const message = require("../../../services/Utils/message");
//import message from "./message"; // Replace with the actual path to your message file

const signup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user exists
  const userExists = await checkUserExists(email);

  if (userExists) {
    throw new Error(message.userAlreadyExists);
  }

  // Hash password
  const hashedPassword = await hashPassword(password);

  // Create the user
  const user = await createUser(name, email, hashedPassword);

  res.status(201).json({
    status: "success",
    message: message.userRegistredSuccesfully,
    data: user,
  });
});

module.exports = signup;

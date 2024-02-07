const asyncHandler = require("express-async-handler");
const { hashPassword } = require("../../User/userRepo/userRepo.js");
const {
  checkUserExists,
  createUser,
} = require("../../User/userRepo/userRepo.js");
const message = require("../../../services/Utils/message");
const generateToken = require("../../../services/Utils/generateToken");
const {
  findUserByEmail,
  isPassMatched,
} = require("../../User/userRepo/userRepo.js");
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

const signin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find the user in the database by email only
  const userFound = await findUserByEmail(email);

  if (userFound && (await isPassMatched(password, userFound?.password))) {
    res.json({
      status: "success",
      message: "User logged in successfully",
      token: generateToken(userFound?._id),
      userFound,
    });
  } else {
    throw new Error("Invalid login credentials");
  }
});

module.exports = { signup, signin };

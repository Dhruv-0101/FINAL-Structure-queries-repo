// userQueries.js
const User = require("../models/userModel");
const becrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const checkUserExists = async (email) => {
  return User.findOne({ email });
};

const createUser = async (
  name,
  email,
  hashedPassword,
  contactMobileNo,
  panNo
) => {
  return User.create({
    name,
    email,
    password: hashedPassword,
    contactMobileNo,
    panNo
  });
};

const hashPassword = async (password) => {
  const salt = await becrypt.genSalt(10);
  const hash = await becrypt.hash(password, salt);
  return hash;
};

const isPassMatched = async (password, hash) => {
  return await becrypt.compare(password, hash);
};
const findUserByEmail = async (email) => {
  return User.findOne({ email });
};
const generateToken = (id) => {
  return jwt.sign({ id }, "anykey", { expiresIn: "5d" });
};
const getUserProfile = async (userId) => {
  return User.findById(userId);
};

module.exports = {
  checkUserExists,
  createUser,
  hashPassword,
  findUserByEmail,
  isPassMatched,
  generateToken,
  getUserProfile,
};

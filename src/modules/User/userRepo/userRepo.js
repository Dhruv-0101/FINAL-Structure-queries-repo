// userQueries.js
const User = require("../models/userModel");
const becrypt = require("bcryptjs");

const checkUserExists = async (email) => {
  return User.findOne({ email });
};

const createUser = async (name, email, hashedPassword) => {
  return User.create({
    name,
    email,
    password: hashedPassword,
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

module.exports = {
  checkUserExists,
  createUser,
  hashPassword,
  findUserByEmail,
  isPassMatched,
};

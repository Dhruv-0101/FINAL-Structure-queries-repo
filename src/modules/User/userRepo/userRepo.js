// userQueries.js
const User = require("../models/userModel");
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

module.exports = {
  checkUserExists,
  createUser,
};

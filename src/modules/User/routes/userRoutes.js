const express = require("express");
const { getUserProfileCtrl } = require("../Controllers/userApiController.js");
const isLoggedIn = require("../../Auth/middleware/isLoggedIn.js");

const userRouter = express.Router();
userRouter.get("/user-profile", isLoggedIn, getUserProfileCtrl);

module.exports = userRouter;

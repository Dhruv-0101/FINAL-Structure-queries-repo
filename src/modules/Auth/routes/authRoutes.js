const express = require("express");
const signup = require("../Controllers/authApiController");
const authRouter = express.Router();
authRouter.post("/signup", signup);
module.exports = authRouter;

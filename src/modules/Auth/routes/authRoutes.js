const express = require("express");
const { signup, signin } = require("../Controllers/authApiController");
const authRouter = express.Router();
authRouter.post("/signup", signup);
authRouter.post("/login", signin);

module.exports = authRouter;

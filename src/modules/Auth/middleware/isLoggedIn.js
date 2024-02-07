const getTokenFromHeader = require("../../../services/Utils/getTokenFromHeader");
const verifyToken = require("../../../services/Utils/verifyToken");
const message = require("../../../services/Utils/message");
const isLoggedIn = (req, res, next) => {
  //get token from header
  const token = getTokenFromHeader(req);
  //verify the token
  const decodedUser = verifyToken(token);
  console.log(decodedUser);
  if (!decodedUser) {
    throw new Error(message.invalidtoken);
  } else {
    //save the user into req obj
    req.userAuthId = decodedUser?.id;
    next();
  }
};

module.exports = isLoggedIn;

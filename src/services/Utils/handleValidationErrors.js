const message = require("../Utils/message");

function handleValidationErrors(error, next) {
  if (error.errors) {
    const customErrors = [];
    Object.keys(error.errors).forEach((field) => {
      switch (field) {
        /* case "contactMobileNo":
         // customErrors.push("Mobile number is not valid");
          customErrors.push(message.mobilenumberisnovalidated);
          break;*/

        default:
          customErrors.push(error.errors[field].message);
          break;
      }
    });

    if (customErrors.length > 0) {
      next(new Error(customErrors.join(", ")));
    } else {
      next(error);
    }
  } else {
    next(error);
  }
}

module.exports = {
  handleValidationErrors,
};

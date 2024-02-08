const mongoose = require("mongoose");
//const Schema = mongoose.Schema;
const moment = require("moment-timezone");
const message = require("../../../services/Utils/message");
const {
  handleValidationErrors,
} = require("../../../../src/services/Utils/handleValidationErrors");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      //required: true,
    },
    contactMobileNo: {
      type: String,
      maxlength: 13,
      validate: {
        validator: function (value) {
          // Use a regular expression for mobile number validation
          return /^[0-9]{10,13}$/.test(value);
        },
        message: message.mobilenumberisnovalidated,
      },
    },
    panNo: {
      type: String,
      maxlength: 31,
      validate: {
        validator: function (value) {
          // Add your custom PAN number validation logic here
          // For example, check if it matches a specific pattern
          return /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(value);
        },
        message: "PAN number is not validddd",
      },
    },
    contactEmail: {
      type: String,
      maxlength: 161,
      validate: {
        validator: function (value) {
          // Use a regular expression for email validation
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: "Email is not valid",
      },
      required: true,
    },
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    id: false,
  }
);

UserSchema.virtual("createdAtIST").get(function () {
  return moment(this.createdAt)
    .tz("Asia/Kolkata")
    .format("YYYY-MM-DDTHH:mm:ss.SSSZ");
});
UserSchema.virtual("updatedAtIST").get(function () {
  return moment(this.updatedAt)
    .tz("Asia/Kolkata")
    .format("YYYY-MM-DDTHH:mm:ss.SSSZ");
});

UserSchema.post("save", function (error, doc, next) {
  handleValidationErrors(error, next);
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

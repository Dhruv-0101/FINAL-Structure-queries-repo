const mongoose = require("mongoose");
const moment = require("moment-timezone");

const UserSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      required: true,
    },
    userType_Term: {
      type: String,
      maxlength: 161,
      required: true,
    },
    associationId: {
      type: Number,
    },
    associationType_Term: {
      type: String,
      maxlength: 37,
    },
    referenceUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    roleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserRole",
    },
    username: {
      type: String,
      maxlength: 61,
    },
    password: {
      type: String,
      maxlength: 61,
    },
    key: {
      type: String,
      maxlength: 61,
    },
    profilePic: {
      type: String,
      maxlength: 37,
    },
    /*createdOn: {
      type: Date,
      default: Date.now,
    },*/
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
    isAchieved: {
      type: Boolean,
      default: false,
    },
    lastLogin: {
      type: Date,
    },
    isDefaultUser: {
      type: Boolean,
      default: false,
    },
    updateLog: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
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

const User = mongoose.model("User", UserSchema);

module.exports = User;

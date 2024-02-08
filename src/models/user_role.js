const mongoose = require("mongoose");
const moment = require("moment-timezone");

const userRoleSchema = new mongoose.Schema(
  {
    roleId: {
      type: Number,
      required: true,
    },
    roleType_Term: {
      type: String,
      maxlength: 37,
      required: true,
    },
    roleName: {
      type: String,
      maxlength: 61,
      required: true,
    },
    referenceRoleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      //required: true,
    },
    isDefault: {
      type: Boolean,
      default: false,
    },
    /*createdOn: {
      type: Date,
      default: Date.now,
    },*/
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isArchived: {
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
userRoleSchema.virtual("createdAtIST").get(function () {
  return moment(this.createdAt)
    .tz("Asia/Kolkata")
    .format("YYYY-MM-DDTHH:mm:ss.SSSZ");
});
userRoleSchema.virtual("updatedAtIST").get(function () {
  return moment(this.updatedAt)
    .tz("Asia/Kolkata")
    .format("YYYY-MM-DDTHH:mm:ss.SSSZ");
});

const UserRole = mongoose.model("UserRole", userRoleSchema);

module.exports = UserRole;

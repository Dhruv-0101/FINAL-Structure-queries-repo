const mongoose = require("mongoose");
const moment = require("moment-timezone");

const storeSchema = new mongoose.Schema(
  {
    storeId: {
      type: Number,
      required: true,
    },
    businessOwnerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BusinessOwner",
    },
    storeContactName: {
      type: String,
      maxlength: 161,
    },
    storeContactNo: {
      type: String,
      maxlength: 13,
    },
    storeContactEmail: {
      type: String,
      maxlength: 161,
    },
    storePicture: {
      type: String,
      maxlength: 371,
    },
    address1: {
      type: String,
      maxlength: 361,
    },
    address2: {
      type: String,
      maxlength: 361,
    },
    location: {
      type: String,
      maxlength: 361,
    },
    city: {
      type: String,
      maxlength: 361,
    },
    state: {
      type: String,
      maxlength: 361,
    },
    country: {
      type: String,
      maxlength: 361,
    },
    zipcode: {
      type: String,
      maxlength: 7,
    },
    mapline: {
      type: String,
      maxlength: 39,
    },
    addedOn: {
      type: Date,
      default: Date.now,
    },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BusinessOwner",
    },
    statusTerm: {
      type: String,
      maxlength: 61,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verifiedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BusinessOwner",
    },
    isAchieve: {
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

storeSchema.virtual("createdAtIST").get(function () {
  return moment(this.createdAt)
    .tz("Asia/Kolkata")
    .format("YYYY-MM-DDTHH:mm:ss.SSSZ");
});
storeSchema.virtual("updatedAtIST").get(function () {
  return moment(this.updatedAt)
    .tz("Asia/Kolkata")
    .format("YYYY-MM-DDTHH:mm:ss.SSSZ");
});

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;
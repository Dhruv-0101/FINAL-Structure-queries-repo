const mongoose = require("mongoose");
const moment = require("moment-timezone");
const {
  handleValidationErrors,
} = require("../services/Utils/handleValidationErrors");

const businessOwnerSchema = new mongoose.Schema(
  {
    businessOwnerId: {
      type: Number,
      required: true,
    },
    companyName: {
      type: String,
      maxlength: 61,
      required: true,
    },
    displayName: {
      type: String,
      maxlength: 61,
      required: true,
    },
    businessType: {
      type: String,
      maxlength: 61,
    },
    registrationNo: {
      type: String,
      maxlength: 61,
    },
    panNo: {
      type: String,
      maxlength: 31,
      validate: {
        validator: function (value) {
          return /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(value);
        },
        message: "PAN number is not valid",
      },
    },
    gstNo: {
      type: String,
      maxlength: 31,
      validate: {
        validator: function (value) {
          return /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[0-9A-Z]{1}$/.test(
            value
          );
        },
        message: "GST number is not valid",
      },
    },

    companyLogo: {
      type: String,
      maxlength: 316,
    },
    contactName: {
      type: String,
      maxlength: 161,
    },
    contactMobileNo: {
      type: String,
      maxlength: 13,
      validate: {
        validator: function (value) {
          return /^[0-9]{10,13}$/.test(value);
        },
        message: "Mobile number is not valid",
      },
    },
    contactEmail: {
      type: String,
      maxlength: 161,
      validate: {
        validator: function (value) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: "Email is not valid",
      },
    },
    websiteUrl: {
      type: String,
      maxlength: 161,
    },
    facebookProfilePage: {
      type: String,
      maxlength: 161,
      validate: {
        validator: function (value) {
          return /^(https?:\/\/)?(www\.)?facebook\.com\/[a-zA-Z0-9_.-]+\/?$/.test(
            value
          );
        },
        message: "Facebook profile page URL is not valid",
      },
    },
    instagramProfilePage: {
      type: String,
      maxlength: 161,
      validate: {
        validator: function (value) {
          return /^(https?:\/\/)?(www\.)?instagram\.com\/[a-zA-Z0-9_.-]+\/?$/.test(
            value
          );
        },
        message: "Instagram profile page URL is not valid",
      },
    },
    pinterestPage: {
      type: String,
      maxlength: 161,
      validate: {
        validator: function (value) {
          return /^(https?:\/\/)?(www\.)?pinterest\.com\/[a-zA-Z0-9_.-]+\/?$/.test(
            value
          );
        },
        message: "Pinterest page URL is not valid",
      },
    },

    whatsappNo: {
      type: String,
      maxlength: 13,
      validate: {
        validator: function (value) {
          return /^[0-9]{10,13}$/.test(value);
        },
        message: message.mobilenumberisnovalidated,
      },
    },
    statusTerm: {
      type: String,
      maxlength: 71,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    isAchieve: {
      type: Boolean,
      default: false,
    },
    updateLog: {
      type: Date,
      default: Date.now,
    },
    isServices: {
      type: Number,
    },
    servicesTypes: {
      type: String,
      maxlength: 362,
    },
    isProducts: {
      type: Boolean,
    },
    productTypes: {
      type: String,
      maxlength: 361,
    },
    totalReviews: {
      type: Number,
    },
    AvgRatings: {
      type: Number,
    },
    membershipType_Term: {
      type: String,
      maxlength: 361,
    },
    renewalDate: {
      type: Date,
    },
    renewalAmt: {
      type: Number,
    },
    isVerified: {
      type: Boolean,
    },
    verifiedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    registeredAddressId: {
      type: Number,
    },
    isInvited: {
      type: Number,
    },
    referralMemberId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Member",
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
businessOwnerSchema.virtual("createdAtIST").get(function () {
  return moment(this.createdAt)
    .tz("Asia/Kolkata")
    .format("YYYY-MM-DDTHH:mm:ss.SSSZ");
});
businessOwnerSchema.virtual("updatedAtIST").get(function () {
  return moment(this.updatedAt)
    .tz("Asia/Kolkata")
    .format("YYYY-MM-DDTHH:mm:ss.SSSZ");
});

businessOwnerSchema.post("save", function (error, doc, next) {
  handleValidationErrors(error, next);
});

const BusinessOwner = mongoose.model("BusinessOwner", businessOwnerSchema);

module.exports = BusinessOwner;

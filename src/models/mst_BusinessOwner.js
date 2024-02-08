const mongoose = require("mongoose");
const moment = require("moment-timezone");

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
          // Add your custom PAN number validation logic here
          // For example, check if it matches a specific pattern
          return /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(value);
        },
        message: "PAN number is not valid",
      },
    },
    gstNo: {
      type: String,
      maxlength: 31,
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
    },

    contactEmail: {
      type: String,
      maxlength: 161,
    },
    websiteUrl: {
      type: String,
      maxlength: 161,
    },
    facebookProfilePage: {
      type: String,
      maxlength: 161,
    },
    instagramProfilePage: {
      type: String,
      maxlength: 161,
    },
    pinterestPage: {
      type: String,
      maxlength: 161,
    },
    whatsappNo: {
      type: String,
      maxlength: 13,
    },
    statusTerm: {
      type: String,
      maxlength: 71,
    },
    /*createdAt: {
    type: Date,
    default: Date.now,
  },*/
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    /*updatedAt: {
    type: Date,
    default: Date.now,
  },*/
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

const BusinessOwner = mongoose.model("BusinessOwner", businessOwnerSchema);

module.exports = BusinessOwner;

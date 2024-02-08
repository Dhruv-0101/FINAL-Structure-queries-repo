const mongoose = require("mongoose");
const moment = require("moment-timezone");

const memberSchema = new mongoose.Schema({
  memberId: {
    type: Number,
    required: true,
  },
  memberType_Term: {
    type: String,
    maxlength: 61,
  },
  firstName: {
    type: String,
    maxlength: 61,
  },
  lastName: {
    type: String,
    maxlength: 61,
  },
  displayName: {
    type: String,
    maxlength: 121,
  },
  profilePicture: {
    type: String,
    maxlength: 37,
  },
  mobileNo: {
    type: String,
    maxlength: 13,
  },
  email: {
    type: String,
    maxlength: 161,
  },
  whatsappNo: {
    type: String,
    maxlength: 13,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  totalReviews: {
    type: Number,
  },
  avgRatings: {
    type: Number,
  },
  lastBusinessDate: {
    type: Date,
  },
  totalBusiness: {
    type: Number,
  },
  area: {
    type: String,
    maxlength: 161,
  },
  city: {
    type: String,
    maxlength: 161,
  },
  state: {
    type: String,
    maxlength: 161,
  },
  country: {
    type: String,
    maxlength: 161,
  },
  houseNo: {
    type: String,
    maxlength: 161,
  },
  streetName: {
    type: String,
    maxlength: 161,
  },
  genderType_Term: {
    type: String,
    maxlength: 17,
  },
  dateOfBirth: {
    type: Date,
  },
  age: {
    type: Number,
  },
  anniversaryDate: {
    type: Date,
  },
  fullPhotos: {
    type: String,
    maxlength: 371,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  invitedBy: {
    type: Number,
  },
  verifiedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  statusTerm: {
    type: String,
    maxlength: 61,
  },
  isAchieve: {
    type: Boolean,
    default: false,
  },
  referenceMemberId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Member",
  },
  relationWithRefMember_Term: {
    type: String,
    maxlength: 161,
  },
  albumId: {
    type: Number,
  },
  updateLog: {
    type: Date,
    default: Date.now,
  },
});
memberSchema.virtual("createdAtIST").get(function () {
  return moment(this.createdAt)
    .tz("Asia/Kolkata")
    .format("YYYY-MM-DDTHH:mm:ss.SSSZ");
});
memberSchema.virtual("updatedAtIST").get(function () {
  return moment(this.updatedAt)
    .tz("Asia/Kolkata")
    .format("YYYY-MM-DDTHH:mm:ss.SSSZ");
});

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;

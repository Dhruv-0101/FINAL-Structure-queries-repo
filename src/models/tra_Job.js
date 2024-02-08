const mongoose = require("mongoose");
const moment = require("moment-timezone");

const jobSchema = new mongoose.Schema({
  jobId: {
    type: Number,
    required: true,
  },
  jobNumber: {
    type: Number,
    required: true,
  },
  businessOwnerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BusinessOwner",
  },
  storeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Store",
  },
  memberId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Member",
  },
  jobName: {
    type: String,
    maxlength: 371,
  },
  jobDetails: {
    type: String,
    maxlength: 371,
  },
  jobType: {
    type: String,
    maxlength: 61,
  },
  jobStatus: {
    type: String,
    maxlength: 37,
  },
  totalAmount: {
    type: Number,
  },
  totalPaidAmount: {
    type: Number,
  },
  dueAmount: {
    type: Number,
  },
  storeNote: {
    type: String,
    maxlength: 3710,
  },
  memberNote: {
    type: String,
    maxlength: 371,
  },
  albumId: {
    type: Number,
  },
  expectedDateOfDelivery: {
    type: Date,
  },
  jobDate: {
    type: Date,
  },
  currentStageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "JobStage",
  },
  isAchieve: {
    type: Boolean,
    default: false,
  },
  updatedLog: {
    type: Date,
    default: Date.now,
  },
  memberRating: {
    type: Number,
  },
  memberReview: {
    type: String,
    maxlength: 361,
  },
  memberAlbumId: {
    type: Number,
  },
  agencyRatingToMember: {
    type: Number,
  },
  agencyReviewForMember: {
    type: String,
    maxlength: 361,
  },
});
jobSchema.virtual("createdAtIST").get(function () {
  return moment(this.createdAt)
    .tz("Asia/Kolkata")
    .format("YYYY-MM-DDTHH:mm:ss.SSSZ");
});
jobSchema.virtual("updatedAtIST").get(function () {
  return moment(this.updatedAt)
    .tz("Asia/Kolkata")
    .format("YYYY-MM-DDTHH:mm:ss.SSSZ");
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;

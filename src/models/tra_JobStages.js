const mongoose = require("mongoose");
const moment = require("moment-timezone");

const jobStageSchema = new mongoose.Schema({
  jobStageId: {
    type: Number,
    required: true,
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
  },
  stageName: {
    type: String,
    maxlength: 61,
  },
  businessOwnerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BusinessOwner",
  },
  storeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Store",
  },
  dateOfAssign: {
    type: Date,
  },
  assignedBy: {
    type: Number,
  },
  expectedDateOfDelivery: {
    type: Date,
  },
  actualDateOfDelivery: {
    type: Date,
  },
  businessOwnerQuote: {
    type: Number,
  },
  instruction: {
    type: String,
    maxlength: 3710,
  },
  albumId: {
    type: Number,
  },
  orderNo: {
    type: Number,
  },
  isAchieve: {
    type: Boolean,
    default: false,
  },
  updateLog: {
    type: Date,
    default: Date.now,
  },
});

stagesAttributeSchema.virtual("createdAtIST").get(function () {
  return moment(this.createdAt)
    .tz("Asia/Kolkata")
    .format("YYYY-MM-DDTHH:mm:ss.SSSZ");
});
stagesAttributeSchema.virtual("updatedAtIST").get(function () {
  return moment(this.updatedAt)
    .tz("Asia/Kolkata")
    .format("YYYY-MM-DDTHH:mm:ss.SSSZ");
});

const JobStage = mongoose.model("JobStage", jobStageSchema);

module.exports = JobStage;

const mongoose = require("mongoose");
const moment = require("moment-timezone");

const stagesAttributeSchema = new mongoose.Schema({
  stagesAttributeId: {
    type: Number,
    required: true,
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
  },
  jobStageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "JobStage",
  },
  memberId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Member",
  },
  attributeType: {
    type: String,
    maxlength: 61,
  },
  attributeName: {
    type: String,
    maxlength: 61,
  },
  attributeValue: {
    type: String,
    maxlength: 61,
  },
  unitOfMeasure: {
    type: String,
    maxlength: 61,
  },
  albumId: {
    type: Number,
  },
  orderNo: {
    type: Number,
  },
  verifiedBy: {
    type: Number,
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

const StagesAttribute = mongoose.model(
  "StagesAttribute",
  stagesAttributeSchema
);

module.exports = StagesAttribute;

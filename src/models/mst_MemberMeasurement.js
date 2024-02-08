const mongoose = require("mongoose");
const moment = require("moment-timezone");

const measurementSchema = new mongoose.Schema({
  measurementId: {
    type: Number,
    required: true,
  },
  memberId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Member",
  },
  attributeType_Term: {
    type: String,
    maxlength: 61,
  },
  attribute_Term: {
    type: String,
    maxlength: 161,
  },
  measure: {
    type: String,
    maxlength: 37,
  },
  unitOfMeasure: {
    type: String,
    maxlength: 37,
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Member",
  },
  updatedByType_Term: {
    type: String,
    maxlength: 61,
  },
  albumId: {
    type: Number,
  },
  orderNo: {
    type: Number,
  },
});
measurementSchema.virtual("createdAtIST").get(function () {
  return moment(this.createdAt)
    .tz("Asia/Kolkata")
    .format("YYYY-MM-DDTHH:mm:ss.SSSZ");
});
measurementSchema.virtual("updatedAtIST").get(function () {
  return moment(this.updatedAt)
    .tz("Asia/Kolkata")
    .format("YYYY-MM-DDTHH:mm:ss.SSSZ");
});

const Measurement = mongoose.model("Measurement", measurementSchema);

module.exports = Measurement;

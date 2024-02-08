const mongoose = require("mongoose");
const moment = require("moment-timezone");

const ProjectTermSchema = new mongoose.Schema(
  {
    termId: {
      type: Number,
      required: true,
    },
    termCategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TermCategory",
    },
    termCode: {
      type: String,
      maxlength: 5,
      required: true,
    },
    term: {
      type: String,
      maxlength: 161,
    },
    termDetails: {
      type: String,
      maxlength: 361,
    },
    hardCodeValue: {
      type: String,
      maxlength: 17,
    },
    isDefault: {
      type: Boolean,
      default: false,
    },
    orderNo: {
      type: Number,
    },
    isAchieve: {
      type: Boolean,
      default: false,
    },
    refTermId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProjectTerm",
    },
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);
ProjectTermSchema.virtual("createdAtIST").get(function () {
  return moment(this.createdAt)
    .tz("Asia/Kolkata")
    .format("YYYY-MM-DDTHH:mm:ss.SSSZ");
});
ProjectTermSchema.virtual("updatedAtIST").get(function () {
  return moment(this.updatedAt)
    .tz("Asia/Kolkata")
    .format("YYYY-MM-DDTHH:mm:ss.SSSZ");
});

const ProjectTerm = mongoose.model("ProjectTerm", ProjectTermSchema);

module.exports = ProjectTerm;

const mongoose = require("mongoose");
const moment = require("moment-timezone");

const ProjectTermCategorySchema = new mongoose.Schema(
  {
    termCategoryId: {
      type: Number,
      required: true,
    },
    categoryCode: {
      type: String,
      maxlength: 5,
    },
    categoryName: {
      type: String,
      maxlength: 161,
    },
    referenceTermCategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TermCategory",
    },
    categoryDetails: {
      type: String,
      maxlength: 361,
    },
    isAchieve: {
      type: Boolean,
      default: false,
    },
    orderNo: {
      type: Number,
    },
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);
ProjectTermCategorySchema.virtual("createdAtIST").get(function () {
  return moment(this.createdAt)
    .tz("Asia/Kolkata")
    .format("YYYY-MM-DDTHH:mm:ss.SSSZ");
});
ProjectTermCategorySchema.virtual("updatedAtIST").get(function () {
  return moment(this.updatedAt)
    .tz("Asia/Kolkata")
    .format("YYYY-MM-DDTHH:mm:ss.SSSZ");
});

const ProjectTermCategory = mongoose.model(
  "TermCategory",
  ProjectTermCategorySchema
);

module.exports = ProjectTermCategory;

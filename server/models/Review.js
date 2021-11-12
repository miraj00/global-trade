const { Schema } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const reviewSchema = new Schema(
  {
    reviewId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reviewBody: {
      type: String,
        required: true,
      minLength: [10, "must contain more than 10 characters"],
      maxLength: 500,
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reviewSchema;
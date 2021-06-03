const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema(
  {
    trail_id: { type: String, required: true },
    rating: { type: String, required: true },
    conditions: { type: String, required: true },
    comment: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('comments', Comment)

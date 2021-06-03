const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Comment = require('./comment')

const Trail = new Schema(
  {
    name: { type: String, required: true },
    length: { type: Number, required: true },
    elevationGain: { type: Number, required: true },
    location: { type: String, required: true },
    difficulty: { type: String, required: true },
    routeType: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: 'comments' }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('trails', Trail)

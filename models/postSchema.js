const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    heading: {
      type: String,
    },
    image_url: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('PostSchema', PostSchema)

const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  featuredImage: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Sports', 'Anime', 'Music'],
    default: 'uncategorized',
    required: true
  },
  tags: {
    type: [String],
    default: []
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
    default: []
  }]
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);

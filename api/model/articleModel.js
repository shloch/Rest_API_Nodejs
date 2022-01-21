'use strict';
const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: 'Enter title'
    },
    content: {
        type: String,
        required: 'Enter content'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
  
});

const Article = mongoose.model('Article', ArticleSchema)

module.exports = Article
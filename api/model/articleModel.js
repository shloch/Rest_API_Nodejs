'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
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
module.exports = mongoose.model('Articles', ArticleSchema);
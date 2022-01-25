'use strict';
const mongoose = require('mongoose'),
    Article = mongoose.model('Article');
  
exports.list_all_articles = (req, res) => {
  Article.find({}, (err, articles) => {
    if (err)
      res.send(err);
    res.json(articles);
  });
};
exports.create_article = (req, res) => {
  let new_Article = new Article(req.body);
  new_Article.save((err, article) => {
    if (err)
      res.send(err);
    res.json(article);
  });
};
exports.read_article = (req, res) => {
  Article.findById(req.params.articleId, (err, article) => {
    if (err)
      res.send(err);
    res.json(article);
  });
};
exports.update_article = (req, res) => {
 Article.findOneAndUpdate({_id: req.params.articleId}, req.body, {new: true}, (err, article) => {
    if (err)
      res.send(err);
    res.json(article);
  });
};
exports.delete_article = (req, res) => {
  Article.remove({
    _id: req.params.articleId
  }, (err, Article) => {
    if (err)
      res.send(err);
    res.json({ message: 'Article successfully deleted' });
  });
};
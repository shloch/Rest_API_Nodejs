'use strict';
module.exports = (app) => {
    const articleList = require('../controllers/articleController');
  app.route('/articles')
    .get(articleList.list_all_articles)
    .post(articleList.create_article);
  app.route('/articles/:artcleId')
    .get(articleList.read_article)
    .put(articleList.update_article)
    .delete(articleList.delete_article);
};
const getUserInfo = require('./getUseInfo');
const getUsernameQuery = require('./getUsernameQuery');
const postBlogDB = require('./postBlogDB');
const getAllBlogsQuery = require('./getAllBlogsQuery');
const getUserNameUponIdQuery = require('./getUserNameUponIdQuery');
const getUserIdQuery = require('./getUserIdQuery');
const sigupQuery = require('./signupDB');

module.exports = {
  getUserInfo,
  getUsernameQuery,
  postBlogDB,
  getAllBlogsQuery,
  getUserNameUponIdQuery,
  getUserIdQuery,
  sigupQuery,
};

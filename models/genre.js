const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Genre = new Schema({
    name: {type: String, required:true}
});

// 虚拟属性'url'：图书类型 URL
Genre
  .virtual('url')
  .get(function () {
    return '/catalog/genre/' + this._id;
  });
  
// 导出 Genre 模型
module.exports = mongoose.model('Genre', Genre);
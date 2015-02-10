define(function (require, exports, module) {
  var ar = require('./build/a-render.js');
  var html = ar({
    a:'hello world'
  })
  module.exports = html;
})

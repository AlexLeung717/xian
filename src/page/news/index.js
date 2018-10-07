

require('./index.scss');
require('../common/header/index.js');
let tools = require('../../util/tool.js');

let newsIndex = {
    init: function(){
      this.onLoad();
    },
    onLoad: function(){
      $('#header .nav-list a').each(function(){
          var _this = $(this);
          if( _this.data('type') == 'news' ){
            _this.addClass('active');
          }
      })
    }
}

$(function(){
    newsIndex.init();
})





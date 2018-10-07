

require('./index.scss');
require('../common/header/index.js');
require('../common/sideTop/index.js');
let tools = require('../../util/tool.js');

let pageIndex = {
    init: function(){
      this.onLoad();
    },
    onLoad: function(){
      $('#header .nav-list a').each(function(){
          var _this = $(this);
          if( _this.data('type') == 'joke' ){
            _this.addClass('active');
          }
      })
    }
}

$(function(){
  pageIndex.init();
})






// let tools = require('../../util/tool.js');

// let param = {
//   sort      : '',
//   page      : 1,
//   pageSize  : 10,
//   time      : '',
//   key       :'',  
// }

// tools.request({
//     url: 'http://v.juhe.cn/joke/content/list.php?key=e86af9740aef454c9232ba5914603157&page=2&pagesize=10&sort=asc&time=1418745237',
//     type: 'GET',
//     dataType: 'jsonp'

// }, function(res){
//     console.log( res ); 
// }, function(err){
//     console.log(err);
// })


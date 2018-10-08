

require('./index.scss');
require('../common/header/index.js');
require('../common/sideTop/index.js');

let loading = `
      <div id="loading">
          <span class="bounce bounce1"></span>
          <span class="bounce bounce2"></span>
          <span class="bounce bounce3"></span>
      </div>
`;
let tools = require('../../util/tool.js');


const latestUrl = 'http://v.juhe.cn/joke/content/text.php';
const randomUrl = 'http://v.juhe.cn/joke/randJoke.php';

let params = {
  page     : 1,
  pagesize : 8,
  key      : KEY
}

let jokeCon = $('.joke-con'),
    jokeTemp = $('#joke-template').html();

let pageIndex = {
    
    init: function(){
      this.onLoad();
      this.bindEvent();
    },
    onLoad: function(){
      $('#header .nav-list a').each(function(){
          let _this = $(this);
          if( _this.data('type') == 'joke' ){
            _this.addClass('active');
          }
      })
      this.loadData('lastest');
    },
    bindEvent: function(){
      let _self = this;
      
      $('.filter').on('click', 'a', function(){
         let _this = $(this),
             type = _this.data('type');
         _this.addClass('cur').siblings('a').removeClass('cur');
         _self.loadData(type);
      })
    },
    loadData: function(type){

      let Url;

      Url = type == 'lastest' ? latestUrl : randomUrl;

      tools.request({
        url : Url,
        type: 'GET',
        data: params,
        dataType: 'JSONP',
      }, function(res){
          
          jokeCon.html( loading );
         

          // let data = res.result.data || res.result,
          //     html = '';

          // for( let i = 0; i < data.length; i++ ){
          //   html += tools.renderHtml( jokeTemp, data[i] );
           
          // }
          let html = '';
          setTimeout(()=>{
            html = '没有数据啦';
            jokeCon.html( html );
          }, 3000);
          

          
      })

    }
}

$(function(){
  pageIndex.init();
})



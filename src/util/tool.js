
let hogan = require('hogan.js');

let tools = {

    // jQuery ajax封装
    request: function(params, resolve, reject){
        $.ajax({
            url         : params.url || '',
            type        : params.type || 'GET',
            data        : params.data,
            dataType    : params.dataType || 'json',
            success     : function(res){
                resolve(res);
            },  
            error       : function(err){
                reject(err);
            }
        })
    },

    // 获取url中的参数值
    getUrlParams: function(name){
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        let result = window.location.search.substr(1).match(reg);
        return result ? unescape(result[2]) : null;
    },

    // 操作成功提示
    successTips: function(txt){
        alert( txt || "操作成功" );
    },

    // 操作错误提示
    errorTips: function(txt){
        alert( txt || "操作失败" )
    },

    // html渲染
    renderHtml: function(templateHtml, data){
        let temp    = hogan.compile(templateHtml),
            result  = temp.render(data); 
        return result;
    },

    // 回到首页
    goHome: function(){
        window.location.href = './index.html';
    },

    // 非空、手机号、邮箱等验证
    validate: function(value, type){
        let val = $.trim( value );
        
        switch(type){
            case 'require' :
                return !!val;
                break;
            case 'phone' :
                return /^1\d{10}$/.test(val);
                break;
            case 'email':
                return /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g.test(val);
                break;
        }

    }


}

module.exports = tools;
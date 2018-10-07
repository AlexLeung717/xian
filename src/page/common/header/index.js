
let isAnimated = false; // 动画加锁

let header = {
    init: function(){
        this.bindEvent();
    },
    bindEvent: function(){
        let win = $(window),
            header = $('#header');

        win.scroll(function(){
            let winHeight = win.scrollTop();
            // 当滚动高度大于500px时，header悬浮
            if( winHeight > 500 ){
                header.addClass('headerFix');

                // 以动画形式显示滚动条
                if( !isAnimated ){
                    isAnimated = true;
                    header.css('top', '-60px'); // 此时top:0,需要设置该样式
                    header.animate({
                        top : 0,
                    }, 300)
                }
            }else {
                isAnimated = false;
                header.removeClass('headerFix');
            }
        })
    }
}

header.init();



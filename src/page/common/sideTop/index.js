

let sideTop = {
    init: function(){
        this.bindEvent();
    },
    bindEvent: function(){
        let sideTop = $('.backToTop');
        let win = $(window);

        // 回到顶部图标实现/隐藏
        win.scroll(() => {
            if (win.scrollTop() > 600) {
                sideTop.show(150);
            } else {
                sideTop.hide(150);
            }
        })
        
        // 回到顶部事件
        sideTop.click(() => {
            $('html, body').animate({
                scrollTop : 0,
            }, 500);
        });
    }
}

sideTop.init();
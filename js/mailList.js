/**
 * Created by Administrator on 2016/10/7.
 */
requirejs.config({
    baseUrl:"./js",//配置基础路径
    //urlArgs:"v=1.2.0",//对所有的js文件加版本信息
    paths:{
        jquery:"lib/jquery.min"//起别名
    }
});
//下拉菜单
requirejs(['jquery'],function($){
    var dtNode=$('.J_select');
    var ddNode=$('.J_header-list');

    function cancelBubble(e) {
        var evt = e ? e : window.event;
        if (evt.stopPropagation) {//W3C
            evt.stopPropagation();
        }
        else {//IE
            evt.cancelBubble = true;
        }
    }
    dtNode.click(function(e){
        ddNode.css({display:'block'});
        cancelBubble(e);
    });
    document.body.onclick=function(){
        ddNode.css({display:'none'});
    }
    ddNode.onclick=function(e){
        cancelBubble(e);
    }
})
//dd的背景
requirejs(['jquery'],function($){
    console.log(111);
    $('.mailList dd:even').css("background-color", "#fff");
    $('.mailList dd:odd').css("background-color", "#f7f8f9");
})

requirejs(['jquery'],function($){
    $('.mL-footer span').mouseover(function(){
        $('.mL-footer span').removeClass('n-f-current');
        $(this).addClass('n-f-current');
    })
})
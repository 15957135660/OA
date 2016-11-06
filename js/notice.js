/**
 * Created by Administrator on 2016/9/30.
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
//列表展开收缩
requirejs(['jquery'],function($){
    var divNode=$('.notice-list div');
    var newPos,oldPos;

    divNode.click(function(){
        newPos=$(this).parent().index();
        oldPos=$('.listUp').parent().index();
        console.log(oldPos,newPos);

        $('.notice-list .list-current').children('p').removeClass("list-p-current");
        $('.notice-list .list-current').children('table').removeClass("table-current");
        $('.notice-list .list-current').children('div').removeClass("listUp").addClass("listDown");
        $('.notice-list .list-current').children('div').html('显示全部<i></i>');
        $('.notice-list .list-current').removeClass("list-current");

        $(this).parent().addClass('list-current');
        $(this).parent().children('p').addClass('list-p-current');
        $(this).parent().children('table').addClass('table-current');
        $(this).parent().children('div').removeClass('listDown').addClass('listUp');
        $(this).parent().children('div').html('收起<i></i>');
    })
})
//footer的span切换
requirejs(['jquery'],function($){
    $('.notice-footer span').mouseover(function(){
        $('.notice-footer span').removeClass('n-f-current');
        $(this).addClass('n-f-current');
    })
})
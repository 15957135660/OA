/**
 * Created by Administrator on 2016/10/6.
 */
requirejs.config({
    baseUrl:"./js",//配置基础路径
    //urlArgs:"v=1.2.0",//对所有的js文件加版本信息
    paths:{
        jquery:"lib/jquery.min"//起别名
    }
});//下拉菜单
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
//保存提交
requirejs(['jquery'],function($){
    $('.p-m-submit').click(function(){
        $.ajax({
            type:'POST',
            url:'json/json1.json',
            data:'',
            dataType:'json',
            success:function(){
            },
            error:function(){
                alert('系统正忙！请稍后')
            }
        })
    })
})

requirejs.config({
	baseUrl:"./js",//配置基础路径
	//urlArgs:"v=1.2.0",//对所有的js文件加版本信息
	paths:{
		jquery:"lib/jquery.min"//起别名
	}/*,
    shim:{ //如果js文件不支持AMD
        'iscrollProbe': {
             exports: 'iscrollProbe'
         }
    }*/
});

//导航
//requirejs(["jquery"],function($){
//	var lisNode=$('.J_nav li');
//	var navLine=$('.J_nav .nav-line');
//	var navNode=$('.J_nav');
//	var currentNode=$('.J_nav .current')
//	lisNode.mouseenter(function(){
//		var liX=$(this).position().left;
//		navLine.stop().animate({left:liX+"px"},200);
//	});
//	navNode.mouseleave(function(){
//		var liX=currentNode.position().left;
//		navLine.stop().animate({left:liX+"px"},200);
//	});
//});

//下拉和背景选择框
requirejs(["jquery"],function($){
	var dtNode=$('.J_select');
    var ddNode=$('.J_header-list');
    var divSelectNode=$('.J_indexBgSelect');
    var divLIstNode=$('.J_bg-list');
    var headerNavList=$('.J_header-list li');
    var littleTriangle=$('.littleUpTriangle');
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
    divSelectNode.click(function(e){
        divLIstNode.css({display:'block'});
        littleTriangle.css({display:'block'});
        cancelBubble(e);
    });
    document.body.onclick=function(){
        ddNode.css({display:'none'});
        divLIstNode.css({display:'none'});
        littleTriangle.css({display:'none'});
    }
    ddNode.onclick=function(e){
        cancelBubble(e);
    }
    divLIstNode.onclick=function(e){
        cancelBubble(e);
    }

    var listDdNode=$('.J_bg-list dd');
    var oldPos,newPos;
    var bigBgNode=$('.headPortrait');
    function transformBg(obj,newPos){
        obj.css({'background-image':"url('images/bigBackground/Bigimg"+newPos+".jpg')"});
        $.ajax({
            type:'POST',
            url:'json/json.json',
            data:'newPos',
            dataType:'json',
            success:function(){
            },
            error:function(){
                alert('系统正忙！请稍后')
            }
        })
    }
    function getOldPos(obj){
        var oldValue=obj.css('background-image');
        var startSli=oldValue.lastIndexOf('.');
        oldPos=oldValue.slice(startSli-1,startSli);
        if(oldPos==0)
            oldPos=10;
        return oldPos;
    }
    listDdNode.click(function(){
        newPos=$(this).index();
        transformBg(bigBgNode,newPos);
    })
    //向左切换
    var divBgLeftNode=$('.bgLeft');
    var divBgRightNode=$('.bgRight');
    divBgLeftNode.click(function(){
        getOldPos(bigBgNode);
        newPos=oldPos==1?10:oldPos-1;
        transformBg(bigBgNode,newPos);
    })
    //向右切换
    divBgRightNode.click(function(){
        getOldPos(bigBgNode);
        newPos=oldPos==10?1:parseInt(oldPos)+1;
        transformBg(bigBgNode,newPos);
    })
});
//首页导航切换
requirejs(["jquery"],function($) {
    $('.index-nav li').mouseover(function(){
        $(this).children('div').stop().animate({top:'0'},200);
    })
    $('.index-nav li').mouseout(function(){
        $(this).children('div').stop().animate({top:'196px'},200);
    })
});

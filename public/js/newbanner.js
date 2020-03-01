//首页轮播

$(function () {
    // 轮播图开始 
    var left = $('.content_middle .btnLeft');//获取左点击
    var right = $('.content_middle .btnRight');//获取右点击
    var aSmall;
    var aLi = $('.content_middle ul li');
    var liLength = $('.content_middle ul li').length;
    var iNow = 0;
    if (liLength > 1) {
        $(".table").show();
    };

    for (var i = 0; i < liLength; i++) {
        $(".table").append("<div class='table-block'></div>");
        $(".table .table-block").eq(0).addClass('small_active');
    };

    $(".index-header .carousel-list li").eq(0).css({ "opacity": 1, "z-index": 2 });
    $(".index-header .carousel-list li").eq(0).siblings().css({ "opacity": 0, "z-index": 1 });

    aSmall = $('.content_middle .table div');
    // 左点击  
    left.click(function () {
        iNow--;
        // 判断回流
        if (iNow < 0) {
            iNow = liLength - 1;
        }
        aLi.eq(iNow).siblings().stop().animate({
            opacity: 0

        }, 800).css("z-index", 1);
        aLi.eq(iNow).stop().animate({
            opacity: 1

        }, 800).css("z-index", 2);
        aSmall.eq(iNow).addClass('small_active').siblings().removeClass('small_active');
    });
    // 右点击切换
    right.click(function () {
        iNow++;
        if (iNow > liLength - 1) {
            iNow = 0;
        }
        aLi.eq(iNow).siblings().stop().animate({
            opacity: 0

        }, 800).css("z-index", 1);
        aLi.eq(iNow).stop().animate({
            opacity: 1

        }, 800).css("z-index", 2);
        aSmall.eq(iNow).addClass('small_active').siblings().removeClass('small_active');

    });

    //手动切换
    aSmall.mouseover(function () {
        var n = $(this).index();
        //        var iNow = $(this).index();
        //        alert(iNow);
        iNow = n;
        aLi.eq(iNow).siblings().stop().animate({
            opacity: 0

        }, 800).css("z-index", 1);
        aLi.eq(iNow).stop().animate({
            opacity: 1

        }, 800).css("z-index", 2);
        aSmall.eq(iNow).addClass('small_active').siblings().removeClass('small_active');
    });

    //banner切换函数封装，以1秒的速度显示动画
    function move1() {
        aLi.eq(iNow).siblings().stop().animate({
            opacity: 0

        }, 800).css("z-index", 1);
        aLi.eq(iNow).stop().animate({
            opacity: 1
        }, 800).css("z-index", 2);
        aSmall.eq(iNow).addClass('small_active').siblings().removeClass('small_active');
    };
    function run2() {
        //判断回流,当前为3张图片
        iNow++;
        if (iNow > liLength - 1) {
            iNow = 0;
        }
        move1();
    };

    // 定时器，每隔3秒切换一张图
    var timer = setInterval(run2, 4000);
    //当鼠标划入，显示箭头，鼠标划出，隐藏箭头
    $(".content_middle").hover(function () {
        clearInterval(timer);
        if (liLength > 1) {
            $(".common").show();
        }
    }, function () {
        timer = setInterval(run2, 3000);
        $(".common").hide();
    });

});
window.onload = function () {
    $(".index-header").height($(".carousel-list li img").height());
   console.log($(".carousel-list li img").height());
    $(window).resize(function () {
        var wHeight = $(window).height();
        $(".index-header").height($(".carousel-list li img").height());
    });
};


(function ($) {//闭包开始
    $.fn.myPlugin = function (options) {
        var defaults = {
            'navlist': '',
            'imglist': '',
            'regionalobj': '',
            'leftprevobj': '',
            'rightnextobj': ''
        }
        var settings = $.extend(defaults, options);
        //图像切换
        var aPage = $(settings.navlist);
        var aImg = $(settings.imglist);
        var regional = $(settings.regionalobj);
        var leftprev = $(settings.leftprevobj);
        var rightnext = $(settings.rightnextobj);
        var iSize = aImg.length - 1;		//图像个数
        var index = 0;		//切换索引

        if (!aImg.eq(0).hasClass("current")) {
            aImg.eq(0).addClass("current");
        }

        aImg.first().css({ 'z-index': 2, 'opacity': 1 });
        aImg.not(".current").css({ 'z-index': 0, 'opacity': 0 });

        //切换过程
        function change() {
            aImg.removeClass("current");
            aImg.eq(index).addClass("current").stop().animate({ 'z-index': 2, 'opacity': 1 }, 1000);
            aImg.not(".current").stop().animate({ 'z-index': 0, 'opacity': 0 }, 1000);
            aPage.removeClass('active');
            aPage.eq(index).addClass('active');
        }

        function imgtime() {
            index++;
            if (index > iSize) {
                index = 0
            }
            change();
        }
        if (aImg.length == 1) {
            aPage.parent().hide();
            leftprev.hide();
            rightnext.hide();
        }

        if (leftprev.hasClass("hide") && rightnext.hasClass("hide")) {
            regional.mouseover(function () {
                leftprev.removeClass("hide");
                rightnext.removeClass("hide");
            }).mouseleave(function () {
                leftprev.addClass("hide");
                rightnext.addClass("hide");
            })
        }


        //分页按钮点击
        aPage.mouseover(function () {
            index = $(this).index();
            change();
        });

        //prev按钮
        leftprev.click(function () {
            index = $(".current").index() - 1;
            if (index < 0) {
                index = iSize
            }
            change();
        });

        //next按钮
        rightnext.click(function () {
            index = $(".current").index() + 1;
            if (index > iSize) {
                index = 0
            }
            change();
        });

        //自动轮播
        var srcollimg = setInterval(imgtime, 5000);
        regional.mouseover(function () {
            clearInterval(srcollimg);
        }).mouseleave(function () {
            srcollimg = setInterval(imgtime, 5000);
        });

    }
})(jQuery);//闭包结束
$(function () {
    $(".newbanner").myPlugin({
        'navlist': '.newbannerlist>li',
        'imglist': '.newbannerpic>li',
        'regionalobj': '.newbanner',
        'leftprevobj': '.newbanner_prev',
        'rightnextobj': '.newbanner_next'
    });

    $(".newbanner2").myPlugin({
        'navlist': '.newbannerlist2>li',
        'imglist': '.newbannerpic2>li',
        'regionalobj': '.newbanne2r',
        'leftprevobj': '.newbanner_prev2',
        'rightnextobj': '.newbanner_next2'
    });

    $(".homebanner").myPlugin({
        'navlist': '.homebannernav>li',
        'imglist': '.homebannerlist>li',
        'regionalobj': '.homebanner',
        'leftprevobj': '.newbanner_prev',
        'rightnextobj': '.newbanner_next'
    });

    $(".guide_tabPic").myPlugin({
        'navlist': '.tabPic_list>li',
        'imglist': '.tabPic_wrapper>li',
        'regionalobj': '.guide_tabPic'
    });

    $(".shopbanner").myPlugin({
        'navlist': '.shopnavlist>li',
        'imglist': '.shopbannerpic>li',
        'regionalobj': '.shopbanner'
    });

    $(".SeriesBanner").myPlugin({
        'navlist': '.SeriesBannerNav>li',
        'imglist': '.SeriesList>li',
        'regionalobj': '.SeriesBanner',
        'leftprevobj': '.newbanner_prev',
        'rightnextobj': '.newbanner_next'
    });

})
$(function () {
  var p_len = $(".product").length;
  for (i = 0; i < p_len; i++) {
      var len_li = $(".product").eq(i).find("li").length;
      $(".product").eq(i).find("ul").width(len_li * 38);
      if (len_li < 6) {
          $(".product").eq(i).find(".prev").hide();
          $(".product").eq(i).find(".next").hide();
          $(".product").eq(i).find(".product_gallery").css("margin-left", 0)
      }
  }

  $(".next").click(function () {
      if (!$(this).parent().find(".product_gallery ").find("ul").is(":animated")) {
          var ul_left = Math.abs(parseInt($(this).parent().find(".product_gallery ").find("ul").css("left")));
          var ul_width = $(this).parent().find(".product_gallery ").find("ul").width();
          if (ul_width - 190 > 0) {
              if (ul_width - ul_left > 190) {
                  $(this).parent().find(".product_gallery ").find("ul").animate({ "left": -(ul_left + 38) });
              }
          }
      }
      $(this).parent().find('.product_gallery img[src="/Resources/images/loading.png"]').each(function () {
          $(this).attr('src', $(this).attr('data-defurl'));
      });
  })
  $(".prev").click(function () {
      if (!$(this).parent().find(".product_gallery ").find("ul").is(":animated")) {
          var ul_left = parseInt($(this).parent().find(".product_gallery ").find("ul").css("left"));
          if (Math.abs(ul_left) > 0) {
              $(this).parent().find(".product_gallery ").find("ul").animate({ "left": -(Math.abs(ul_left) - 38) });
          }
      }
  })
  productGallery();

  var winH = $(window).height(); //页面可视区域高度
  var inScrool = false;
  var i = 5;
  $(window).scroll(function () {
      var pageH = $(document.body).height();
      var scrollT = $(window).scrollTop(); //滚动条top
      var aa = (pageH - winH - scrollT) / winH;
      if (aa < 0.02 && inScrool == false && i <= 8) {
          inScrool = true;
          $('.Pwrapper .product.hide:lt(4)').each(function () {
              var obj = $(this);
              obj.removeClass('hide');
              obj.find('img:lt(8)').each(function () {
                  $(this).fadeIn("slow").attr('src', $(this).attr('data-defurl'));
              })                
              //$.ajax({
              //    url: '/Resources/images/loading.gif',
              //    cache:true,
              //    success: function () {
              //        obj.find('img:lt(8)').each(function () {
              //            $(this).fadeIn("slow").attr('src', $(this).attr('data-defurl'));
              //        })
              //    }
              //});
          });
          i++;
          inScrool = false;
      }
  });
});

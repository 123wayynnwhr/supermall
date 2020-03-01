<template>
  <div>
    <div class="container">
      <div class="breadCrumbs">
        <a href>首页</a> &gt;
        <a href>灯具&墙饰</a>
      </div>
      <div class="PListWrapper">
        <div class="productSideW fl">
          <div class="productSide" id="side">
            <h3>品 类 Category</h3>
            <h4>
              <a href="javascript:;">灯具&amp;墙饰频道</a>
            </h4>
            <dl class="list">
              <dt class="title" @click="toggle($event)">
                <span></span>
                <a   href="javascript:;">灯具</a>
              </dt>

              <dd class="item" style="display:block">
                <ul class="subnav">
                  <li>
                    <a href="javascript:;" >吊顶灯</a>
                  </li>
                  <li>
                    <a href="javascript:;" >壁灯/浴室灯</a>
                  </li>
                  <li>
                    <a href="javascript:;">台灯</a>
                  </li>
                  <li>
                    <a href="javascript:;" >落地灯</a>
                  </li>
                  <li>
                    <a href="javascript:;">书桌灯</a>
                  </li>
                  <li>
                    <a href="javascript:;">儿童灯具</a>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl class="list">
                  <dt class="title" @click="toggle($event)" >
                  <span></span>
                  <a href="javascript:;">墙画/挂钟/墙镜</a>
                </dt>
              <dd class="item" style="display:none">
                <ul class="subnav">
                  <li>
                    <a href="javascript:;">墙画</a>
                  </li>
                  <li>
                    <a href="javascript:;" >墙镜</a>
                  </li>
                  <li>
                    <a href="javascript:;" >挂钟</a>
                  </li>
                </ul>
              </dd>
            </dl>
            <h3>特色 Features</h3>
            <ul class="subnav">
              <li>
                <a class href="javascript:;">新品</a>
              </li>
              <li>
                <a class href="javascript:;">促销</a>
              </li>
            </ul>
            <h3 data-type="sub312" style="display:none;">窗帘定制服务 Service</h3>
            <ul class="subnav" data-type="sub312" style="display:none;">
              <li>
                <a href="javascript:;">1 选择窗帘款式</a>
              </li>
              <li>
                <a href="javascript:;">2 选择面料及配件</a>
              </li>
              <li>
                <a href="javascript:;">3 尺寸测量说明</a>
              </li>
              <li>
                <a href="javascript:;">4 价格计算说明</a>
              </li>
            </ul>
          </div>
          <div class="advert">
            <a href="javascript:;" target="_blank">
              <img title src="../../../public/img/img/20150324/6356281127471795297694180.jpg" />
            </a>
          </div>
        </div>

        <div class="article_content fr">
          <div class="article_content fr" style="margin-bottom:20px;">
            <div class="p1">
              <a href="javascript:;" target="_blank" style="display:block;width:100%;height:100%;"></a>
            </div>
            <div class="p2">
              <a
                href="javascript:;"
                target="_blank"
                style="position:absolute;display:block;top:27px;left:0;width:353px;height:571px;"
              ></a>
              <a
                href="javascript:;"
                target="_blank"
                style="position:absolute;display:block;top:27px;left:381px;width:520px;height:571px;"
              ></a>
            </div>
            <div class="p3">
              <a
                href="javascript:;"
                target="_blank"
                style="position:absolute;display:block;top:0;left:0;width:100%;height:570px;"
              ></a>
            </div>
            <div class="p4">
              <a
                href="javascript:;"
                target="_blank"
                style="position:absolute;display:block;top:0;left:0;width:353px;height:569px;"
              ></a>
              <a
                href="javascript:;"
                target="_blank"
                style="position:absolute;display:block;top:0;left:381px;width:520px;height:569px;"
              ></a>
            </div>
            <div class="p5">
              <a
                href="javascript:;"
                target="_blank"
                style="position:absolute;display:block;top:0;left:0;width:100%;height:536px;"
              ></a>
            </div>
            <div class="p6">
              <a
                href="javascript:;"
                target="_blank"
                style="position:absolute;display:block;top:0;left:0;width:518px;height:571px;"
              ></a>
              <a
                href="javascript:;"
                target="_blank"
                style="position:absolute;display:block;top:0;left:545px;width:356px;height:571px;"
              >&nbsp;</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <my-footer></my-footer>
  </div>
</template>

<script>
import MyFooter from "../../components/common/MyFooter";

$(function() {
  (function() {
    var path = window.location.href.split("/");
    if (path.length == 4) {
      path = path[3].split("-");
      if (path[1] == "312") {
        $("[data-type ='sub312']").show();
      }
    }
  })();

  $(function() {
    navigation.getNavigation(categoryDatejson);
  });

  var _mvq = window._mvq || [];
  window._mvq = _mvq;
  _mvq.push(["$setAccount", "m-157899-0"]);
  _mvq.push(["$logConversion"]);
  (function() {
    var mvl = document.createElement("script");
    mvl.type = "text/javascript";
    mvl.async = true;
    mvl.src = "";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(mvl, s);
  })();

  (function() {
    var bp = document.createElement("script");
    var curProtocol = window.location.protocol.split(":")[0];
    if (curProtocol === "https") {
      bp.src = "";
    } else {
      bp.src = "";
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
  })();
});
export default {
  methods: {
    toggle: function(ev) {
      var $title = $(ev.target);
      $title
        .parents("#side")
        .find(".item")
        .hide();
      $title.next().show(1000);
    }
  },
  components: {
    MyFooter
  }
};
</script>

<style scoped>
.p1 {
  background: url(../../../public/img/Resources/homeimages/20170704/lighting/lighting_01.jpg)
    0 0 no-repeat;
  width: 900px;
  height: 612px;
}
.p2 {
  background: url(../../../public/img/Resources/homeimages/20170704/lighting/lighting_02.jpg)
    0 0 no-repeat;
  position: relative;
  width: 900px;
  height: 624px;
}
.p3 {
  background: url(../../../public/img/Resources/homeimages/20170704/lighting/lighting_03.jpg)
    0 0 no-repeat;
  position: relative;
  width: 900px;
  height: 600px;
}
.p4 {
  background: url(../../../public/img/Resources/homeimages/20170704/lighting/lighting_04.jpg)
    0 0 no-repeat;
  position: relative;
  width: 900px;
  height: 600px;
}
.p5 {
  background: url(../../../public/img/Resources/homeimages/20170704/lighting/lighting_05.jpg)
    0 0 no-repeat;
  position: relative;
  width: 900px;
  height: 563px;
}
.p6 {
  background: url(../../../public/img/Resources/homeimages/20170704/lighting/lighting_06.jpg)
    0 0 no-repeat;
  position: relative;
  width: 900px;
  height: 571px;
}
</style>
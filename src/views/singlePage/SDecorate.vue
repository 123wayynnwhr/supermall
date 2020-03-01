<template>
  <div>
    <div class="container">
      <div class="breadCrumbs">
        <a href>首页</a> &gt;
        <a href>家具</a>
      </div>
      <div class="PListWrapper">
        <div class="productSideW fl">
          <div class="productSide" id="side">
            <h3>品类 Category</h3>
            <h4>
              <a href>装饰品频道</a>
            </h4>
            <dl class="list">
              <dt class="title" @click="toggle($event)">
                <span></span>
                <a href>花/花瓶</a>
              </dt>
              <dd style="display:none;" class="item">
                <ul class="subnav">
                  <li>
                    <a href class>花</a>
                  </li>
                  <li>
                    <a href class>花盆</a>
                  </li>
                  <li>
                    <a href class>花瓶</a>
                  </li>
                  <li>
                    <a href class>盆栽/盆景</a>
                  </li>
                  <li>
                    <a href class>花瓶填充物</a>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl class="list">
              <dt class="title" @click="toggle($event)">
                <span></span>
                <a href>装饰摆件</a>
              </dt>
              <dd style="display:none;" class="item">
                <ul class="subnav">
                  <li>
                    <a href class>座钟</a>
                  </li>
                  <li>
                    <a href class>各类摆饰</a>
                  </li>
                  <li>
                    <a href class>书桌摆件</a>
                  </li>
                  <li>
                    <a href class>相框</a>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl class="list">
              <dt class="title" @click="toggle($event)">
                <span></span>
                <a href>蜡烛/烛台</a>
              </dt>
              <dd style="display:none;" class="item">
                <ul class="subnav">
                  <li>
                    <a href class>风灯</a>
                  </li>
                  <li>
                    <a href class>蜡烛</a>
                  </li>
                  <li>
                    <a href class>烛台</a>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl class="list">
              <dt class="title" @click="toggle($event)">
                <span></span>
                <a href>收纳容器</a>
              </dt>
              <dd style="display:none;" class="item">
                <ul class="subnav">
                  <li>
                    <a href class>套件</a>
                  </li>
                  <li>
                    <a href class>装饰储物罐</a>
                  </li>
                  <li>
                    <a href class>篮筐</a>
                  </li>
                  <li>
                    <a href class>装饰盒</a>
                  </li>
                  <li>
                    <a href class>托盘/装饰盘</a>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl class="list">
              <dt class="title" @click="toggle($event)">
                <span></span>
                <a href>卫浴/熏香/镜子</a>
              </dt>
              <dd style="display:none;" class="item">
                <ul class="subnav">
                  <li>
                    <a href class>卫浴用品</a>
                  </li>
                  <li>
                    <a href class>熏香</a>
                  </li>
                  <li>
                    <a href class>镜子</a>
                  </li>
                </ul>
              </dd>
            </dl>
            <h3>特色 Features</h3>
            <ul class="subnav">
              <li>
                <a href class>新品</a>
              </li>
              <li>
                <a href class>促销</a>
              </li>
              <li>
                <a href class>夏季装饰</a>
              </li>
            </ul>
            <h3 data-type="sub312" style="display:none;">窗帘定制服务 Service</h3>
            <ul class="subnav" data-type="sub312" style="display:none;">
              <li>
                <a href>1 选择窗帘款式</a>
              </li>
              <li>
                <a href>2 选择面料及配件</a>
              </li>
              <li>
                <a href>3 尺寸测量说明</a>
              </li>
              <li>
                <a href>4 价格计算说明</a>
              </li>
            </ul>
          </div>
          <div>
            <div class="advert">
              <a href target="-blank">
                <img title src="../../../public/img/img/20150324/6356281127471795297694180.jpg" alt />
              </a>
            </div>
          </div>
        </div>

        <div class="article_content fr">
          <div class="article_content fr" style="margin-bottom:20px;">
            <div class="p1">
              <a href target="_blank" style="display:block;width:100%;height:100%;"></a>
            </div>
            <div class="p2">
              <a
                href
                target="_blank"
                style="display:block;position:absolute;top:25px;left:378;width:350px;height:570px;"
              ></a>
              <a
                href
                target="_blank"
                style="display:block;position:absolute;top:27px;left:378px;width:522px;height:570px;"
              ></a>
            </div>
            <div class="p3">
              <a
                href
                target="_blank"
                style="display:block;position:absolute;top:28px;left:0;width:900px;height:570px;"
              ></a>
            </div>
            <div class="p4">
              <a
                href
                target="_blank"
                style="display:block;position:absolute;top:28px;left:0;width:900px;height:568px;"
              ></a>
            </div>
            <div class="p5">
              <a
                href
                target="_blank"
                style="display:block;position:absolute;top:28px;left:0;width:514px;height:568px;"
              ></a>
              <a
                href
                target="_blank"
                style="display:block;position:absolute;top:28px;left:540px;width:360px;height:568px;"
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
  background: url(../../../public/img/Resources/homeimages/20170704/accessories/accessories_01.jpg)
    0 0 no-repeat;
  width: 900px;
  height: 610px;
}
.p2 {
  background: url(../../../public/img/Resources/homeimages/20170704/accessories/accessories_02.jpg)
    0 0 no-repeat;
  position: relative;
  width: 900px;
  height: 591px;
}
.p3 {
  background: url(../../../public/img/Resources/homeimages/20170704/accessories/accessories_03.jpg)
    0 0 no-repeat;
  position: relative;
  width: 900px;
  height: 600px;
}
.p4 {
  background: url(../../../public/img/Resources/homeimages/20170704/accessories/accessories_04.jpg)
    0 0 no-repeat;
  position: relative;
  width: 900px;
  height: 603px;
}
.p5 {
  background: url(../../../public/img/Resources/homeimages/20170704/accessories/accessories_05.jpg)
    0 0 no-repeat;
  position: relative;
  width: 900px;
  height: 598px;
}
</style>
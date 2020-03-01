<template>
  <div>
    <div class="container">
      <div class="breadCrumbs">
        <a href="/">首页</a> &gt;
        <a href="javascript:;">家具</a>
      </div>
      <div class="PListWrapper">
        <div class="productSideW fl">
          <div class="productSide" id="side">
            <h3>品 类 Category</h3>
            <h4>
              <a href="javascript:;">家具频道</a>
            </h4>
            <dl class="list">
              <dt class="title" @click="toggle($event)">
                <span></span>
                <a href="javascript:;">餐厅家具</a>
              </dt>

              <dd class="item" style="display: none;">
                <ul class="subnav">
                  <li>
                    <a href="javascript:;" class>餐椅</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>餐桌</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>餐边柜/酒柜</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>吧台/吧椅</a>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl class="list">
              <dt class="title" @click="toggle($event)">
                <span></span>
                <a href="javascript:;">客厅家具</a>
              </dt>

              <dd class="item" style="display: none;">
                <ul class="subnav">
                  <li>
                    <a href="javascript:;" class>沙发</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>咖啡桌</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>电视柜/塔柜</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>边几</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>边桌</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>休闲桌</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>休闲椅/休闲凳/备用套</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>软包休闲椅</a>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl class="list">
              <dt class="title" @click="toggle($event)">
                <span></span>
                <a href="javascript:;">门厅/玄关</a>
              </dt>

              <dd class="item" style="display: none;">
                <ul class="subnav">
                  <li>
                    <a href="javascript:;" class>玄关柜</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>边桌</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>玄关凳</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>床尾凳</a>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl class="list">
              <dt class="title" @click="toggle($event)">
                <span></span>
                <a href="javascript:;">沙发</a>
              </dt>

              <dd class="item" style="display: none;">
                <ul class="subnav">
                  <li>
                    <a href="javascript:;" class>所有沙发</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>三人沙发</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>双人沙发</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>单人沙发</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>脚台</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>沙发床</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>组合沙发</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>皮沙发</a>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl class="list">
              <dt class="title" @click="toggle($event)">
                <span></span>
                <a href="javascript:;">卧室家具</a>
              </dt>
              <dd class="item" style="display: none;">
                <ul class="subnav">
                  <li>
                    <a href="javascript:;" class>床</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>床垫/床顶垫</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>床盒</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>床头柜</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>斗柜</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>梳妆台/梳妆镜/梳妆凳</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>床尾凳</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>衣柜</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>休闲桌</a>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl class="list">
              <dt class="title" @click="toggle($event)">
                <span></span>
                <a href="javascript:;">书房家具</a>
              </dt>
              <dd class="item" style="display: none;">
                <ul class="subnav">
                  <li>
                    <a href="javascript:;" class>书桌</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>书柜/文件柜</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>办公椅</a>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl class="list">
              <dt class="title" @click="toggle($event)">
                <span></span>
                <a href="javascript:;">卫浴家具</a>
              </dt>
              <dd class="item" style="display: none;">
                <ul class="subnav">
                  <li>
                    <a href="javascript:;" class>卫浴柜</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>浴室镜</a>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl class="list">
              <dt class="title" @click="toggle($event)">
                <span></span>
                <a href="javascript:;">休闲家具</a>
              </dt>
              <dd class="item" style="display: none;">
                <ul class="subnav">
                  <li>
                    <a href="javascript:;" class>储物箱</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>休闲椅/休闲凳/备用套</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>休闲桌</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>装饰架/壁架</a>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl class="list">
              <dt class="title" @click="toggle($event)">
                <span></span>
                <a href="javascript:;">户外家具</a>
              </dt>

              <dd class="item" style="display: none;">
                <ul class="subnav">
                  <li>
                    <a href="javascript:;" class>户外餐桌/餐椅</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>户外座椅/躺椅</a>
                  </li>
                  <li>
                    <a href="javascript:;" class>遮阳伞/底座/防护罩</a>
                  </li>
                </ul>
              </dd>
            </dl>
            <h3>风格 Style</h3>
            <ul class="subnav">
              <li>
                <a class href="javascript:;">海洋风</a>
              </li>
              <li>
                <a class href="javascript:;">休闲风</a>
              </li>
              <li>
                <a class href="javascript:;">自然风</a>
              </li>
              <li>
                <a class href="javascript:;">经典风</a>
              </li>
            </ul>
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
              <img title src="../../../public/img/images/UploadFile/UeditorUP/20150324/6356281127471795297694180.jpg" />
            </a>
          </div>
        </div>

        <div class="article_content fr">
          <div class="article_content fr" style="margin-bottom:20px;">
            <div class="p1">
              <a
                href="javascript:;"
                target="_blank"
                style="display:block;width:100%;height:100%;"
              ></a>
            </div>
            <div class="p2">
              <a
                href="javascript:;"
                target="_blank"
                style="display:block;position:absolute;top:27px;left:0;width:350px;height:520px;"
              ></a>
              <a
                href="javascript:;"
                target="_blank"
                style="display:block;position:absolute;top:27px;left:378px;width:523px;height:520px;"
              ></a>
            </div>
            <div class="p3">
              <a
                href="javascript:;"
                target="_blank"
                style="display:block;position:absolute;top:27px;left:0;width:100%;height:535px;"
              ></a>
            </div>
            <div class="p4">
              <a
                href="javascript:;"
                target="_blank"
                style="display:block;position:absolute;left:0;top:27px;width:100%;height:535px;"
              ></a>
            </div>
            <div class="p5">
              <a
                href="javascript:;"
                target="_blank"
                style="display:block;position:absolute;left:0;top:27px;width:514px;height:561px;"
              ></a>
              <a
                href="javascript:;"
                target="_blank"
                style="display:block;position:absolute;left:541px;top:27px;width:360px;height:561px;"
              ></a>
            </div>
            <div class="p6">
              <a
                href="javascript:;"
                target="_blank"
                style="display:block;position:absolute;top:27px;left:0;width:100%;height:388px;"
              ></a>
            </div>
            <div class="p7">
              <a
                href="javascript:;"
                target="_blank"
                style="display:block;position:absolute;top:27px;left:0;width:100%;height:536px;"
              ></a>
            </div>
            <div class="p8">
              <a
                href="javascript:;"
                target="_blank"
                style="display:block;position:absolute;top:27px;left:0;width:512px;height:570px;"
              ></a>
              <a
                href="javascript:;"
                target="_blank"
                style="display:block;position:absolute;top:27px;left:539px;width:362px;height:570px;"
              ></a>
            </div>
            <div class="p9">
              <a
                href="javascript:;"
                target="_blank"
                style="display:block;position:absolute;top:27px;left:0;width:100%;height:536px;"
              ></a>
            </div>
            <div class="p10">
              <a
                href="javascript:;"
                target="_blank"
                style="display:block;position:absolute;top:27px;left:0;width:513px;height:571px;"
              ></a>
              <a
                href="javascript:;"
                target="_blank"
                style="display:block;position:absolute;top:27px;left:539px;width:362px;height:571px;"
              ></a>
            </div>
            <div class="p11">
              <a
                href="javascript:;"
                target="_blank"
                style="display:block;position:absolute;top:27px;left:0;width:100%;height:536px;"
              ></a>
            </div>
            <div class="p12">
              <a
                href="javascript:;"
                target="_blank"
                style="display:block;position:absolute;top:27px;left:0;width:100%;height:536px;"
              ></a>
            </div>
            <div class="p13">
              <a
                href="javascript:;"
                target="_blank"
                style="display:block;position:absolute;top:27px;left:0;width:513px;height:568px;"
              ></a>
              <a
                href="javascript:;"
                target="_blank"
                style="display:block;position:absolute;top:27px;left:539px;width:362px;height:568px;"
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

$(function(){
  	(function(){
			var path=window.location.href.split('/');
			if (path.length == 4 ){
			path = path[3].split('-');
			if(path[1] == "312"){
			$("[data-type ='sub312']").show();
			}
			}
			}());
})
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
.p1{
background:url(../../../public/img/Resources/homeimages/20170704/furniture/furniture_01.jpg) 0 0 no-repeat;width:900px;height:617px;
}
.p2{
  background:url(../../../public/img/Resources/homeimages/20170704/furniture/furniture_02.jpg) 0 0 no-repeat;position:relative;width:900px;height:544px;
}
.p3{
 background:url(../../../public/img/Resources/homeimages/20170704/furniture/furniture_03.jpg) 0 0 no-repeat;position:relative;width:900px;height:566px; 
}
.p4{
  background:url(../../../public/img/Resources/homeimages/20170704/furniture/furniture_04.jpg) 0 0 no-repeat;position:relative;width:900px;height:564px;
}
.p5{
  background:url(../../../public/img/Resources/homeimages/20170704/furniture/furniture_05.jpg) 0 0 no-repeat;position:relative;width:900px;height:561px;
}
.p6{
 background:url(../../../public/img/Resources/homeimages/20170704/furniture/furniture_06.jpg) 0 0 no-repeat;position:relative;width:900px;height:388px; 
}
.p7{
 background:url(../../../public/img/Resources/homeimages/20170704/furniture/furniture_07.jpg) 0 0 no-repeat;position:relative;width:900px;height:566px; 
}
.p8{
  background:url(../../../public/img/Resources/homeimages/20170704/furniture/furniture_08.jpg) 0 0 no-repeat;position:relative;width:900px;height:600px;
}
.p9{
  background:url(../../../public/img/Resources/homeimages/20170704/furniture/furniture_09.jpg) 0 0 no-repeat;position:relative;width:900px;height:566px;
}
.p10{
  background:url(../../../public/img/Resources/homeimages/20170704/furniture/furniture_10.jpg) 0 0 no-repeat;position:relative;width:900px;height:598px;
}
.p11{
  background:url(../../../public/img/Resources/homeimages/20170704/furniture/furniture_11.jpg) 0 0 no-repeat;position:relative;width:900px;height:565px;
}
.p12{
  background:url(../../../public/img/Resources/homeimages/20170704/furniture/furniture_12.jpg) 0 0 no-repeat;position:relative;width:900px;height:566px;
}
.p13{
  background:url(../../../public/img/Resources/homeimages/20170704/furniture/furniture_13.jpg) 0 0 no-repeat;position:relative;width:900px;height:599px;
}
</style>
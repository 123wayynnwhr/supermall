<template>
  <div>

   <div class="container">
	<div class="breadCrumbs">
		<a href="">首页</a> &gt;<a href="">灯具&墙饰</a>
	</div>
	<div class="PListWrapper">



<div class="productSideW fl">
	<div class="productSide" id="side">
		<h3>品类  Category</h3>
		<h4><a href="">餐厨用品频道</a></h4>
		<dl  class="list">
			<dt class="title" @click="toggle($event)"><span></span><a>厨房用品</a></dt>
			<dd style="display:none;" class="item">
				<ul class="subnav">
					<li><a href="" class="">锅具</a></li>
					<li><a href="" class="">刀具</a></li>
					<li><a href="" class="">烘焙模具</a></li>
					<li><a href="" class="">厨房电器</a></li>
					<li><a href="" class="">厨房小工具</a></li>
					<li><a href="" class="">其他厨房用品</a></li>
					<li><a href="" class="">套件</a></li>
				</ul>
			</dd>
		</dl>


		<dl  class="list">
			<dt class="title" @click="toggle($event)"><span></span><a >餐厅用品</a></dt>
			<dd style="display:none;" class="item">
				<ul class="subnav">
					<li><a href="" class="">餐桌纺织品</a></li>
					<li><a href="" class="">餐具/刀叉匙</a></li>
					<li><a href="" class="">咖啡茶用具</a></li>
					<li><a href="" class="">玻璃杯/吧台用具</a></li>
					<li><a href="" class="">其他餐厨用品</a></li>
					<li><a href="" class="">套件</a></li>
				</ul>
			</dd>
		</dl>
		<h3>特色 Features</h3>
		<ul class="subnav">
					<li><a href="" class="">新品</a></li>
					<li><a href="" class="">促销</a></li>
		</ul>
		<h3>品牌 Brand</h3>
		<ul class="subnav">
					<li><a href="" class="">ALL-Clad</a></li>
					<li><a href="" class="">USA Pan</a></li>
					<li><a href="" class="">Revol</a></li>
					<li><a href="" class="">Nespresso</a></li>
					<li><a href="" class="">Harbor House</a></li>
		</ul>
		<h3 data-type="sub312" style="display:none;">窗帘定制服务  Service</h3>
	    <ul class="subnav"  data-type="sub312" style="display:none;">
					<li><a href="">1 选择窗帘款式</a></li>
					<li><a href="">2 选择面料及配件</a></li>
					<li><a href="">3 尺寸测量说明</a></li>
					<li><a href="">4 价格计算说明</a></li>
		</ul>

		</div>
		<div>
			<div class="advert"><a href="" target="-blank"><img title="" src="../../../public/img/img/20150324/6356281127471795297694180.jpg" alt=""></a></div>
		</div>
</div>


	<div class="article_content fr">
		<div class="article_content fr" style="margin-bottom:20px;">
			<div class="p1">
			<a href="" target="_blank" style="display:block;width:100%;height:100%;"></a>
			</div>
			<div class="p2">
			<a href="" target="_blank" style="display:block;position:absolute;top:27px;left:0;width:349px;height:567px;"></a>
			<a href="" target="_blank" style="display:block;position:absolute;top:27px;left:376px;width:525px;height:567px;"></a>
			</div>
			<div class="p3" >
			<a href="" target="_blank" style="display:block;position:absolute;top:36px;left:0;width:900px;height:440px;"></a>
			</div>
			<div class="p4" >
			<a href="" target="_blank" style="display:block;position:absolute;top:0;left:0;width:210px;height:100%;"></a>
			<a href="" target="_blank" style="display:block;position:absolute;top:0;left:211px;width:266px;height:100%;"></a>
			<a href="" target="_blank" style="display:block;position:absolute;top:0;left:476px;width:142px;height:100%;"></a>
			<a href="" target="_blank" style="display:block;position:absolute;top:0;left:619px;width:178px;height:100%;"></a>
			<a href="" target="_blank" style="display:block;position:absolute;top:0;left:797;width:104px;height:100%;"></a>
			</div>
			<div class="p5" >
			<a href="" target="_blank" style="display:block;position:absolute;top:27px;left:0;width:100%;height:100%;"></a>
			</div>
			<div class="p6" >
			<a href="" target="_blank" style="display:block;position:absolute;top:27px;left:0;width:350px;height:570px;"></a>
			<a href="" target="_blank" style="display:block;position:absolute;top:36px;left:377px;width:525px;height:570px;"></a>
			</div>
			<div class="p7">
			<a href="" target="_blank" style="display:block;position:absolute;top:27px;left:0;width:100%;height:400px;">&nbsp;</a>
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
.p1{
background:url(../../../public/img/Resources/homeimages/20170704/cookWarP/cookware_01.jpg)0 0  no-repeat; width:900px;height:646px;
}
.p2{
  background:url(../../../public/img/Resources/homeimages/20170704/cookWarP/cookware_02.jpg)0 0 no-repeat; position:relative;width:900px;height:568px;
}
.p3{
background:url(../../../public/img/Resources/homeimages/20170704/cookWarP/cookware_03.jpg) 0 0 no-repeat; position:relative;width:900px;height:482px;  
}
.p4{
 background:url(../../../public/img/Resources/homeimages/20160726/cookware_04.jpg) 0 0 no-repeat; position:relative;width:900px;height:184px; 
}
.p5{
  background:url(../../../public/img/Resources/homeimages/20170704/cookWarP/cookware_04.jpg)0 0 no-repeat; position:relative;width:900px;height:491px;
}
.p6{
  background:url(../../../public/img/Resources/homeimages/20170704/cookWarP/cookware_05.jpg)0 0 no-repeat; position:relative;width:900px;height:568px;
}
.p7{
  background:url( ../../../public/img/Resources/homeimages/20170704/cookWarP/cookware_06.jpg)0 0 no-repeat; position:relative;width:900px;height:428px;
}
</style>
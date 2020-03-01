<template>
  <div>
    <div class="container guide_main">
      <div class="guide_tabPic clearfix">
        <div class="guide_tabPic_show fl">
          <ul class="tabPic_wrapper">
            <li class style="z-index: 0; opacity: 0;">
              <a >
                <img src="../../../public/img/images//UploadFile/Banner/Img/81/201412310133047827.jpg" />
                <span class="view_details">点击进入&gt;</span>
              </a>
            </li>
            <li class style="z-index: 0; opacity: 0;">
              <a >
                <img src="../../../public/img/images//UploadFile/Banner/Img/82/201407081200232744.jpg" />
                <span class="view_details">点击进入&gt;</span>
              </a>
            </li>
            <li class style="z-index: 0; opacity: 0;">
              <a>
                <img src="../../../public/img/images//UploadFile/Banner/Img/181/201408180417204845.jpg" />
                <span class="view_details">点击进入&gt;</span>
              </a>
            </li>
            <li class style="z-index: 0; opacity: 0;">
              <a >
                <img src="../../../public/img/images//UploadFile/Banner/Img/182/201408180422402719.jpg" />
                <span class="view_details">点击进入&gt;</span>
              </a>
            </li>
            <li class="current" style="z-index: 2; opacity: 1;">
              <a >
                <img src="../../../public/img/images//UploadFile/Banner/Img/183/201408180440121531.jpg" />
                <span class="view_details">点击进入&gt;</span>
              </a>
            </li>
            <li class style="z-index: 0; opacity: 0;">
              <a >
                <img src="../../../public/img/images//UploadFile/Banner/Img/184/201408180427013907.jpg" />
                <span class="view_details">点击进入&gt;</span>
              </a>
            </li>
            <li class style="z-index: 0; opacity: 0;">
              <a >
                <img src="../../../public/img/images/UploadFile/Banner/Img/185/201408180441026149.jpg" />
                ../../../public/img/images/UploadFile/Banner/Img/185/201408180441026149.jpg
                <span class="view_details">点击进入&gt;</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="guide_tabPic_list fr">
          <ul class="tabPic_list">
            <li class>
              <a >
                <span class="EN">LIVING ROOMS</span>
                <span class="CN">客厅</span>
              </a>
            </li>
            <li class>
              <a>
                <span class="EN">BEDROOMS</span>
                <span class="CN">卧室</span>
              </a>
            </li>
            <li class>
              <a >
                <span class="EN">DINING ROOMS</span>
                <span class="CN">餐厅</span>
              </a>
            </li>
            <li class>
              <a >
                <span class="EN">HOME OFFICES</span>
                <span class="CN">书房</span>
              </a>
            </li>
            <li class="active">
              <a>
                <span class="EN">BATHROOMS</span>
                <span class="CN">卫浴</span>
              </a>
            </li>
            <li class>
              <a >
                <span class="EN">OUTDOOR SPACES</span>
                <span class="CN">户外</span>
              </a>
            </li>
            <li class="gui_pic_last">
              <a >
                <span class="EN">ENTRYWAYS</span>
                <span class="CN">玄关</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="guide_banner fl clearfix">
        <a >
          <img src="../../../public/img/Resources/product/guide_banner.jpg" />
        </a>
      </div>
      <div class="design_wrapper fl clearfix">
        <h3 class="design_title">
          <span class="EN">design library</span>
          <span class="CN">设计库</span>
        </h3>
        <ul class="design_list">
          <li>
            <div class="adTitle">灵感居室</div>
            <a >
              <img class="adPic" src="../../../public/img/Resources/product/designLibrary_1.jpg" />
            </a>
            <p class="adIntroduce">
              <a >从Harbor House场景搭配中获得家居灵感 &gt;</a>
            </p>
          </li>
          <li>
            <div class="adTitle">装饰文章</div>
            <a >
              <img class="adPic" src="../../../public/img/Resources/product/designLibrary_2.jpg" />
            </a>
            <p class="adIntroduce">
              <a >阅读我们精心撰写的装饰文章获得家居灵感 &gt;</a>
            </p>
          </li>
          <li>
            <div class="adTitle">风格图库</div>
            <a >
              <img class="adPic" src="../../../public/img/Resources/product/designLibrary_3.jpg" />
            </a>
            <p class="adIntroduce">
              <a >找到你喜欢的风格家居 Harbor House风格 &gt;</a>
            </p>
          </li>
          <li>
            <div class="adTitle">在线目录册</div>
            <a >
              <img class="adPic" src="../../../public/img/Resources/product/designLibrary_4.jpg" />
              
            </a>
            <p class="adIntroduce">
              <a >Harbor House提供产品目录册您掌上的家居杂志 &gt;</a>
            </p>
          </li>
        </ul>
      </div>
    </div>

    <my-footer></my-footer>
  
  </div>
</template>

<script>
import MyFooter from "../../components/common/MyFooter";
import "../.././assets/js/newbanner.js"


export default {
  components: {
    MyFooter
  }
};
</script>

<style>
</style>
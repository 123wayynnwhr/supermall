<template>
  <div>
    <div class="container mt_40">
      <div class="PListWrapper">
        <div class="productSideW fl">
          <div class="productSide" id="side">
            <h3>大户型</h3>
            <ul class="subnav">
              <li>
                <a class>上海华侨城苏河湾</a>
              </li>
              <li>
                <a class>深圳银湖蓝山</a>
              </li>
            </ul>
            <h3>中等面积户型</h3>
            <ul class="subnav">
              <li>
                <a class>北京龙湖天璞</a>
              </li>
            </ul>
            <h3>小户型</h3>
            <ul class="subnav">
              <li>
                <a class>杭州钱塘明月</a>
              </li>
              <li>
                <a class>城都桐梓琳</a>
              </li>
            </ul>
          </div>
          <div class="advert">
            <a target="_blank">
              <img
                src="../../../public/img/images/UploadFile/UeditorUP/20150324/6356281127471795297694180.jpg"
                alt
              />
            </a>
          </div>
        </div>

        <div class="new_content fr">
          <div class="home_head">
            <img src="../../../public/img/Resources/homeimages/20180322/home_title.png" />
          </div>
          <ul class="home_list">
            <li class="pos-r">
              <a >
                <img src="../../../public/img/Resources/homeimages/20180322/list1-bg.jpg" />
                <img
                  class="pos-a"
                  src="../../../public/img/Resources/homeimages/20180322/list1-txt.png"
                />
              </a>
            </li>
            <li class="pos-r">
              <a >
                <img src="../../../public/img/Resources/homeimages/20180322/list2-bg.jpg" />
                <img
                  class="pos-a"
                  src="../../../public/img/Resources/homeimages/20180322/list2-txt.png"
                />
              </a>
            </li>
            <li class="pos-r">
              <a >
                <img src="../../../public/img/Resources/homeimages/20180322/list3-bg.jpg" />
                <img
                  class="pos-a"
                  src="../../../public/img/Resources/homeimages/20180322/list3-txt.png"
                />
              </a>
            </li>
            <li class="pos-r">
              <a >
                <img src="../../../public/img/Resources/homeimages/20180322/list4-bg.jpg" />
                <img
                  class="pos-a"
                  src="../../../public/img/Resources/homeimages/20180322/list4-txt.png"
                />
              </a>
            </li>
            <li class="pos-r">
              <a >
                <img src="../../../public/img/Resources/homeimages/20180322/list5-bg.jpg" />
                <img
                  class="pos-a"
                  src="../../../public/img/Resources/homeimages/20180322/list5-txt.png"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyFooter from "../../components/common/MyFooter";
export default {
  components: {
    MyFooter
  }
};
</script>

<style scoped>
.container {
  padding-bottom: 22px;
}
.new_content {
  width: 900px;
}
.home_head {
  background: #f1f1f2;
  width: 100%;
  height: 166px;
  text-align: right;
}
.home_head img {
  margin-top: 47px;
  margin-right: 53px;
}
.home_list {
  margin-top: 23px;
}
.home_list li:not(:first-child) {
  margin-top: 100px;
}
.home_list .pos-a {
  bottom: -38px;
  left: 0;
  right: 0;
  margin: 0 auto;
  transition: All 0.4s ease-in-out;
  -webkit-transition: All 0.4s ease-in-out;
  -moz-transition: All 0.4s ease-in-out;
  -o-transition: All 0.4s ease-in-out;
}
.home_list .pos-a:hover {
  transform: translate(0, -10px);
  -webkit-transform: translate(0, -10px);
  -moz-transform: translate(0, -10px);
  -o-transform: translate(0, -10px);
  -ms-transform: translate(0, -10px);
}
.pos-r {
  position: relative;
}
.pos-a {
  position: absolute;
}
.pagination {
  padding-top: 100px;
}
</style>
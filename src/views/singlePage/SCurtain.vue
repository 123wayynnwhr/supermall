<template>
  <div>
    <div class="container">
      <div class="breadCrumbs">
        <a href="/">首页</a> &gt;
        <a href>窗帘&地毯</a>
      </div>
      <div class="PListWrapper">
        <div class="productSideW fl">
          <div class="productSide" id="side">
            <h3>品 类 Category</h3>
            <h4>
              <a >窗帘&amp;地毯频道</a>
            </h4>
            <dl  class="list">
              <dt class="title" @click="toggle($event)">
                <span></span>
                <a >窗帘</a>
              </dt>

              <dd style="display: none;" class="item">
                <ul class="subnav">
                  <li>
                    <a >窗帘布</a>
                  </li>
                  <li>
                    <a >窗纱</a>
                  </li>
                  <li>
                    <a >窗饰五金</a>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl  class="list">
              <dt class="title" @click="toggle($event)" >
                <span></span>
                <a >地毯</a>
              </dt>

              <dd style="display: none;" class="item">
                <ul class="subnav">
                  <li>
                    <a>羊毛类地毯</a>
                  </li>
                  <li>
                    <a >自然纤维地毯</a>
                  </li>
                  <li>
                    <a >浴室地垫</a>
                  </li>
                </ul>
              </dd>
            </dl>
            <h3>特色 Features</h3>
            <ul class="subnav">
              <li>
                <a >新品</a>
              </li>
              <li>
                <a  >促销</a>
              </li>
            </ul>
            <h3 data-type="sub312" style="display:none;">窗帘定制服务 Service</h3>
            <ul class="subnav" data-type="sub312" style="display:none;">
              <li>
                <a >1 选择窗帘款式</a>
              </li>
              <li>
                <a >2 选择面料及配件</a>
              </li>
              <li>
                <a >3 尺寸测量说明</a>
              </li>
              <li>
                <a >4 价格计算说明</a>
              </li>
            </ul>
  
          </div>
          <div class="advert">
            <a href="/article-info-t-41" target="_blank">
              <img
                title
                src="../../../public/img/images/UploadFile/UeditorUP/20150324/6356281127471795297694180.jpg"
              />
            </a>
          </div>
        </div>

        <div class="product_List fr">
          <div class="Pbanner">
            <img
              src="../../../public/img/images/UploadFile/CategoryFile/Windows-Rugs.jpg"
              alt
            />
          </div>

          <a name="pg">&nbsp;</a>

          <div class="product_story clearfix">
            <div class="clearfix">
              <div class="storyBy fl">
                <ul>
                  <li>
                    <div class="condition w84">
                      <dl>
                        <dt>
                          价格
                          <span class="select_arrow"></span>
                        </dt>
                        <dd class="dropDown hide">
                          <ul>
                            <li>
                              <a href rel>
                                <ins>1-1000</ins>
                                <span>(34)</span>
                              </a>
                            </li>
                            <li>
                              <a href rel>
                                <ins>1001-5000</ins>
                                <span>(30)</span>
                              </a>
                            </li>
                            <li>
                              <a href rel>
                                <ins>5001-10000</ins>
                                <span>(16)</span>
                              </a>
                            </li>
                            <li>
                              <a href rel>
                                <ins>10001-20000</ins>
                                <span>(2)</span>
                              </a>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </div>
                  </li>
                  <li>
                    <div class="condition small onclick">
                      <a href>销量</a>
                    </div>
                  </li>
                  <li>
                    <div class="condition small">
                      <a href>价格</a>
                      <span class="asc"></span>
                    </div>
                  </li>
                  <li>
                    <div class="condition small">
                      <a href>新品</a>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="pagination fr">
                <ul>
                  <li class="ptext">1/2</li>
                  <li>
                    <a href="javascript:void(0)" class="prev disable"></a>
                  </li>
                  <li>
                    <a href class="next"></a>
                  </li>
                </ul>
              </div>
              <div class="merge fr">
                <span class="folder"></span>
                <a href>取消合并</a>
              </div>
            </div>
            <div class="s_category hide"></div>
          </div>

          <div class="Pwrapper clearfix">
            <div class="product" v-for="(item,i) of list" :key="i">
              <div class="img">
                <a :title="item.title" target="_blank">
                  <img data-defurl :src="'http://127.0.0.1:4000/'+item.sm" alt />
                  <img
                    class="hoverSwap scrollLoading"
                    data-defurl
                    :src="'http://127.0.0.1:4000/'+item.md"
                    alt
                  />
                </a>
              </div>
              <div class="product_gallery">
                <ul>
                  <li class="active">
                    <img
                      :src="'http://127.0.0.1:4000/'+item.lg"
                      alt
                      data-defurl
                      :data-title="item.title"
                      data-url
                      data-src
                      data-panorama
                    />
                  </li>
                </ul>
              </div>
              <h4>
                <a :title="item.title" target="_blank" href>{{item.title}}</a>
              </h4>
              <p class="price">¥{{item.price}}</p>
              <button @click="addcart(item.pid,item.title,item.price)">加入购物车</button>
              <button size="large" @click="findCart">查看购物车</button>
            </div>
          </div>
          <div class="pagination PT30 clearfix">
            <ul>
              <li>
                <a href="javascript:void(0);" class="first disable"></a>
              </li>
              <li>
                <a href="javascript:void(0);" class="prev disable"></a>
              </li>
              <li class="ptext">1/2</li>
              <li>
                <a href="/product-list-single-312/2#pg" class="next"></a>
              </li>
              <li>
                <a href="/product-list-single-312/2#pg" class="last"></a>
              </li>
            </ul>
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
  data() {
    return {
      list: [],
      pno: 1
    };
  },
  components: {
    MyFooter
  },
  created() {
    this.loadMore();
  },
  methods: {
     findCart(){
      this.$router.push("/Cart");
    },
    loadMore() {
      var url = "scurtain";
      var obj = {
        pno: this.pno
      };
      this.axios.get(url, { params: obj }).then(res => {
        console.log(res);
        this.list = res.data.data;
      });
    },
        addcart(lid, lname, price) {
      console.log(1);
      console.log(lid + "" + lname + "" + price);
      // 功能:将商品信息添加至购物车
      // 1.创建变量url保存请求服务器地址
      var url = "addcart";
      // 2.创建变量obj请求服务器地址
      var obj = { lid, lname, price };
      // 3.发送ajax请求
      this.axios
        .get(url, { params: obj })
        // 4.接收服务器返回数据
        .then(res => {
          // 5.判断code==-1提示请登录 跳转/Login组件
          // 6.判断code==1 提示添加成功
          if (res.data.code == -2) {
            this.$toast("请登录");
            this.$router.push("/Login");
          } else {
            this.$toast("添加成功");
            // this.$router.push("/AddCart")
          }
        });
    }
  }
};
</script>

<style scoped>
</style>
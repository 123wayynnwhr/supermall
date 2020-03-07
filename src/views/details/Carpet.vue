<template>
  <div>
    <div class="container">
      <div class="breadCrumbs">
        <a href="/">首页</a> &gt;
        <a>家纺</a> &gt;
        <a>儿童纺织品</a> &gt;
        <a>地毯</a>
      </div>
      <div class="detail clearfix">
        <div class="productImg fl">
          <a
            id="SkuPhoto"
            class="MagicZoom"
            onmouseover="$.PD.methods.MagicZoomMouseOver()"
            rel="zoom-position:right; hint:false;zoom-width:540px; zoom-height:540px;zoom-distance:20;opacity-reverse:false;opacity:70;"
            style="position: relative; display: inline-block; text-decoration: none; outline: 0px; overflow: hidden; width: auto; height: auto;"
            title
          >
            <img
              src="http://www.harborhousehome.com/UploadFile/Sku/2/618_618/113934.jpg"
              style="opacity: 1;"
            />
            <div
              class="MagicZoomPup"
              style="z-index: 10; position: absolute; overflow: hidden; display: none; visibility: hidden; width: 278px; height: 278px; opacity: 0.7; left: 340px; top: 340px;"
            ></div>
          </a>
        </div>
        <div class="Detail_base fr clearfix">
          <h3 id="h_productname" for="mainselector-Name">Alina 羊毛手工枪刺地毯</h3>
          <div class="numOfPeople clearfix">
            <dl class="fl">
              <dt class="fl">编号:</dt>
              <dd class="fl" for="mainselector-Sku">113934</dd>
            </dl>
            <dl class="fl">
              <dt class="fl">销量:</dt>
              <dd class="fl" for="mainselector-Sales">181</dd>
            </dl>
          </div>
          <div class="PriceModBox clearfix">
            <dl class="originalPrice fl">
              <dt>原价:</dt>
              <dd class="price" for="mainselector-Price">￥2990</dd>
            </dl>
            <dl class="PromoPrice fl">
              <dt>促销价:</dt>
              <dd class="salePrice" for="mainselector-PromotionPrice"></dd>
            </dl>
          </div>
          <dl class="productImg_list clearfix">
            <dt>颜色分类:</dt>
            <dd>
              <span class="p_imgArrowLeft disabled hide"></span>
              <div
                class="pImg_gallery"
                style="visibility: visible; overflow: hidden; position: relative; z-index: 2; left: 0px; width: 435px;"
              >
                <ul
                  for="mainselector-Photos"
                  style="margin: 0px; padding: 0px; position: relative; list-style-type: none; z-index: 1; width: 435px; left: 0px;"
                >
                  <li
                    class="p_selected"
                    style="overflow: hidden; float: left; width: 82px; height: 82px;"
                  >
                    <a
                      rel="zoom-id:SkuPhoto"
                      class="Selector"
                      onclick="return false;"
                      style="outline: 0px; display: inline-block;"
                    >
                      <img src="http://www.harborhousehome.com/UploadFile/Sku/2/80_80/113934.jpg" />
                    </a>
                  </li>
                  <li class style="overflow: hidden; float: left; width: 82px; height: 82px;">
                    <a
                      rel="zoom-id:SkuPhoto"
                      rev="http://www.harborhousehome.com/UploadFile/Sku/1/618_618/113934.jpg"
                      class="Selector"
                      onclick="return false;"
                      style="outline: 0px; display: inline-block;"
                    >
                      <img src="http://www.harborhousehome.com/UploadFile/Sku/1/80_80/113934.jpg" />
                    </a>
                  </li>
                  <li class style="overflow: hidden; float: left; width: 82px; height: 82px;">
                    <a
                      rel="zoom-id:SkuPhoto"
                      rev="http://www.harborhousehome.com/UploadFile/Sku/3/618_618/113934-1.jpg"
                      class="Selector"
                      onclick="return false;"
                      style="outline: 0px; display: inline-block;"
                    >
                      <img src="http://www.harborhousehome.com/UploadFile/Sku/3/80_80/113934-1.jpg" />
                    </a>
                  </li>
                  <li class style="overflow: hidden; float: left; width: 82px; height: 82px;">
                    <a
                      rel="zoom-id:SkuPhoto"
                      rev="http://www.harborhousehome.com/UploadFile/Sku/3/618_618/113934-2.jpg"
                      class="Selector"
                      onclick="return false;"
                      style="outline: 0px; display: inline-block;"
                    >
                      <img src="http://www.harborhousehome.com/UploadFile/Sku/3/80_80/113934-2.jpg" />
                    </a>
                  </li>
                  <li style="overflow: hidden; float: left; width: 82px; height: 82px;">
                    <a
                      rel="zoom-id:SkuPhoto"
                      rev="http://www.harborhousehome.com/UploadFile/Sku/3/618_618/113934-3.jpg"
                      class="Selector"
                      onclick="return false;"
                      style="outline: 0px; display: inline-block;"
                    >
                      <img src="http://www.harborhousehome.com/UploadFile/Sku/3/80_80/113934-3.jpg" />
                    </a>
                  </li>
                </ul>
              </div>
              <span class="p_imgArrowRight hide"></span>
            </dd>
          </dl>
          <div class="product_key">
            <p class="title">
              您所选择的定制商品:
              <a
                href="javascript:;"
                title="定制商品指在已有的沙发类款式和尺寸基础上上提供多种面料或皮料供顾客选择（不包括尺寸定制），通常布艺沙发类定制周期为30-35天，皮沙发类为45-50天，物流配送时间另计。"
              >［什么是定制商品］</a>
            </p>
            <div class="p_sku clearfix" id="mainselector">
              <dl class="p_prop texture clearfix">
                <dt class="fl">材质</dt>
                <dd id="p_Material">
                  <a class="btn btn_s_detail btn_s_active" title="100%羊毛" href="javascript:">100%羊毛</a>
                </dd>
              </dl>
              <dl class="p_prop texture p_img clearfix">
                <dt class="fl lineHeight36">颜色</dt>
                <dd id="p_Color">
                  <a title="驼色/蓝色" class="btn btn_s_detail btn_img btn_s_active" href="javascript:">
                    <img
                      src="http://www.harborhousehome.com/UploadFile/Sku/2/30_30/113934.jpg"
                      width="30"
                      height="30"
                      data-src="http://www.harborhousehome.com/UploadFile/Sku/2/80_80/113934.jpg"
                    />
                  </a>
                </dd>
              </dl>
              <dl class="p_prop texture clearfix">
                <dt class="fl">规格</dt>
                <dd id="p_Specification">
                  <a
                    class="btn btn_s_detail btn_s_active"
                    title="152X244cm"
                    href="javascript:"
                  >152X244cm</a>
                  <a class="btn btn_s_detail" title="244X305cm" href="javascript:">244X305cm</a>
                </dd>
              </dl>
              <dl class="qty_container clearfix">
                <dt class="fl">数量</dt>
                <dd>
                  <div class="qty">
                    <input
                      type="text"
                      for="mainselector-Num"
                      class="qty_val"
                      value="1"
                      maxlength="3"
                      onkeyup="this.value=this.value.replace(/\D/g,'')"
                      onafterpaste="this.value=this.value.replace(/\D/g,'')"
                    />
                    <button class="plus"></button>
                    <button class="minus"></button>
                    <span class="qty-unit">件</span>
                  </div>
                </dd>
              </dl>
            </div>
            <div class="p_attention hide" for="mainselector-notselected">
              <b>请选择您想要的商品信息！</b>
            </div>
            <div class="customize hide" style="display: none;">
              您还可以定制更多材质色款
              <a class="more_customize" for="product_key" href="javascript:;">[ 点击定制 ]</a>
            </div>
            <dl class="p_reselect hide clearfix">
              <dt class="fl">&nbsp;</dt>
              <dd>
                <a
                  class="btn btn_gradient btn_xs marginLeft0 btn_reselect"
                  for="product_key"
                  href="javascript:;"
                >
                  <span class="refresh_icon"></span> 重新选择
                </a>
                <a
                  class="btn btn_gradient btn_xs marginLeft0 cancel_customize"
                  for="product_key"
                  href="javascript:;"
                >
                  <span class="return_icon"></span> 查看现货
                </a>
              </dd>
            </dl>
          </div>
          <div class="product_detail_btn">
            <dl class="p_share clearfix">
              <dt class="fl">分享到:</dt>
              <dd>
                <ul>
                  <li>
                    <a
                      class="sinaIcon"
                      href="javascript:;"
                      onclick="WeiBoShare('sn','pd')"
                      title="新浪微博"
                    >
                      <span>新浪微博</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="tenxunIcon"
                      href="javascript:;"
                      onclick="WeiBoShare('tx','pd')"
                      title="腾讯微博"
                    >
                      <span>腾讯微博</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="renrenIcon"
                      href="javascript:;"
                      onclick="WeiBoShare('rr','pd')"
                      title="人人"
                    >
                      <span>人人</span>
                    </a>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
        </div>
      </div>

      <div class="main_wrap" id="detail_description">
        <div class="p_scombo_tab clearfix">
          <ul>
            <li class="active">商品详情</li>
            <li id="liKeepUp">售后保养</li>
            <li class="hide">灵感故事</li>
          </ul>
        </div>
        <div class="p_content clearfix">
          <div id="div_product_attribute" class="p_attrList clearfix">
            <dl class="fl">
              <dt class="fl">商品系列</dt>
              <dd title="Alina">Alina</dd>
            </dl>
            <dl class="fl">
              <dt class="fl">商品名称</dt>
              <dd title="Alina 羊毛手工枪刺地毯">Alina 羊毛手工枪刺地毯</dd>
            </dl>
            <dl class="fl">
              <dt class="fl">商品货号</dt>
              <dd title="113934">113934</dd>
            </dl>
            <dl class="fl">
              <dt class="fl">材质</dt>
              <dd title="100%羊毛">100%羊毛</dd>
            </dl>
            <dl class="fl">
              <dt class="fl">规格</dt>
              <dd title="152X244cm">152X244cm</dd>
            </dl>
            <dl class="fl">
              <dt class="fl">风格</dt>
              <dd title="传统经典">传统经典</dd>
            </dl>
          </div>
          <div class="p_description" id="ProductDetail" for="mainselector-ProductDetail">
            <p>Alina系列，别具意趣的几何图形令羊毛地毯呈现如清真寺瓷砖般的精致美感，装饰地面，更为品质生活增姿添彩。此系列有两种尺寸可供选择。别具意趣的几何图形令羊毛地毯呈现如清真寺瓷砖般的精致美感，</p>
            <p>羊毛属于天然纤维，质感厚重，触感柔软</p>
            <p>毯面以几何布局营造简洁对称的视觉效果，三层边框与多边形图案内外呼应，颇具抽象美感；造型各异的装饰元素点缀其中，令地毯倍显丰富层次与活力感；搭配蓝色与驼色，呈现明快又宁静的典雅魅力。手工枪刺工艺带来厚实紧密的毯面质感，羊毛材质厚实舒适、同时具有良好的保暖性能与吸音能力。</p>
            <p>手工枪刺工艺，耗时长，繁琐复杂的制造工艺彰显质感，图案更显细致精妙</p>
          </div>
        </div>
        <div class="p_content hide">
          <div class="p_description" for="mainselector-ProductKeepUpDetail">
            <p>1.建议采用真空吸尘器轻柔按压，或专业的地毯清洁两种方式进行护理，以减少羊毛绒地毯、羊毛割绒地毯、羊毛手工枪刺地毯等以及自然纤维机织地毯固有的掉毛现象；2.日常护理可使用真空吸尘器，可从不同方向来回多次吸尘，并轻轻抖动地毯以去除碎屑和散落的纤维；整块地毯的清洁，请选择专业的地毯清洁服务；3.建议每6个月旋转或重新调整地毯位置，为防止地毯毛高被压扁或凹陷，请在较重的家具腿下为地毯采取保护措施；4.避免直接接触水、阳光、腐蚀性药品及洗涤剂，避免受潮；如果沾水，请立即使用干净的白布从水渍边缘向内擦拭；对于污点的清洁，请用清水以及中性洗涤液小范围内清洁，勿完全浸湿；不建议使用化学溶剂。</p>
          </div>
        </div>
        <div class="p_content hide">
          <div class="p_description clearfix"></div>
        </div>
      </div>
      <div class="tabWrap interested clearfix" id="detail_product">
        <div class="p_scombo_tab clearfix">
          <ul>
            <li class="active">类似风格推荐</li>
            <li class>同等价位推荐</li>
            <li class>同类热销品</li>
          </ul>
        </div>
        <div
          class="Pwrapper p_styleWrapper tabWrap_content clearfix"
          style="visibility: visible; overflow: hidden; position: relative; z-index: 2; left: 0px; width: 1185px;"
        >
          <ul
            style="margin: 0px; padding: 0px; position: relative; list-style-type: none; z-index: 1; width: 1185px; left: 0px;"
          >
            <li
              class="product first_product"
              style="overflow: hidden; float: left; width: 220px; height: 332px;"
            >
              <div class="img">
                <a target="_blank" title="Shanta 羊毛手工枪刺地毯">
                  <img
                    src="http://www.harborhousehome.com/UploadFile/Sku/1/220_220/105524.jpg"
                    title="Shanta 羊毛手工枪刺地毯"
                  />
                </a>
              </div>
              <h4>
                <a target="_blank" title="Shanta 羊毛手工枪刺地毯">Shanta 羊毛手工枪刺地毯</a>
              </h4>
              <p class="price">
                ￥4990
                - ￥9990
              </p>
            </li>
            <li class="product" style="overflow: hidden; float: left; width: 220px; height: 332px;">
              <div class="img">
                <a target="_blank" title="Bijar 高密羊毛手工枪刺地毯">
                  <img
                    src="http://www.harborhousehome.com/UploadFile/Sku/1/220_220/102326.jpg"
                    title="Bijar 高密羊毛手工枪刺地毯"
                  />
                </a>
              </div>
              <h4>
                <a target="_blank" title="Bijar 高密羊毛手工枪刺地毯">Bijar 高密羊毛手工枪刺地毯</a>
              </h4>
              <p class="price">
                ￥8990
                - ￥15990
              </p>
            </li>
            <li class="product" style="overflow: hidden; float: left; width: 220px; height: 332px;">
              <div class="img">
                <a target="_blank" title="Kamala 高密羊毛手工枪刺地毯">
                  <img
                    src="http://www.harborhousehome.com/UploadFile/Sku/1/220_220/102798.jpg"
                    title="Kamala 高密羊毛手工枪刺地毯"
                  />
                </a>
              </div>
              <h4>
                <a target="_blank" title="Kamala 高密羊毛手工枪刺地毯">Kamala 高密羊毛手工枪刺地毯</a>
              </h4>
              <p class="price">
                ￥8990
                - ￥15990
              </p>
            </li>
            <li class="product" style="overflow: hidden; float: left; width: 220px; height: 332px;">
              <div class="img">
                <a target="_blank" title="Lesies 羊毛手工枪刺地毯">
                  <img
                    src="http://www.harborhousehome.com/UploadFile/Sku/1/220_220/105021.jpg"
                    title="Lesies 羊毛手工枪刺地毯"
                  />
                </a>
              </div>
              <h4>
                <a target="_blank" title="Lesies 羊毛手工枪刺地毯">Lesies 羊毛手工枪刺地毯</a>
              </h4>
              <p class="price">￥9990</p>
            </li>
            <li class="product" style="overflow: hidden; float: left; width: 220px; height: 332px;">
              <div class="img">
                <a target="_blank" title="Aerin 羊毛手工枪刺地毯">
                  <img
                    src="http://www.harborhousehome.com/UploadFile/Sku/1/220_220/113932.jpg"
                    title="Aerin 羊毛手工枪刺地毯"
                  />
                </a>
              </div>
              <h4>
                <a target="_blank" title="Aerin 羊毛手工枪刺地毯">Aerin 羊毛手工枪刺地毯</a>
              </h4>
              <p class="price">
                ￥2990
                - ￥5990
              </p>
            </li>
          </ul>
          <span id="style_ArrowLeft" class="P_ArrowLeft disabled"></span>
          <span id="style_ArrowRight" class="P_ArrowRight hide"></span>
        </div>
        <div
          class="Pwrapper p_priceWrapper hide clearfix"
          style="visibility: visible; overflow: hidden; position: relative; z-index: 2; left: 0px; width: 0px;"
        >
          <ul
            style="margin: 0px; padding: 0px; position: relative; list-style-type: none; z-index: 1; width: 0px; left: 0px;"
          >
            <li
              class="product first_product"
              style="overflow: hidden; float: left; width: 220px; height: 0px;"
            >
              <div class="img">
                <a target="_blank" title="Shanta 羊毛手工枪刺地毯">
                  <img
                    src="http://www.harborhousehome.com/UploadFile/Sku/1/220_220/105524.jpg"
                    title="Shanta 羊毛手工枪刺地毯"
                  />
                </a>
              </div>
              <h4>
                <a target="_blank" title="Shanta 羊毛手工枪刺地毯">Shanta 羊毛手工枪刺地毯</a>
              </h4>
              <p class="price">
                ￥4990
                - ￥9990
              </p>
            </li>
            <li class="product" style="overflow: hidden; float: left; width: 220px; height: 0px;">
              <div class="img">
                <a target="_blank" title="Bijar 高密羊毛手工枪刺地毯">
                  <img
                    src="http://www.harborhousehome.com/UploadFile/Sku/1/220_220/102325.jpg"
                    title="Bijar 高密羊毛手工枪刺地毯"
                  />
                </a>
              </div>
              <h4>
                <a
                  href="/product-detail-3008396#102325"
                  target="_blank"
                  title="Bijar 高密羊毛手工枪刺地毯"
                >Bijar 高密羊毛手工枪刺地毯</a>
              </h4>
              <p class="price">
                ￥8990
                - ￥15990
              </p>
            </li>
            <li class="product" style="overflow: hidden; float: left; width: 220px; height: 0px;">
              <div class="img">
                <a target="_blank" title="Cleone 羊毛手工枪刺地毯">
                  <img
                    src="http://www.harborhousehome.com/UploadFile/Sku/1/220_220/100624.jpg"
                    title="Cleone 羊毛手工枪刺地毯"
                  />
                </a>
              </div>
              <h4>
                <a
                  href="/product-detail-3008398#100624"
                  target="_blank"
                  title="Cleone 羊毛手工枪刺地毯"
                >Cleone 羊毛手工枪刺地毯</a>
              </h4>
              <p class="price">
                ￥4990
                - ￥9990
              </p>
            </li>
            <li class="product" style="overflow: hidden; float: left; width: 220px; height: 0px;">
              <div class="img">
                <a target="_blank" title="Arjun 羊毛手编地毯">
                  <img
                    src="http://www.harborhousehome.com/UploadFile/Sku/1/220_220/105533.jpg"
                    title="Arjun 羊毛手编地毯"
                  />
                </a>
              </div>
              <h4>
                <a
                  href="/product-detail-3008392#105533"
                  target="_blank"
                  title="Arjun 羊毛手编地毯"
                >Arjun 羊毛手编地毯</a>
              </h4>
              <p class="price">
                ￥1990
                - ￥3990
              </p>
            </li>
            <li class="product" style="overflow: hidden; float: left; width: 220px; height: 0px;">
              <div class="img">
                <a target="_blank" title="Avani Patchwork 羊毛手编地毯">
                  <img
                    src="http://www.harborhousehome.com/UploadFile/Sku/1/220_220/105535.jpg"
                    title="Avani Patchwork 羊毛手编地毯"
                  />
                </a>
              </div>
              <h4>
                <a target="_blank" title="Avani Patchwork 羊毛手编地毯">Avani Patchwork 羊毛手编地毯</a>
              </h4>
              <p class="price">
                ￥3990
                - ￥7990
              </p>
            </li>
          </ul>
          <span id="price_ArrowLeft" class="P_ArrowLeft disabled"></span>
          <span id="price_ArrowRight" class="P_ArrowRight hide"></span>
        </div>
        <div
          class="Pwrapper p_hotWrapper hide clearfix"
          style="visibility: visible; overflow: hidden; position: relative; z-index: 2; left: 0px; width: 0px;"
        >
          <ul
            style="margin: 0px; padding: 0px; position: relative; list-style-type: none; z-index: 1; width: 0px; left: 0px;"
          >
            <li
              class="product first_product"
              style="overflow: hidden; float: left; width: 220px; height: 0px;"
            >
              <div class="img">
                <a target="_blank" title="Cleone 羊毛手工枪刺地毯">
                  <img
                    src="http://www.harborhousehome.com/UploadFile/Sku/1/220_220/100623.jpg"
                    title="Cleone 羊毛手工枪刺地毯"
                  />
                </a>
              </div>
              <h4>
                <a target="_blank" title="Cleone 羊毛手工枪刺地毯">Cleone 羊毛手工枪刺地毯</a>
              </h4>
              <p class="price">
                ￥4990
                - ￥9990
              </p>
            </li>
            <li class="product" style="overflow: hidden; float: left; width: 220px; height: 0px;">
              <div class="img">
                <a target="_blank" title="Shanta 羊毛手工枪刺地毯">
                  <img
                    src="http://www.harborhousehome.com/UploadFile/Sku/1/220_220/105524.jpg"
                    title="Shanta 羊毛手工枪刺地毯"
                  />
                </a>
              </div>
              <h4>
                <a target="_blank" title="Shanta 羊毛手工枪刺地毯">Shanta 羊毛手工枪刺地毯</a>
              </h4>
              <p class="price">
                ￥4990
                - ￥9990
              </p>
            </li>
            <li class="product" style="overflow: hidden; float: left; width: 220px; height: 0px;">
              <div class="img">
                <a target="_blank" title="Arjun 羊毛手编地毯">
                  <img
                    src="http://www.harborhousehome.com/UploadFile/Sku/1/220_220/105532.jpg"
                    title="Arjun 羊毛手编地毯"
                  />
                </a>
              </div>
              <h4>
                <a
                  href="/product-detail-3008392#105532"
                  target="_blank"
                  title="Arjun 羊毛手编地毯"
                >Arjun 羊毛手编地毯</a>
              </h4>
              <p class="price">
                ￥1990
                - ￥3990
              </p>
            </li>
            <li class="product" style="overflow: hidden; float: left; width: 220px; height: 0px;">
              <div class="img">
                <a target="_blank" title="Bijar 高密羊毛手工枪刺地毯">
                  <img
                    src="http://www.harborhousehome.com/UploadFile/Sku/1/220_220/102325.jpg"
                    title="Bijar 高密羊毛手工枪刺地毯"
                  />
                </a>
              </div>
              <h4>
                <a target="_blank" title="Bijar 高密羊毛手工枪刺地毯">Bijar 高密羊毛手工枪刺地毯</a>
              </h4>
              <p class="price">
                ￥8990
                - ￥15990
              </p>
            </li>
            <li class="product" style="overflow: hidden; float: left; width: 220px; height: 0px;">
              <div class="img">
                <a target="_blank" title="Kamala 高密羊毛手工枪刺地毯">
                  <img
                    src="http://www.harborhousehome.com/UploadFile/Sku/1/220_220/102797.jpg"
                    title="Kamala 高密羊毛手工枪刺地毯"
                  />
                </a>
              </div>
              <h4>
                <a target="_blank" title="Kamala 高密羊毛手工枪刺地毯">Kamala 高密羊毛手工枪刺地毯</a>
              </h4>
              <p class="price">
                ￥8990
                - ￥15990
              </p>
            </li>
          </ul>
          <span id="hot_ArrowLeft" class="P_ArrowLeft disabled"></span>
          <span id="hot_ArrowRight" class="P_ArrowRight hide"></span>
        </div>
      </div>
      <div id="producteDescriptionInfo" style="display:none;">
        <div id="div-detail-113935">
          <p>Alina系列，别具意趣的几何图形令羊毛地毯呈现如清真寺瓷砖般的精致美感，装饰地面，更为品质生活增姿添彩。此系列有两种尺寸可供选择。别具意趣的几何图形令羊毛地毯呈现如清真寺瓷砖般的精致美感，</p>
          <p>羊毛属于天然纤维，质感厚重，触感柔软</p>
          <p>毯面以几何布局营造简洁对称的视觉效果，三层边框与多边形图案内外呼应，颇具抽象美感；造型各异的装饰元素点缀其中，令地毯倍显丰富层次与活力感；搭配蓝色与驼色，呈现明快又宁静的典雅魅力。手工枪刺工艺带来厚实紧密的毯面质感，羊毛材质厚实舒适、同时具有良好的保暖性能与吸音能力。</p>
          <p>手工枪刺工艺，耗时长，繁琐复杂的制造工艺彰显质感，图案更显细致精妙</p>
        </div>
        <div id="div-detail-113934">
          <p>Alina系列，别具意趣的几何图形令羊毛地毯呈现如清真寺瓷砖般的精致美感，装饰地面，更为品质生活增姿添彩。此系列有两种尺寸可供选择。别具意趣的几何图形令羊毛地毯呈现如清真寺瓷砖般的精致美感，</p>
          <p>羊毛属于天然纤维，质感厚重，触感柔软</p>
          <p>毯面以几何布局营造简洁对称的视觉效果，三层边框与多边形图案内外呼应，颇具抽象美感；造型各异的装饰元素点缀其中，令地毯倍显丰富层次与活力感；搭配蓝色与驼色，呈现明快又宁静的典雅魅力。手工枪刺工艺带来厚实紧密的毯面质感，羊毛材质厚实舒适、同时具有良好的保暖性能与吸音能力。</p>
          <p>手工枪刺工艺，耗时长，繁琐复杂的制造工艺彰显质感，图案更显细致精妙</p>
        </div>
        <div id="div-keepupdetail-113935">
          <p>1.建议采用真空吸尘器轻柔按压，或专业的地毯清洁两种方式进行护理，以减少羊毛绒地毯、羊毛割绒地毯、羊毛手工枪刺地毯等以及自然纤维机织地毯固有的掉毛现象；2.日常护理可使用真空吸尘器，可从不同方向来回多次吸尘，并轻轻抖动地毯以去除碎屑和散落的纤维；整块地毯的清洁，请选择专业的地毯清洁服务；3.建议每6个月旋转或重新调整地毯位置，为防止地毯毛高被压扁或凹陷，请在较重的家具腿下为地毯采取保护措施；4.避免直接接触水、阳光、腐蚀性药品及洗涤剂，避免受潮；如果沾水，请立即使用干净的白布从水渍边缘向内擦拭；对于污点的清洁，请用清水以及中性洗涤液小范围内清洁，勿完全浸湿；不建议使用化学溶剂。</p>
        </div>
        <div id="div-keepupdetail-113934">
          <p>1.建议采用真空吸尘器轻柔按压，或专业的地毯清洁两种方式进行护理，以减少羊毛绒地毯、羊毛割绒地毯、羊毛手工枪刺地毯等以及自然纤维机织地毯固有的掉毛现象；2.日常护理可使用真空吸尘器，可从不同方向来回多次吸尘，并轻轻抖动地毯以去除碎屑和散落的纤维；整块地毯的清洁，请选择专业的地毯清洁服务；3.建议每6个月旋转或重新调整地毯位置，为防止地毯毛高被压扁或凹陷，请在较重的家具腿下为地毯采取保护措施；4.避免直接接触水、阳光、腐蚀性药品及洗涤剂，避免受潮；如果沾水，请立即使用干净的白布从水渍边缘向内擦拭；对于污点的清洁，请用清水以及中性洗涤液小范围内清洁，勿完全浸湿；不建议使用化学溶剂。</p>
        </div>
      </div>
    </div>
    <input
      id="hidMainSelectorProductsJSON"
      type="hidden"
      value="[{&quot;Id&quot;:64313,&quot;Name&quot;:&quot;Alina 羊毛手工枪刺地毯&quot;,&quot;Productcategoryid&quot;:&quot;C2301&quot;,&quot;Productid&quot;:3009081,&quot;Function&quot;:null,&quot;FrontPhotoUrl&quot;:&quot;http://www.harborhousehome.com/TAOUploadFile/Sku/2/113934 113935 -01.jpg&quot;,&quot;Specification&quot;:&quot;244X305cm&quot;,&quot;Series&quot;:&quot;Alina&quot;,&quot;Space&quot;:&quot;客厅,书房,卧室&quot;,&quot;Style&quot;:&quot;传统经典&quot;,&quot;Color&quot;:&quot;驼色/蓝色&quot;,&quot;Material&quot;:&quot;100%羊毛&quot;,&quot;New&quot;:false,&quot;Sales&quot;:16,&quot;Price&quot;:5990,&quot;Sku&quot;:&quot;113935&quot;,&quot;Productcombinationid&quot;:3003575,&quot;PromotionPrice&quot;:5990,&quot;Photos&quot;:[{&quot;PhotoPath&quot;:&quot;http://www.harborhousehome.com/TAOUploadFile/Sku/2/113934 113935 -01.jpg&quot;,&quot;PhotoPath_220_220&quot;:null,&quot;Sort&quot;:1},{&quot;PhotoPath&quot;:&quot;http://www.harborhousehome.com/TAOUploadFile/Sku/1/113934 113935 -c.jpg&quot;,&quot;PhotoPath_220_220&quot;:null,&quot;Sort&quot;:2},{&quot;PhotoPath&quot;:&quot;http://www.harborhousehome.com/TAOUploadFile/Sku/3/113934 113935 -1.jpg&quot;,&quot;PhotoPath_220_220&quot;:null,&quot;Sort&quot;:3},{&quot;PhotoPath&quot;:&quot;http://www.harborhousehome.com/TAOUploadFile/Sku/3/113934 113935 -2.jpg&quot;,&quot;PhotoPath_220_220&quot;:null,&quot;Sort&quot;:3},{&quot;PhotoPath&quot;:&quot;http://www.harborhousehome.com/TAOUploadFile/Sku/3/113934 113935 -3.jpg&quot;,&quot;PhotoPath_220_220&quot;:null,&quot;Sort&quot;:3}],&quot;ColorUrl&quot;:&quot;http://www.harborhousehome.com/UploadFile/Sku/2/30_30/113934.jpg&quot;,&quot;ColorUrl_80_80&quot;:&quot;http://www.harborhousehome.com/UploadFile/Sku/2/80_80/113934.jpg&quot;,&quot;Shape&quot;:null,&quot;GiftNum&quot;:0,&quot;SortId&quot;:0,&quot;Salesstates&quot;:&quot;Z1&quot;,&quot;SiteID&quot;:361,&quot;Specialspecifications&quot;:null},{&quot;Id&quot;:66594,&quot;Name&quot;:&quot;Alina 羊毛手工枪刺地毯&quot;,&quot;Productcategoryid&quot;:&quot;C2301&quot;,&quot;Productid&quot;:3009081,&quot;Function&quot;:null,&quot;FrontPhotoUrl&quot;:&quot;http://www.harborhousehome.com/UploadFile/Sku/2/113934.jpg&quot;,&quot;Specification&quot;:&quot;152X244cm&quot;,&quot;Series&quot;:&quot;Alina&quot;,&quot;Space&quot;:&quot;客厅,书房,卧室&quot;,&quot;Style&quot;:&quot;传统经典&quot;,&quot;Color&quot;:&quot;驼色/蓝色&quot;,&quot;Material&quot;:&quot;100%羊毛&quot;,&quot;New&quot;:false,&quot;Sales&quot;:181,&quot;Price&quot;:2990,&quot;Sku&quot;:&quot;113934&quot;,&quot;Productcombinationid&quot;:3003576,&quot;PromotionPrice&quot;:2990,&quot;Photos&quot;:[{&quot;PhotoPath&quot;:&quot;http://www.harborhousehome.com/UploadFile/Sku/2/113934.jpg&quot;,&quot;PhotoPath_220_220&quot;:null,&quot;Sort&quot;:1},{&quot;PhotoPath&quot;:&quot;http://www.harborhousehome.com/UploadFile/Sku/1/113934.jpg&quot;,&quot;PhotoPath_220_220&quot;:null,&quot;Sort&quot;:2},{&quot;PhotoPath&quot;:&quot;http://www.harborhousehome.com/UploadFile/Sku/3/113934-1.jpg&quot;,&quot;PhotoPath_220_220&quot;:null,&quot;Sort&quot;:3},{&quot;PhotoPath&quot;:&quot;http://www.harborhousehome.com/UploadFile/Sku/3/113934-2.jpg&quot;,&quot;PhotoPath_220_220&quot;:null,&quot;Sort&quot;:3},{&quot;PhotoPath&quot;:&quot;http://www.harborhousehome.com/UploadFile/Sku/3/113934-3.jpg&quot;,&quot;PhotoPath_220_220&quot;:null,&quot;Sort&quot;:3}],&quot;ColorUrl&quot;:&quot;http://www.harborhousehome.com/UploadFile/Sku/2/30_30/113934.jpg&quot;,&quot;ColorUrl_80_80&quot;:&quot;http://www.harborhousehome.com/UploadFile/Sku/2/80_80/113934.jpg&quot;,&quot;Shape&quot;:null,&quot;GiftNum&quot;:0,&quot;SortId&quot;:0,&quot;Salesstates&quot;:&quot;Z1&quot;,&quot;SiteID&quot;:361,&quot;Specialspecifications&quot;:null}]"
    />
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyFooter from "../../components/common/MyFooter";
import "../.././assets/js/newbanner.js"
import "../.././assets/js/jquery.proguigeselect.js"
import "../.././assets/js/magiczoom.js"
import "../.././assets/js/JSLINQ.js"
import "../.././assets/js/product_detail_other.js"


export default {
  components: {
    MyFooter
  }
};
</script>


<style scoped>
@import "../.././assets/css/magiczoom.css"
</style>
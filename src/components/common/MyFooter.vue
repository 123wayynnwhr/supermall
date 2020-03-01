<template>
  <div id="footer" class="clearfix fl">
    <div class="navFooter">
      <div class="container clearfix">
        <dl class="navFooter_list fl">
          <dt>新手上路</dt>
          <dd>
            <ul>
              <li>
                <a target="_blank" href>在线目录</a>
              </li>
            </ul>
          </dd>
        </dl>
        <dl class="navFooter_list fl">
          <dt>帮助中心</dt>
          <dd>
            <ul>
              <li>
                <a target="_blank" href>家具保养</a>
              </li>
            </ul>
          </dd>
        </dl>
        <dl class="navFooter_list fl">
          <dt>客户服务</dt>
          <dd>
            <ul>
              <li>
                <a target="_blank" href>会员介绍</a>
              </li>
              <li>
                <a target="_blank" href>全国门店</a>
              </li>
              <li>
                <a target="_blank" href>软装设计</a>
              </li>
              <li>
                <a target="_blank" href>会员活动</a>
              </li>
              <li>
                <a target="_blank" href>客诉受理</a>
              </li>
            </ul>
          </dd>
        </dl>

        <div class="special fl">
          <dl>
            <dt>
              <img src="../../../public/img/img/Wechat.jpg" />
            </dt>

            <dd>
              <a href="Page/QRCode">关注官方微信</a>
            </dd>
            <dd></dd>
          </dl>
          <dl>
            <dt>
              <img src="../../../public/img/img/tweet.jpg" />
            </dt>
            <dd>
              <span class="sinaIcon"></span>官方微博
            </dd>
            <dd></dd>
          </dl>
        </div>
        <div class="integrated fr">
          <strong class="phone_number">400-888-1916</strong>
          <dl class="search autoWidth">
            <dt>
              <label>
                <input id="searchbox_foot" maxlength="60" type="text" class="allSearch" />
                <button
                  type="button"
                  class="search_btn"
                  onclick="gotoSearchPage($.trim($('#searchbox_foot').val()))"
                >搜索</button>
              </label>
            </dt>
            <dd></dd>
          </dl>
          <ul>
            <li class="video">
              <a target="_blank" class="fl" href>
                <span class="videoIcon fl"></span>Harbor House
                Life
              </a>
            </li>
            <li class="design">
              <a target="_blank" href>
                <span class="designIcon fl"></span>申请软装设计
                <strong>
                  Design
                  Application
                </strong>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="navFooterLine">
      <div class="container clearfix">
        <ul>
          <li>
            <a target="_blank" href>关于我们</a>
          </li>
          <li>
            <a target="_blank" href>品牌新闻</a>
          </li>
          <li>
            <a target="_blank" href>招牌信息</a>
          </li>
          <li>
            <a target="_blank" href>客服中心</a>
          </li>
          <li>
            <a target="_blank" href>帮助中心</a>
          </li>
          <li>
            <a target="_blank" href>联系我们</a>
          </li>
          <li>
            <a target="_blank" href>全国门店</a>
          </li>
          <li>
            <a target="_blank" href>在线目录</a>
          </li>
          <li>
            <a target="_blank" href>网站地图</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      <div class="container clearfix">
        <p>
          Harbor House 安美西石贸易（浙江）有限公司版权所有
          <span>浙江ICP备07505498</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	
}
</script>>


<style scoped>
</style>
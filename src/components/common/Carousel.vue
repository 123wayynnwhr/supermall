<template>
  <main id="main">
    <div id="banner">
      <div id="btn-left"></div>
      <ul id="ul-imgs" style="width:6745px; margin-left:0px;">
        <li>
          <a href="javascript:;">
            <img src="../../../public/img/Resources/homeimages/20191202/banner1.jpg" />
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="../../../public/img/Resources/homeimages/20191029/banner.jpg" />
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="../../../public/img/Resources/homeimages/20190321/banner.jpg" />
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="../../../public/img/Resources/homeimages/20180810/HHbanner.jpg" />
          </a>
        </li>
        <!--注意！最后li个数要比实际图片张数多1，最后一个li里的img是重复第一张li的图片-->
        <li>
          <a href="javascript:;">
            <img src="../../../public/img/Resources/homeimages/20191202/banner1.jpg" />
          </a>
        </li>
      </ul>
      <ul id="ul-idxs">
        <!--虽然li个数比实际图片张数多1，但小圆点的个数不必多1-->
        <li class="active"></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div id="btn-right"></div>
    </div>
  </main>
</template>

<script>
$(function() {
var i = 0;
var LIWIDTH = 1349;
var DURATION = 500;
var LICOUNT = 4;
var ulImgs = document.getElementById("ul-imgs");
var ulIdxs = document.getElementById("ul-idxs");
var lis = ulIdxs.children;
function moveTo(to) {
  if (to == undefined) {
    to = i + 1;
  }
  if (i == 0) {
    if (to > i) {
      ulImgs.className = "transition";
    } else {
      ulImgs.className = "";
      ulImgs.style.marginLeft = -LIWIDTH * LICOUNT + "px";
      setTimeout(function() {
        moveTo(LICOUNT - 1);
      }, 100);
      return;
    }
  }
  i = to;
  ulImgs.style.marginLeft = -i * LIWIDTH + "px";
  for (var li of lis) {
    li.className = "";
  }
  console.log(i);
  if (i == LICOUNT) {
    i = 0;
    setTimeout(function() {
      ulImgs.className = "";
      ulImgs.style.marginLeft = 0;
    }, DURATION);
  }
  lis[i].className = "active";
}

var btnLeft = document.getElementById("btn-left");
var btnRight = document.getElementById("btn-right");
var canClick = true;
btnRight.onclick = function() {
  move(1);
};
function move(n) {
  if (canClick) {
    console.log(i + n);
    moveTo(i + n);
    canClick = false;
    setTimeout(function() {
      canClick = true;
    }, DURATION + 100);
  }
}
btnLeft.onclick = function() {
  move(-1);
};

var interval = 3000;
var timer = setInterval(function() {
  moveTo();
}, 3000);
var banner = document.getElementById("banner");
banner.onmouseover = function() {
  clearInterval(timer);
};
banner.onmouseout = function() {
  timer = setInterval(function() {
    moveTo();
  }, 3000);
};

var ulIdxs = document.getElementById("ul-idxs");
var canClick = true;
ulIdxs.onclick = function(e) {
  if (canClick) {
    var li = e.target;
    if (li.nodeName == "LI") {
      if (li.className !== "active") {
        for (var i = 0; i < lis.length; i++) {
          if (lis[i] == li) {
            break;
          }
        }
        moveTo(i);
        setTimeout(function() {
          canClick = true;
        }, DURATION);
      }
    }
  }
};
})

export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}
#main {
  width: 1349px;
  margin: 0 auto;
}
#banner {
  width: 1349px;
  overflow: hidden;
  position: relative;
}
#ul-imgs {
  list-style: none;
}
#ul-imgs.transition {
  transition: all 0.5s linear;
}
#ul-imgs > li {
  width: 1349px;
  float: left;
}
#ul-imgs img {
  width: 100%;
  min-width: 1200px;
}
#ul-idxs {
  width: 100px;
  margin: 0 auto;
  list-style: none;
  position: absolute;
  bottom: 25px;
  left: 50%;
  margin-left: -50px;
}
#ul-idxs > li {
  float: left;
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 5px;
  margin: 0 5px;
  cursor: pointer;
}
#ul-idxs > li.active {
  background-color: blue;
}
#btn-left,
#btn-right {
  width: 41px;
  height: 110px;
  position: absolute;
  top: 33%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}
#btn-left {
  float: left;
  background: url(../../../public/img/Resources/images/arrowhead.png) 0 -60px;
  left: 13%;
}
#btn-right {
  float: right;
  background: url(../../../public/img/Resources/images/arrowhead.png) 0 -60px;
  left: 86%;
  background-position: -42px -60px;
}
/* #btn-left:hover,
#btn-right:hover {
  background-size: 40px 70px;
} */
</style>
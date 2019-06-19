<template>
  <div class="list-container">
    <ul class="box">
      <!-- 遮罩盒子 -->
      <div class="cover-box">
        <li v-for="item in arr"
            :key="item.id">
          <div class="box1">
            <div class="img-box">
              <img :src="item.image"
                   alt="" />
              <div class="show-box"></div>
            </div>
            <div class="box-bottom">
              <div class="box-bottom-center">
                <h3 class="content">{{item.content}}</h3>
                <div class="enter">
                  <div class="text"><a href="#">{{item.text}}</a></div>
                  <div class="icon1">
                    <div class="case"
                         style="dispaly:none">
                      <p>{{item.content}}</p>
                      <i class="arrow"></i>
                      <img src="../../assets/images/案例/wx_img.jpg"
                           class="case-img">
                      <p>扫描访问手机端</p>
                    </div>
                  </div>
                  <div class="icon2"></div>
                </div>
                <p class="null"></p>
              </div>
            </div>
          </div>

        </li>
      </div>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        {
          image: require("../../assets/images/案例/1-1F92G123160-L.jpg"),
          content: "玩美",
          text: "直接访问网站"
        },
        {
          image: require("../../assets/images/案例/1-1F92G131540-L.jpg"),
          content: "童绘",
          text: "直接访问网站"
        },
        {
          image: require("../../assets/images/案例/1-1G0161AZM19.jpg"),
          content: "新美装饰",
          text: "直接访问网站"
        },
        {
          image: require("../../assets/images/案例/1-1G0161AJ5926.jpg"),
          content: "华建建设集团有限公司",
          text: "直接访问网站"
        },
        {
          image: require("../../assets/images/案例/1-1G0161A44UU.jpg"),
          content: "湛艺建设集团有限公司",
          text: "直接访问网站"
        },
        {
          image: require("../../assets/images/案例/1-1G016140J0G5.jpg"),
          content: "中材建设有限公司",
          text: "直接访问网站"
        },
        {
          image: require("../../assets/images/案例/1-1F92Q029370-L.jpg"),
          content: "世联行",
          text: "直接访问网站"
        },
        {
          image: require("../../assets/images/案例/1-1F92Q032230-L.jpg"),
          content: "合富辉煌集团",
          text: "直接访问网站"
        },
        {
          image: require("../../assets/images/案例/1-1F92Q035200-L.jpg"),
          content: "武汉美联地产有限公司",
          text: "直接访问网站"
        },
        {
          image: require("../../assets/images/案例/1-1F92Q03R40-L.jpg"),
          content: "中南集团",
          text: "直接访问网站"
        },
        {
          image: require("../../assets/images/案例/1-1G0161J513G4.jpg"),
          content: "北京冠舟科技有限公司",
          text: "直接访问网站"
        },
        {
          image: require("../../assets/images/案例/1-1F92Q05K20-L.jpg"),
          content: "上海绿谷制药有限公司",
          text: "直接访问网站"
        },
        {
          image: require("../../assets/images/案例/1-1F92Q104150-L.jpg"),
          content: "鱼跃医疗",
          text: "直接访问网站"
        },
        {
          image: require("../../assets/images/案例/1-1F92Q109120-L.jpg"),
          content: "蓝天教育",
          text: "直接访问网站"
        },
        {
          image: require("../../assets/images/案例/1-1F92Q114480-L.jpg"),
          content: "蓝话筒",
          text: "直接访问网站"
        },
        {
          image: require("../../assets/images/案例/1-1F92Q11U10-L.jpg"),
          content: "尼山书院",
          text: "直接访问网站"
        },
        {
          image: require("../../assets/images/案例/1-1F92Q140220-L.jpg"),
          content: "优胜教育",
          text: "直接访问网站"
        },
        {
          image: require("../../assets/images/案例/1-1F92Q144330-L.jpg"),
          content: "北京勿幕电影文化传播有限公司",
          text: "直接访问网站"
        },
        {
          image: require("../../assets/images/案例/1-1G01616133XY.jpg"),
          content: "深圳欧美名画艺术有限公司",
          text: "直接访问网站"
        },
        {
          image: require("../../assets/images/案例/1-1F92Q151240-L.jpg"),
          content: "艺术深圳",
          text: "直接访问网站"
        }
      ]
    };
  }
};
</script>
<style scoped>
* {
  text-decoration: none;
  color: #000;
}
.list-container {
  width: 100%;
  display: flex;
}

.box {
  width: 1080px;
  margin: 0 auto;
  margin-top: 36px;
  display: inline-block;
}
.img-box {
  width: 100%;
  height: 198px;
  overflow: hidden;
  position: relative;
}
img {
  width: 259px;
  height: 198px;
  height: auto;
  transition-duration: 2s;
  transform: scale(1, 1);
}
.box1:hover img {
  transition-duration: 2s;
  transform: scale(1.2, 1.2);
}
.box1:hover .show-box {
  width: 259px;
  height: 198px;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  top: 0px;
}
li {
  width: 259px;
  height: 265px;
  float: left;
  margin-left: 0.5%;
  margin-right: 0.5%;
  margin-top: 12px;
  border-bottom: 4px solid #ea5504;
  overflow: hidden;
  cursor: pointer;
  position: relative;
}
.enter {
  width: 156px;
  height: 47px;
  float: right;
  overflow: inherit;
  position: absolute;
  padding-right: 10px;
  display: block;
  right: 0;
}
.box-bottom {
  position: relative;
  width: 259px;
  height: 63px;
  padding-left: 10px;
  z-index: 2;
}
.box-bottom-center {
  width: 249px;
  padding-top: 15px;
}
.box1:hover .box-bottom {
  background: #ea5504;
}
.content {
  font-size: 16px;
  line-height: 33px;
  float: left;
}
.text a {
  width: 80px;
  height: 33px;
  line-height: 33px;
  margin-right: 70px;
}
.text :hover {
  color: #fff;
  border: 1px solid #fff;
}
.icon1 {
  width: 30px;
  height: 33px;
  float: right;
  background-image: url("../../assets/images/案例/icon.png");
  background-repeat: no-repeat;
  background-position: 2px -267px;
  margin-top: -31px;
  position: relative;
}
.icon1:hover {
  /* color: #fff; */
  border: 1px solid #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-image: url("../../assets/images/案例/icon.png");
  background-repeat: no-repeat;
  background-position: 2px -332px;
}
.icon1:hover .case {
  display: block;
}
.icon2 {
  width: 30px;
  height: 33px;
  float: right;
  background-image: url("../../assets/images/案例/icon.png");
  background-repeat: no-repeat;
  background-position: 2px -300px;
  margin-top: -31px;
}
.icon2:hover {
  border: 1px solid #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-image: url("../../assets/images/案例/icon.png");
  background-repeat: no-repeat;
  background-position: 2px -365px;
}
.case {
  display: none;
  width: 140px;
  height: 160px;
  position: absolute;
  padding: 6px;
  border-right: 1px solid #efefef;
  bottom: 56px;
  right: 0;
  background-color: #fff;
}
.icon1:hover .arrow {
  display: block;
}
.arrow {
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  border: 8px solid transparent;
  border-top: 8px solid #fff;
  bottom: -16px;
  right: 18px;
}
.case-img {
  display: block;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 10px;
}
.arrow img p {
  display: block;
  padding: 10px;
  line-height: 1;
  text-align: center;
  color: #383838;
  white-space: nowrap;
}
</style>

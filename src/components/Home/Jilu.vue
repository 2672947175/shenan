<template>
  <div class="jilubox">
    <h2 class="rz_h2">记录每天的点滴 掌握市场的趋势</h2>
    <div class="rz_h3">我们一直走在时代的前沿，聚集行业实时动态，发布公司新资讯，欢迎您的关注</div>
    <div class="conbox">
      <div class="diva" ref="hove">
        <p v-for="(item,index) in jiluList" :key="item.id" @mouseenter="enter(index)">{{item.name}}</p>
      </div>
      <div class="hov_con">
        <div class="hov_box" v-for="item in jiluList[idx].arrList" :key="item.id">
          <div class="tex_con">
            <div class="data">
              <span class="span1">12</span>
              <span class="span2">2017-10</span>
            </div>
            <div class="tex">
              <p class="p1">{{item.title}}</p>
              <p
                class="p2"
              >{{item.text}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="morbox">
      <span>查看更多新闻</span>
      <img src="@/assets/images/shouye/indexArrow.jpg" alt="">
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            jiluList:[
                {
                    id:1,
                    name:'公司新闻',
                    arrList:[
                        {
                            id:0,
                            title:'网站百度移动适配的方法',
                            text:' 一、什么叫百度移动适配？ 当您同时拥有PC站与手机站，而且两者在内容上能够对应，我们需要移动适配告之百度，有助于百度在移动搜索中将原PC页结果替换为对应的手机页结果。 二...'
                        },
                        {
                            id:1,
                            title:'最初的网站设计就要考虑',
                            text:'最初很多的公司在网站设计的时候对公司的具体需求还没有确定，就是希望在如今的网络时代自己应该有属于自身的在网络上的一个地方，对其他的问题自然也就没有多想。事实上，无...'
                        },
                        {
                            id:3,
                            title:'哪些误区不应该是网站设',
                            text:'在进行网站设计的时候，有一些人可能会走入一些误区，这些误区对于我们真正的做好网站建设是有影响的，甚至在今后还会直接的影响到我们总体上的使用了。到底哪些误区是我们在...'
                        },
                        {
                            id:4,
                            title:'如何更好的实现页面设计',
                            text:'网站制作的时候的忌讳就是平铺，在整个网站上面没有任何的层次感，这个方面是极大的问题。任何时候如果我们无法真正的确保网站建设的层次感，这样就无法更好的完成整个网...'
                        }
                    ],
                },
                {
                    id:2,
                    name:'媒体报道',
                    arrList:[
                        {
                            id:0,
                            title:'织梦dede自定义表单导出',
                            text:'织梦dede自定义表单功能常用于网站留言功能，一般在网站后台自定义表单可以查看到留言的数据，假设网站留言的数据量比较庞大，为了利于管理，我们可以将自定义表单的数据导出为...'
                        },
                        {
                            id:1,
                            title:'企业网站制作板块功能介',
                            title:'织梦dede自定义表单导出',
                            text:'这个栏目一般下设公司简介、企业文化、荣誉资质栏目，均采用智能网站中的公司介绍的模块来实现。操作方便，更新简单。 关于我们 一、 公司简介、企业文化 1、支持图片、文字和表...'
                        },
                        {
                            id:2,
                            title:'网站设计一定要把用户体',
                            text:'面对铺天盖地、门类众多的网站，总让人有时感觉进哪个页面了？进来是干什么的？这个网站做的好差劲啊，又或者会嘀咕这个网站注册怎么一点都不方便啊？像这些对网站抱怨之类的...'
                        },
                        {
                            id:4,
                            title:'企业网站建设前要做的功',
                            text:'俗话说的好：欲速则不达。想着急赶着功夫做出来，不管做的好不好，只关心做完与否而忽视质量的好坏。要知道产品即使做出来了，创造不了效益，带来不了利润，那也只是个没有价...'
                        },
                        
                    ],
                },
                {
                    id:3,
                    name:'建设知识',
                      arrList:[
                        {
                            id:0,
                            title:'SEO优化中如何进行网站流',
                            title:'织梦dede自定义表单导出',
                            text:'通过网站流量管理，了解产品运行的状况，能够很好的帮助产品和运营提供决策依据，调整运营策略，产品策略，促进产品更好的为用户服务。 优化流量和改善页面不是网站分析师的直...'
                        },
                        {
                            id:1,
                            title:'传统PC端网站页面设计这么',
                            text:'现在网站建设上线后，一般有两个版本，一个是传统的PC端，一种是移动端，PC端网站用传统上网设备比如台式电脑、笔记本电脑浏览比较流畅，而移动端主要是适应智能安卓手机、苹果...'
                        },
                        {
                            id:2,
                            title:'定制网站能有效防止病毒',
                            text:'5月12日，全球99个国家和地区发生超过7.5万起电脑病毒攻击事件，罪魁祸首是一个名为想哭(WannaCry)的勒索软件。安全专家提醒用户尽快安装补丁。如果不及时更新，那么意味着电脑的文...'
                        },
                        {
                            id:3,
                            title:'高端网站建设四大关键点',
                            text:'在很多人的印象中，似乎认为网站建设是一个并不复杂的事情，但是真正的情况是一个网站的建成是受到诸多的因素影响的，所以在建设过程中一定要特别注意一些关键点的把握。将网...'
                        },
                        
                    ],
                }
            ],
            
            idx:0,
           
        }
    },
    mounted(){
        this.hovs(this.idx,'red','#fff')
    },
    methods: {
        enter(idx){
            this.jiluList.map((item,index)=>{
                this.hovs(index,'#f8f8f8','#737373')
            })
            this.idx=idx
            this.hovs(idx,'red','#fff')
        },
        // hover 封装
        hovs(idx,bag,color){
            let hov=this.$refs.hove.children[idx]
            hov.style.background=bag
            hov.style.color=color
        }
    },
}
</script>
<style lang="less" scoped>
.jilubox{
  width: 100%;
  background: #fff;
  padding-bottom: 50px;
}
.rz_h2 {
  font-size: 24px;
  line-height: 48px;
  color: #000;
  padding-top: 20px;
  text-align: center;
}
.rz_h3 {
  font-size: 18px;
  line-height: 32px;
  color: #333;
  margin: 10px auto 0;
  text-align: center;
  width: auto;
}
.conbox {
  margin: 50px auto 20px;
  width: 100%;
  background: #fff;
}
.diva {
  width: 40%;
  font-size: 0;
  height: 33px;
  line-height: 33px;
  margin: 0 auto;
  // background: pink;
  p {
    cursor: pointer;
    padding: 0 17px;
    height: 33px;
    margin: 0 8%;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    color: #737373;
    font-size: 14px;
    background-color: #f8f8f8;
    border-radius: 30px;
    float: left;
  }
}
.hov_con {
  width: 89%;
  margin: 30px auto;
  overflow: hidden;
}
.hov_box {
  float: left;
  margin: 0 30px 26px;
  width: 45.1%;

  .tex_con {
    padding: 16px;
    background-color: #fff;
    transition: all 0.5s;
    overflow: hidden;
    .data {
      float: left;
      width: 82px;
      height: 82px;
      background-color: #ff4d00;
      color: #fff;
      border-radius: 4px;
      text-align: center;
      .span1 {
        padding-top: 13px;
        font-size: 21px;
        font-weight: bold;
        display: block;
      }
      .span2 {
        font-size: 18px;
      }
    }
    .tex {
      float: right;
      width: 425px;
      font-size: 14px;
      line-height: 24px;
      text-align: left;
      margin-left: 20px;
      .p1 {
        font-size: 16px;
        padding-bottom: 7px;
        border-bottom: 1px dashed #e6e6e6;
      }
      .p2 {
        padding-top: 3px;
        color: #9a9a9a;
      }
    }
  }
  .tex_con:hover .p1 {
    color: red;
  }
  .tex_con:hover {
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  }

}
.morbox{
    display: inline-block;
    text-align: center;
    padding: 0 27px 0 40px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #ff9466;
    span{
      display: inline-block;
      vertical-align: middle;
      font-size: 13px;
      color: #ff4d00;
      font-family: "宋体";
    }
    img{
      padding-left: 30px;
      transition: all 0.5s;
    }

}
.morbox:hover img{
      padding-left: 60px;
}
</style>

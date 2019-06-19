<template>
<div class="constbox">
    <div class="contaiten">
        <div class="toptext">
            <div class="h2">建网站满意再收费,送域名空间 24小时直拨：13436911353 微信同步</div>
            <div class="h3">承诺：全新定制开发，非自助建站模板网站</div>
        </div> 
        <div class="contexts">
            <div class="boxcon" ref="boxcons" v-for="(item,index) in feilist" @mouseenter="shows(index)" @mouseleave="hiddes(index)" :key="item.id">
                <div>
                    <img  :src="item.imgUrl" alt="">
                </div>
                <div class="title">
                    {{item.title}}
                </div>
                <div class="price">
                   {{item.price}}
                </div>
                <div class="detail">
                    {{item.text}}
                </div>
                <div class="link">
                    了解更多
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>

export default {
    data() {
        return {
            feilist:[
                {
                    id:1,
                    imgUrl:require('@/assets/images/shouye/service4.png'),
                    imgUrl1:require('@/assets/images/shouye/service4a.png'),
                     title:'品品牌/外贸网站建设牌官网 （三版合一）',
                    price:" 4800元起",
                    text:'舍南科技承诺：不做形象丑陋的网站，不做毫无用处的网站，不做无法维护的网站，不做没有售后的网站！'
                    

                },
                {
                    id:2,
                    imgUrl:require('@/assets/images/shouye/service2.png'),
                    imgUrl1:require('@/assets/images/shouye/service2a.png'),
                    title:'品牌官网 （三版合一）',
                    price:"6800元起",
                    text:'适合注重美工形象的客户，以创意元素设计企业品牌;适合注重细节品牌公司，让访客眼前一亮的感觉.'
                   
                },
                {
                    id:3,
                     imgUrl:require('@/assets/images/shouye/service3.png'),
                    imgUrl1:require('@/assets/images/shouye/service3a.png'),
                   title:'H5响应式网站',
                    price:"8600元起",
                    text:'美工创意设计、H5自适应代码构造，动态网站展示，多版本自适应网站.'
                },
                {
                    id:4,
                    imgUrl:require('@/assets/images/shouye/service5.png'),
                    imgUrl1:require('@/assets/images/shouye/service5a.png'),
                    title:'商城支付/门户网站',
                    price:"9800元起",
                    text:'独立商城系统+手机站+微信，提供线上交易服务，让您的公司通过互联网增加销售途径，扩张利润空间。'
                },
                {
                    id:5,
                    imgUrl:require('@/assets/images/shouye/service6.png'),
                    imgUrl1:require('@/assets/images/shouye/service6a.png'),
                    title:'入门官网制作',
                    price:"1680元起",
                    text:'适合初创企业，永模板网站的价钱得到设计网站的服务'
                },
            ],
          
        }
    },
    mounted() {
        console.log()
    },
    methods: {
        shows(idx){
            let img =  this.$refs.boxcons[idx].children[0].children[0]
            let imgurls = this.feilist.find(item=>item.id==(idx+1))
            let {imgUrl1} = imgurls
            img.src=imgUrl1
        },
        hiddes(idx){
            let img =  this.$refs.boxcons[idx].children[0].children[0]
            let imgurls = this.feilist.find(item=>item.id==(idx+1))
            let {imgUrl} = imgurls
            img.src=imgUrl
        }
    },
}
</script>
<style scoped>
.constbox{
    width: 100%;
    background: #fff;
}
.contaiten{
    width: 89%;
    margin: 0 auto;
    /* background: red; */
    overflow: hidden;
    height: 600px;

}
.toptext{
    width: 100%;
    margin-top: 20px;
   
}
.h2{
    font-size: 23px;
    line-height: 48px;
    color: #000;
    text-align: center;
}
.h3{
    font-size: 21px;
    color: #000;
    text-align: center;
}
.contexts{
    width: 100%;
    margin-top: 30px;
     display: flex;
}
.boxcon{
    width: 20%;
    /* height: 200px; */
    /* background: pink; */
    padding: 0 30px;
    box-sizing: border-box;
    
}
img{
   width: 150px;
   height: 150px;
   display: block;
   margin: 0 auto; 
   cursor: pointer;   
}
.title{
    height: 28px;
    line-height: 28px;
    font-size: 18px;
    color: #111;
    margin: 40px 0;
    overflow: hidden;
}
.price{
    overflow: hidden;
    height: 38px;
    line-height: 28px;
    font-size: 18px;
    color: #de0303;
}
.detail{
    overflow: hidden;
    height: 60px;
    line-height: 20px;
    font-size: 12px;
    color: #666;
}
.link{
    overflow: hidden;
    height: 28px;
    line-height: 28px;
    font-size: 14px;
    color: #333;
    font-family: "Microsoft Yahei";
    text-align: center;
    width: 192px;
    margin: 15px auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #fff;
    cursor: pointer;
    
}
.link:hover{
    background: #eeee;
}
</style>

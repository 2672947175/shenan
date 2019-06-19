<template>
    <div class="jingbox">
       <h2>精琢于品质 专攻于技术</h2> 
       <p class="texp">以工匠的精神，铸就行业典范 / 将作品通过艺术和技术的结合，打造精品案例</p>
        <div class="casebox">
            <ul class="ulbox">
                <li v-for="item in tiaolist" :key="item.id">{{item.text}}</li>
            </ul>
        </div>
        <div class="neibox">
            <div class="imgbox" v-for="item in imgList" :key="item.id">
                <div class="imgcon">
                    <img :src="item.imgUrl" alt="">
                    <span class="spa border-top"></span>
                    <span class="spa border-right"></span>
                    <span class="spa border-bottom"></span>
                    <span class="spa border-left"></span>
                </div>
                <div class="jingdu"></div>
                <div>
                    <div class="titlebox">{{item.title}}</div>
                    <div class="rigthbox">
                        <div class="textboxa">直接访问网站</div>
                        <div class="buon bnt"></div>
                        <div class="buon bnc"></div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="chabox">
            查看全部案例
            <img src="@/assets/images/shouye/indexArrow.jpg" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tiaolist:[
                {
                    id:1,
                    text:' 地产建筑'
                },
                 {
                    id:2,
                    text:' 珠宝服饰'
                },
                 {
                    id:3,
                    text:' 门户电商'
                },
                 {
                    id:4,
                    text:' 机器人'
                },
                 {
                    id:5,
                    text:'品牌门户'
                },
              
            ],
            imgList:[
                {
                    id:1,
                    imgUrl:require('@/assets/images/shouye/1-1F92Q032230-L.jpg'),
                    title:'合富辉煌集团'
                },
                 {
                    id:2,
                    imgUrl:require('@/assets/images/shouye/1-1F92Q035200-L.jpg'),
                    title:'武汉美联地产有限公司'
                },
                {
                    id:3,
                    imgUrl:require('@/assets/images/shouye/1-1F92Q03R40-L.jpg'),
                    title:'中南集团'
                },
                {
                    id:4,
                    imgUrl:require('@/assets/images/shouye/1-1G016112T5562.jpg'),
                    title:'卓达房地产集团有限公司'
                },
                {
                    id:5,
                    imgUrl:require('@/assets/images/shouye/1-1G0161055394V.jpg'),
                    title:'名门地产（河南）有限公司'
                },
                {
                    id:6,
                    imgUrl:require('@/assets/images/shouye/1-1G016104RTZ.jpg'),
                    title:'山西智诚房地产开发有限公司'
                },
                {
                    id:7,
                    imgUrl:require('@/assets/images/shouye/1-1G01610155O29.jpg'),
                    title:'同策房产咨询股份有限公司'
                },
                {
                    id:8,
                    imgUrl:require('@/assets/images/shouye/1-1G01Q343300-L.jpg'),
                    title:'奥晨集团'
                },
                {
                    id:9,
                    imgUrl:require('@/assets/images/shouye/1-1G01Q353350-L.jpg'),
                    title:'中昂集团'
                },                
            ]
        }
    },
}
</script>
<style  scoped>
.jingbox{
    width: 100%;
    background: #fff;
}
h2{
    font-size: 24px;
    line-height: 48px;
    color: #000;
    margin-top: 20px;
    text-align: center;
}
.texp{
    font-size: 18px;
    line-height: 32px;
    color: #333;
    margin: 10px auto 0;
    text-align: center;
    width: auto;
}


.casebox{
    text-align: center;
    margin: 40px auto;
    margin-bottom: 50px;
}
.ulbox{
    display: inline-block;
    margin: 0 auto;
}
.ulbox li{
    display: inline-block;
    cursor: pointer;
    color:   #333;;
    font-size: 14px;
    margin: 0 30px;
    float: left;
}
.ulbox li:hover{
    color: red;
}
.neibox{
    width: 100%;
    overflow: hidden;
    
    background: #fff;
}
.imgbox{
    float: left;
    width: 31%;
    margin: 0 1.1% 20px;
    padding-bottom: 20px;
    text-align: left;
}
.imgcon{
    width: 100%;
    overflow: hidden;
     position: relative;
}
.imgcon img{
     width: 100%;
    display: block;
    transform: scale(1);
    transition: all 1s;
}
.imgcon:hover img{
    transform: scale(1.1);
}
.jingdu{
    width: 0px;
    height: 1px;
    background: red;
    margin: 3%;
    transition: all 0.6s;
}
.imgbox:hover .jingdu{
     width: 100px;
}
.spa{
    position: absolute;
    background: #fff;
    opacity: .7;
    transition: all 0.8s;
}
.border-top {
    width: 0%;
    height: 1px;
    top: 6%;
    left: 5%;
}
.border-right {
   width: 1px;
    height: 0;
    top: 94%;
    right: 5%
}
.border-bottom {
        width: 0;
    height: 1px;
    bottom: 6%;
    left: 95%;
}
.border-left {
    width: 1px;
    height: 0%;
    top: 6%;
    left: 5%;
}
.imgcon:hover .border-top{
     width: 90%;
     
}
.imgcon:hover .border-bottom{
     width: 90%;
     left: 5%;
}
.imgcon:hover .border-right{
    height: 88%;
    top: 6%;
}
.imgcon:hover .border-left{
    height: 88%;
}
.titlebox{
    width: 54%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 20px;
    color: #333;
    padding: 0 15px;
    margin-top: 18px;
    float: left;
}
.rigthbox{
    float: right;
    width: 45%;
    overflow: hidden;
    white-space: nowrap;
    font-size: 18px;
    padding: 0 15px;
    margin-top: 18px;
}
.buon{
    display: block;
    float: left;
    width: 33px;
    height: 33px;
    border: 1px solid transparent;
    border-radius: 50%;
}
.buon:hover{
    transition: border 0.3s linear;
    border: 1px solid #ccc;    
}
.bnt{
    background: url('../../assets/images/shouye/icon.png')no-repeat -1px -301px;
}
.bnc{
    background: url('../../assets/images/shouye/icon.png') no-repeat -1px -268px;
}
.textboxa{
    width: 100px;
    line-height: 33px;
    border-radius: inherit;
    text-align: center;
    font-size: 16px;
    float: left;
    white-space: nowrap;
    border: 1px solid #fff;
}
.textboxa:hover{
    border: 1px solid #ccc; 
    color: red;
}
.chabox{
    font-size: 16px;
    display: inline-block;
    padding:10px 20px;
    border: 1px solid #ff4d00;
    color: #ff4d00;
    margin-bottom: 20px;
}
.chabox img{
    margin-left: 10px;
    transition: all 0.6s;
}
.chabox:hover img{
    margin-left: 50px;
}
</style>


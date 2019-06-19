<template>
    <div>
        <h2>
            <p class="p1">做有视觉冲击力的网站，让您的网络订单“飞”起来！</p>
            <p class="p2">营销型网站<span>6</span>大特点</p>
        </h2>
        <div class="box">
            <div class="d1" v-for="val in ary" >
                <div>
                    <img :src="val.img" alt="" class="z">
                </div>       
                <h3>{{val.text}}</h3>
                <div>
                    <p>{{val.text1}}</p>
                </div>
                
            </div>
        </div>
    </div>
    
</template>
<script>
export default {
    data(){
        return {
            ary:[
                {
                    img:require('@/assets/images/wangzhanjianshe/yx3_03.png'),
                    text:'定位要准',
                    text1:"优秀的策划方案能够让您的网站在同行间异军突起"
                },
                   {
                    img:require('@/assets/images/wangzhanjianshe/yx3_05.png'),
                    text:'形象要靓',
                    text1:"一个好网站需要具备超强的视觉营销效果以求令目标客户记住"
                },
                 {
                    img:require('@/assets/images/wangzhanjianshe/yx3_07.png'),
                     text:'实力要强',
                    text1:"一个好的网站必须全方位的展现出企业突出的优势"
                },
                 {
                    img:require('@/assets/images/wangzhanjianshe/yx3_17.png'),
                    text:'体验要好',
                    text1:"我们可通过全面的站内交互体验通过在线聊天工具等多种形式与客户主动沟通交流"
                },
                 {
                    img:require('@/assets/images/wangzhanjianshe/yx3_13.png'),
                     text:'成本要低',
                    text1:"找一家专业的营销型建站公司即可让网络营销事半功倍！"
                },
                 {
                    img:require('@/assets/images/wangzhanjianshe/yx3_15.png'),
                    text:'营销要广',
                    text1:"好的营销型网站就能做到随时随地对您的产品进行24小时不间断营销推广"
                },
                
            ]
        }
        
    }
}
</script>
<style scoped>
    .p1{
        display: block;
        width: 100%;
        font-size: 17px;
        color: #5e5d5d;
        line-height: 40px;
        font-weight: 500;
        margin-top: 33px;
    }
    .p2{
        font-size: 42px;
        font-weight: 500;
        color: #5e5e5e;
        line-height: 50px;
        margin-bottom: 49px;
        margin-top: px;


    }
    .p2 span{
        color: #ea5404
    }
    .box{
        height:728px;
        /* border: 1px solid black; */
        display: flex;
        flex-flow: wrap;
        margin-left: 30px;
        justify-content:center;
        align-items: center;
        
    }
    .d1{
        width: 400px;
        height: 305px;
        

    }
    .d1 h3{
        font-size: 24px;
        color: #5e5e5e;
        padding-top: 20px;
        font-weight: 500   
    }
    .d1 p{
        width: 350px;
        font-size: 16px;
        color: #a5a5a5;
        padding-top: 6px;
        line-height: 26px;
        padding-top: 42px;
        text-align: center;
        padding-left:60px;
    }
    .z {
            transition: All 0.4s ease-in-out;
            -webkit-transition: All 0.4s ease-in-out;
            -moz-transition: All 0.4s ease-in-out;
            -o-transition: All 0.4s ease-in-out;
        }
        .z:hover {
            transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
        }
   
</style>
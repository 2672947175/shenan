<template>
    <div class="yongcontent">
        <div class=imgcon>
            <img src="@/assets/images/shouye/rz_tit_h2_hz.png" alt="">
        </div>
        <div class="textbox">
            致力成为企业认可的互联网战略合作伙伴
        </div>
        <ul class='ulbox'>
            <li class="lis" v-for="item in youList" :key='item.id'>
                <div class="lisbox-img" v-if="item.id!=3?true:false">
                    <img :src="item.imgUrl" alt="">
                </div>

                <div class="tetcong" v-else>
                    <p class="p_shu"><span>{{item.title}}</span>+<i></i></p>
                    <div class='p2'>
                        <p>{{item.text1}}</p>
                        <p>{{item.text2}}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            youList:[
                {
                    id:1,
                    imgUrl:require('@/assets/images/shouye/rz_brand_pic1.png')
                },
                {
                    id:2,
                    imgUrl:require('@/assets/images/shouye/rz_brand_pic2.png')
                },
                {
                    id:3,
                    title:"3680",
                    text1:'大中型企业选择我们',
                    text2:'通过为客户创造价值，从而实现自己的价值'
                },
                {
                    id:4,
                    imgUrl:require('@/assets/images/shouye/rz_brand_pic3.png')
                },
                {
                    id:5,
                    imgUrl:require('@/assets/images/shouye/rz_brand_pic4.png')
                },
                {
                    id:6,
                    imgUrl:require('@/assets/images/shouye/rz_brand_pic5.png')
                },
                {
                    id:7,
                    imgUrl:require('@/assets/images/shouye/rz_brand_pic6.png')
                },
                {
                    id:8,
                    imgUrl:require('@/assets/images/shouye/rz_brand_pic7.png')
                },
                {
                    id:9,
                    imgUrl:require('@/assets/images/shouye/rz_brand_pic8.png')
                },
                {
                    id:10,
                    imgUrl:require('@/assets/images/shouye/rz_brand_pic9.png')
                },
                {
                    id:11,
                    imgUrl:require('@/assets/images/shouye/rz_brand_pic10.png')
                },
            ]
        }
    },
}
</script>
<style lang="less" scoped>
.yongcontent{
    background-color: #242c3e;
    padding-top: 1px;
    padding-bottom: 5px;
    .imgcon{
        margin-top:20px;
    }
    .textbox{
        text-align: center;
        font-size: 18px;
        line-height: 32px;
        color: #b0b0b0;
        margin-top: 15px;
    }
}
.ulbox{
     margin-top: 20px;
    width: 100%;
    overflow: hidden;
    padding-top:30px;
    margin-bottom: 30px;


    li{
        width: 16.666%;
        float: left;
        margin-bottom: 20px;   
    }
    .lisbox-img{
        width: 92%;
        margin: 0 auto;
        transform: scale(1);
        transition: 0.7s all ease-out;
        background-color: #323848;
        background-color: rgba(50,56,72,0.55);
    }
    li:hover .lisbox-img{
        background: #ff4d00;
        transform: scale(1.17);
    }
    .tetcong{
        width: 94%;
        margin: 0 auto;
        .p_shu{
            text-align: center;
            font-size: 72px;
            line-height: 72px;
            color: #f5f5f5;
            margin: 35px auto 10px;
            i{
                    display: block;
                    width: 174px;
                    margin: 10px auto;
                    height: 1px;
                    background-color: #363d4f;
            }
        }
        .p2{
            text-align: center;
            color: #a9a9a9;
            font-size: 18px;
            line-height: 32px;
        }
    }
}
.ulbox li:nth-child(3){
    width: (16.666%*2);
}
</style>

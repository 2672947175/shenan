<template>
    <div class="zhangbox">
      <div class="zhang" :style="back">
            <div class="imgboxa" :class="showScroll?'bag':''">
            <img class="img1" src="@/assets/images/shouye/121f8f46-cbf6-490c-816c-678c83dcb5af.png" alt="">
            <img class="img2" src="@/assets/images/shouye/fd99f9ec-658d-4303-9dff-29746fd9d32e.png" alt="">
            <img class="img3" src="@/assets/images/shouye/4c26d96e-b369-424e-88df-1f3a5bb654fe.png" alt="">
            <img class="img4" src="@/assets/images/shouye/f916f1a1-a663-4f3d-8303-4ea1b7fbb0a2.png" alt="">
            <img class="img5" src="@/assets/images/shouye/0fa6f6d4-3b68-4fc8-b617-3c5d69727f1f.png" alt="">
            <img class="img6" src="@/assets/images/shouye/2221fb2f-2c9e-48f6-92af-26dcea2b5b86.png" alt="">
        </div>
        <div class="resp_pse">
            <ul :class="showScroll?'respans':''">
                <li v-for="item in zhangList" :key='item.id'>
                    <img class="imgco" :src="item.imgUrl" alt="">
                    <div class="zhangdiv">
                        <h4>{{item.title}}</h4>
                        <p>{{item.text}}</p>
                        <div class="textbox">
                            <div class="textcon" v-for="items in item.texList" :key="items.id">
                                <em></em>
                                <span>{{items.text}}</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
      </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  
    data() {
        return {
            back:{
                 backgroundImage: `url(${require('@/assets/images/shouye/response_bg.png')})`,
            },
            aa:'',
            as:'',
            zhangList:[
                {
                    id:1,
                    imgUrl:require('@/assets/images/shouye/rz_yx_pic1.png'),
                    title:'品牌营销站',
                    text:'Brand Marketing Website',
                    texList:[
                        {
                            id:1,
                            text:'企业网站建设',
                        },
                        {
                            id:2,
                            text:'营销网站建设',
                        },
                        {
                            id:3,
                            text:'品牌网站建设',
                        },
                        {
                            id:4,
                            text:'响应式网站建设',
                        },
                        
                    ]
                },
                {
                    id:2,
                    imgUrl:require('@/assets/images/shouye/rz_yx_pic2.png'),
                    title:'手机移动端开发',
                    text:'Mobile Terminal Development',
                    texList:[
                        {
                            id:1,
                            text:' APP开发',
                        },
                        {
                            id:2,
                            text:'微信小程序',
                        },
                        {
                            id:3,
                            text:' 手机网站建设',
                        },
                        {
                            id:4,
                            text:' H5、小游戏',
                        },
                     
                    ]
                },
                {
                    id:3,
                    imgUrl:require('@/assets/images/shouye/rz_yx_pic3.png'),
                    title:'商城平台开发',
                    text:'E-commerce Platform Development',
                    texList:[
                        {
                            id:1,
                            text:'电商平台',
                        },
                        {
                            id:2,
                            text:'微商城',
                        },
                        {
                            id:3,
                            text:'微分销微',
                        },
                        {
                            id:4,
                            text:'网站建设',
                        },
                    ]
                },
                {
                    id:4,
                    imgUrl:require('@/assets/images/shouye/rz_yx_pic4.png'),
                    title:'网络推广服务',
                    text:'Web Promotion',
                    texList:[
                        {
                            id:1,
                            text:'互动游戏',
                        },
                        {
                            id:2,
                            text:'网络营销',
                        },
                    ]
                }
            ]
        }
    },
    created() {
        setTimeout(() => {
            this.aa='bag'
            this.as = 'respans'
        },1000);

    },
   computed: {
       ...mapState(['showScroll'])
   },
   mounted() {

   },
    
}
</script>
<style scoped>
.zhangbox{
      width: 100%;
      overflow: hidden;
}
.zhang{
    width: 100%;
    margin-top: 240px;
    padding-bottom: 65px;
}
.imgboxa{
    width: 100%;
    margin: 0 auto;
    position: relative;
    height: 400px;
    
}
.imgboxa img{
    display: block;
    position: absolute;

}
.img1{
    width: 138px;
    left: 0;
    bottom: 80px;
    transform: translateX(-100%);
    opacity: 0;
    transition: 0.8s all ease-out;
}
.img2{
    width: 230px;
    left: 148px;
    bottom: 128px;
    transform: scale(0.2);
    opacity: 1;
    transition: 0.8s 1s all ease-out;
}
.img3{
        width: 138px;
    left: 388px;
    bottom: 80px;
    transform: translateX(-100%);
    opacity: 1;
    transition: 0.8s 0.3s all ease-out;
}
.img4{
        width: 560px;
    left: 573px;
    bottom: 120px;
    z-index: 2;
    transform: translateX(100%);
    opacity: 1;
    transition: 0.8s 0.2s all ease-out;
}
.img5{
    width: 449px;
    left: 975px;
    bottom: 120px;
    transform: translateX(100%);
    opacity: 1;
    transition: 0.8s 1s all ease-out;
}
.img6{
    width: 556px;
    left: 615px;
    bottom: 80px;
    transform: translateY(50%);
    opacity: 0;
    transition: 0.8s 0.4s all ease-out;
}
.bag .img1{
    transform: translateX(0);
    opacity: 1;
}
.bag .img2{
    transform: scale(1);
    opacity: 1;
}
.bag .img3{
    transform: translateX(0);
    opacity: 1;
}
.bag .img4{
    transform: translateX(0);
    opacity: 1;
}
.bag .img5{
    transform: translateX(0);
    opacity: 1;
}
.bag .img6{
    transform: translateY(0);
    opacity: 1;
}

/* resp_pse */
.resp_pse{
    width: 100%;
    /* height: 400px; */
    z-index: 3;
    position: relative;
}
.resp_pse ul {
    width: 100%;
    overflow: hidden;
    display: flex;
}
.resp_pse  li{
    width: 25%;
    /* height: 400px; */
    text-align: center;
    color: #fff;
    transform: translateY(100%);
    opacity: 0;
    transition: 0.8s 0.3s all ease-out;
}
.resp_pse li:nth-child(2){
    transition: 0.9s 0.4s all ease-out;
}
.resp_pse li:nth-child(3){
    transition: 1s 0.5s all ease-out;
}
.resp_pse li:nth-child(4){
    transition: 1.1s 0.6s all ease-out;
}
.respans li{
    transform: translateY(0);

    opacity: 1;
}
.respans li img{
    transition: 1s 0.3s all ease-out;
}
.respans li:hover img{

    transform:rotateY(360deg);

}
.zhangdiv{
    width: 80%;
    height: 200px;
    margin: 0 auto;
}
.zhangdiv h4{
        font-size: 22px;
    margin-top: 10px;
}
.zhangdiv p{
    font-size: 14px;
    font-family: arial;
    margin-top: 10px;
}
.textbox{
    text-align: center;
    margin: 0 auto;
    margin-top: 20px;
    padding: 0 9%;
    box-sizing: border-box;
}
.textcon{
    position: relative;
    float: left;
    font-size: 13px;
    width: 100px;
    border: 1px solid #fff;
    color: #fff;
    height: 28px;
    line-height: 28px;
    margin: 5px 8px;    
}
.textcon span{
    width: 100%;
    display: block;
    position: absolute;
    text-align: center;
    color: #fff;
    z-index: 1;

}
.textcon em{
     position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #fff;
    transition: 0.5s all;
}
.textcon:hover em{
    width: 100%;

}
.textcon:hover span{
    color:rgb(66, 84, 160);
    z-index: 1;

}
</style>

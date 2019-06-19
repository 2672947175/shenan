<template>
    <div class="Box">
        <h2>
            <span>为您打造行业优秀的营销型网站，当然得有严谨的建站标准</span><br>
            千锤百炼，方可得到好网站
        </h2>
        <div class="Box1">
        <div class="Box2"  v-for="(val,index) in ary" :key="index">
            <div class="Box3" @mouseover="img(index)" @mouseout="img1(index)">
                <img :src="val.img" alt="" ref="imgs">
               <a href="">{{val.text}}</a>
                <div class="box4" id="box4">{{index+1}}</div>
            
              </div>  
            <img :src="val.img1" alt="" class="img1">
              </div>
        </div>
    </div>
</template>
<script>

            
export default {
    data(){
        return{
            ary:[
                {
                    img:require('@/assets/images/wangzhanjianshe/yx7_03.png'),
                    img1:require('@/assets/images/wangzhanjianshe/yx8_03.png'),
                    img2:require('@/assets/images/wangzhanjianshe/yx6_03.png'),    
                    id:1,
                    text:"需求调研"
                },
                 {
                    img:require('@/assets/images/wangzhanjianshe/yx6_05.png'),
                    img1:require('@/assets/images/wangzhanjianshe/yx8_03.png'),
                    img2:require('@/assets/images/wangzhanjianshe/yx7_05.png'),
                    id:2,
                    text:"营销策划"
                },
                 {
                    img:require('@/assets/images/wangzhanjianshe/yx6_07.png'),
                    img1:require('@/assets/images/wangzhanjianshe/yx8_03.png'),
                    img2:require('@/assets/images/wangzhanjianshe/yx7_07.png'),    

                    id:3,
                    text:"页面设计"
                },
                 {
                    img:require('@/assets/images/wangzhanjianshe/yx6_09.png'),
                    img1:require('@/assets/images/wangzhanjianshe/yx8_03.png'),
                    img2:require('@/assets/images/wangzhanjianshe/yx7_09.png'),    

                    id:4,
                    text:"前端开发"
                },
                 {
                    img:require('@/assets/images/wangzhanjianshe/yx6_11.png'),
                    img1:require('@/assets/images/wangzhanjianshe/yx8_03.png'),
                    img2:require('@/assets/images/wangzhanjianshe/yx7_11.png'),    

                    id:5,           
                    text:"程序开发"
                },
                 {
                    img:require('@/assets/images/wangzhanjianshe/yx6_13.png'),
                    img1:require('@/assets/images/wangzhanjianshe/yx8_03.png'),
                    img2:require('@/assets/images/wangzhanjianshe/yx7_13.png'),    

                    id:6,
                    text:"内容编辑"
                },
                 {
                    img:require('@/assets/images/wangzhanjianshe/yx6_21.png'),
                    img1:require('@/assets/images/wangzhanjianshe/yx8_03.png'),
                    img2:require('@/assets/images/wangzhanjianshe/yx7_21.png'),    

                    id:7,
                    text:"用户体验"
                },
                 {
                    img:require('@/assets/images/wangzhanjianshe/yx6_22.png'),
                    img1:require('@/assets/images/wangzhanjianshe/yx8_03.png'),
                    img2:require('@/assets/images/wangzhanjianshe/yx7_22.png'),    

                    id:8,
                    text:"网站优化"
                },
                 {
                    img:require('@/assets/images/wangzhanjianshe/yx6_23.png'),
                    img1:require('@/assets/images/wangzhanjianshe/yx8_03.png'),
                    img2:require('@/assets/images/wangzhanjianshe/yx7_23.png'),    

                    id:9,
                    text:"网站测试"
                },
                 {
                    img:require('@/assets/images/wangzhanjianshe/yx6_24.png'),
                    img1:require('@/assets/images/wangzhanjianshe/yx8_03.png'),
                    img2:require('@/assets/images/wangzhanjianshe/yx7_24.png'),    
                    id:10,
                    text:"正式上线"
                },
                 {
                    img:require('@/assets/images/wangzhanjianshe/yx6_25.png'),
                    img1:require('@/assets/images/wangzhanjianshe/yx8_03.png'),
                    img2:require('@/assets/images/wangzhanjianshe/yx7_25.png'),    
                    id:11,
                    text:"操作培训"
                },
                 {
                    img:require('@/assets/images/wangzhanjianshe/yx6_26.png'),
                    img1:require('@/assets/images/wangzhanjianshe/yx8_03.png'),
                    img2:require('@/assets/images/wangzhanjianshe/yx7_26.png'),                
                    id:12,
                    text:"售后服务"
                },
            ]
        }
    },
    methods:{
        img(index){
            let img1=this.ary.find(item=>item.id==index+1)
            this.$refs.imgs[index].src=img1.img2;  
        },
        
        img1(index){
             let img1=this.ary.find(item=>item.id==index+1)
            this.$refs.imgs[index].src=img1.img;
        }
    }
}
</script>

<style scoped>
.Box{
    width: 100%;
    background: #fff;
    padding: 50px 0;
}
    .Box h2 span{
        font-size: 24px;
    color: #5e5d5d;
    line-height: 40px;
    font-weight: 500;
    }
    .Box h2{
            text-align: center;
    font-size: 40px;
    color: #5e5e5e;
    line-height: 54px;
    font-weight: 500;

    }
    .Box2{
        width: 200px;
        height:143px;
        /* border: 1px solid black; */
        width: calc(100%/6)
    }
    .Box1{
        display: flex;    
        flex-flow: wrap;
        width: 90%;
        margin: 0 auto;
        position: relative;
    }
    .Box2{
         position: relative;
    }
    .Box3{
        width: 101px;
        text-align: center;
        
    }
    .Box3 text{
        font-size: 20px;
    }
    .Box2 .img1{
        display: block;
        position: absolute;
        right: 10%;
        top: 30%;
    }
    .box4{
        width: 19px;
        height: 19px;
        position: absolute;
        border: 1px solid #a0a0a0;
        background: #a0a0a0;;
        border-radius:50%;
        color: aliceblue;
        left: 5px;
        top: 10px;

    }
    .box4:hover{background-color:skyblue;}

   
</style>
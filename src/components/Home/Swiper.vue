<template>
<div  @mouseenter="enter" @mouseleave="leave">
  <swiper  :options="swiperOption" ref="mySwiper"  class="swiprebanner" >
    <!-- slides -->
    <swiper-slide v-for="item in list" :key="item.id" class="assd" >
        <img :src="item.imgUrl" alt="">
        <div class="box">
            <div class="topcon">
                <img :src="item.banimgUrl1" alt="">
            </div>
            <div class="butmcon">
              <img :src="item.banimgUrl2" alt="">
            </div>
        </div>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
          list:[
               {
                    id:1,
                    imgUrl:require('@/assets/images/shouye/1.jpg'),
                    banimgUrl1:require('@/assets/images/shouye/banner-01-a.png'),
                    banimgUrl2:require('@/assets/images/shouye/banner-01-b.png'),
                },
                {
                    id:2,
                    imgUrl:require('@/assets/images/shouye/2.jpg'),
                    banimgUrl1:require('@/assets/images/shouye/banner2-01.png'),
                    banimgUrl2:require('@/assets/images/shouye/banner2-03.png'),
                },
                {
                    id:3,
                    imgUrl:require('@/assets/images/shouye/3.jpg'),
                      banimgUrl1:require('@/assets/images/shouye/banner3-01.png'),
                    banimgUrl2:require('@/assets/images/shouye/banner3-02.png'),
                },
          ],
        swiperOption: {
            loop: true,
             autoplay: {
                disableOnInteraction: false,
              },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            on:{
              init:function(){
                const slide=this.slides.eq(0);
			          slide.addClass('swiperSlide');
              },
              transitionStart: function(){
                for(let i=0;i<this.slides.length;i++){
                 let slide=this.slides.eq(i);

                  slide.removeClass('swiperSlide');
                }
              },
              transitionEnd: function(){
                let slide=this.slides.eq(this.activeIndex);
                slide.addClass('swiperSlide');
              
              },
            }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    methods: {
        
        enter(){
          this.swiper.autoplay.stop();
        },
        leave(){
           this.swiper.autoplay.start();
        },
    },
    mounted() {
     
       
    }
  }
</script>
<style scoped>
.swiprebanner{
    width: 100%;
}
.swiprebanner img{
    width: 100%;
    height: auto;
    display: block;
}

.assd {
  width: 100%;
  transition-delay:.3s;
}
.assd .box{
  position: absolute;
  top:0;
  left: 50%;
  transform: translate(-50%,0);
  z-index: 3;
  width: 88%;
  height: 100%;
  color: #fff;

}
.assd .box .topcon{
    width: 327px;
    height: 165px;
    transform:translateY(-140px);
		opacity:0;
    margin: 0 auto;
    transition:all 1s;
}
.assd img{
  width: 100%;
}
.assd .box .butmcon{
   width: 60%;
  text-align: center;
  position: absolute;
  top:40%;
  left: 50%;
  margin-left: -30%;
   opacity:0;
   transition:all 2s;
}
.assd:nth-child(3) .box .topcon{

    width: 315px;
    height: 165px;
    transition:all 1s;
    transform:translateY(160px);
		opacity:0;
    margin: 0 0;
}
.assd:nth-child(3) .box .butmcon{
   width: 80%;
  position: absolute;
  top:40%;
  margin: none;
  margin-left: -50%;
   opacity:0;
   transition:all 2.2s;
}
.assd:nth-child(4) .box .topcon,.assd:nth-child(1) .box .topcon{
    width: 60%;
    transition:all 2s;
    transform:translateY(220px);
		opacity:0;
    margin: 0 0;
}
.assd:nth-child(4) .box .butmcon,.assd:nth-child(1) .box .butmcon{
   width: 55%;
  position: absolute;
  top:60%;
  margin: none;
  margin-left: -50%;
   opacity:0;
   transition:all 2.2s;
}
.swiperSlide .box .topcon{
  transform:translateY(140px);
  top:120px;
  opacity:1;
}
.swiperSlide .box .butmcon{
  opacity:1;
}
.swiperSlide:nth-child(3) .box .topcon{
		opacity:1;
}
.swiperSlide:nth-child(3) .box .butmcon{
		opacity:1;
}
.swiperSlide:nth-child(4) .box .topcon,.swiperSlide:nth-child(1) .box .topcon{
		opacity:1;
}
.swiperSlide:nth-child(4) .box .butmcon,.swiperSlide:nth-child(1) .box .butmcon{
		opacity:1;
}
</style>


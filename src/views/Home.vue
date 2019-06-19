<template>
  <div class="container" ref="scrllele" @scroll="soll">
    <Header :showHeader='showHeader' ></Header>
    <div class="const">
        <Swiper></Swiper>
        <Feiyong></Feiyong>
        <Zhangshi :a='a'></Zhangshi>
        <Jingzhuo></Jingzhuo>
        <Yongxin></Yongxin>
        <Jilu></Jilu>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import Header from '../components/Header'
import Swiper from '../components/Home/Swiper'
import Feiyong from '_c/Home/Feiyong'
import Zhangshi from '_c/Home/Zhangshi'
import Jingzhuo from '_c/Home/Jingzhuo'
import Yongxin from '_c/Home/Yongxin'
import Jilu from '_c/Home/Jilu'
import Footer from '_c/Footer'


export default {
  name: 'home',
  components: {
    Swiper,
    Header,
    Feiyong,
    Zhangshi,
    Jingzhuo,
    Yongxin,
    Jilu,
    Footer
  },
  data() {
    return {
      // showText:true,
      showHeader:true ,
      a:false,
    }
  },
  computed: {
    
  },
  methods: {
    ...mapMutations(['ScrollTop','ScrollBottom']),
 // 滚动加载事假
    soll() {
        let { scrollTop, scrollHeight, clientHeight } = this.$refs.scrllele;
          console.log(scrollHeight-scrollTop <clientHeight*2)
        if (scrollTop>20) {
          this.showHeader=false;
        }else{
          this.showHeader=true;
        }
        if (scrollTop>800) {
          this.ScrollTop(true)
        }else{
          this.ScrollTop(false)
        }
        // ScrollBottom
        if(scrollHeight-scrollTop <clientHeight*2){
          this.ScrollBottom(false)
        }else{
          this.ScrollBottom(true)
        }
      
    }
  }

}
</script>
<style lang="less">

  .const{
    // height: 2000px;
    width: 100%;
    // background: pink;
  }
</style>
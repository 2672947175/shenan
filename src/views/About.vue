<template>
  <div class="about container"
       ref="scrllele"
       @scroll="soll">
    <Header :showText='showText'></Header>
    <div class="contextes">
      <Banner></Banner>
      <BannerTwo></BannerTwo>
      <AddNum></AddNum>
      <BannerServer></BannerServer>
      <Bannerbottom></Bannerbottom>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../components/Header";
import Banner from "../components/About/Banner";
import BannerTwo from "../components/About/BannerTwo";
import AddNum from "../components/About/AddNum.vue";
import BannerServer from "../components/About/BannerServer";
import Bannerbottom from "../components/About/Bannerbottom.vue";
import Footer from '_c/Footer'
import { mapMutations } from "vuex";

export default {
  name: "about",
  data() {
    return {
      showText: true
    };
  },
  components: {
    Header,
    Banner,
    BannerTwo,
    AddNum,
    BannerServer,
    Bannerbottom,
    Footer
  },
  methods: {
    ...mapMutations(["showposf",'tops','ScrollBottom']),
    soll() {
      let { scrollTop, scrollHeight, clientHeight } = this.$refs.scrllele;
      this.tops(scrollTop)
      if (scrollTop > 300 && scrollTop < 1200) {
        
        this.showposf(true);
      } else {
        this.showposf(false);
      }
      // ScrollBottom
        if(scrollHeight-scrollTop <clientHeight*2){

          this.ScrollBottom(false)
        }else{
          this.ScrollBottom(true)
        }

    }
  }
};
</script>
<style scoped>
.contextes {
  width: 100%;
  margin-top: 100px;
  /* height: 2000px; */
  /* background: rgb(216, 245, 245); */
}
</style>

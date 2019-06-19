<template>
  <div class="case container"
       ref="scrllele"
       @scroll="soll">
    <Header :showText='showText'></Header>
    <div class="contextes">
      <Top></Top>
      <List></List>
      <Page></Page>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import Top from "../components/Case/Top";
import List from "../components/Case/List";
import Page from "../components/Case/Page";
import Footer from '_c/Footer'
import { mapMutations } from "vuex";
export default {
  name: "case",
  components: {
    Header,
    Top,
    List,
    Page,
    Footer
  },
  data() {
    return {
      showText: true
    };
  },
  methods: {
    ...mapMutations(['ScrollBottom']),
    soll() {
      let { scrollTop, scrollHeight, clientHeight } = this.$refs.scrllele;
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
  background: #fff;
  /* height: 2000px; */
  /* background: paleturquoise; */
}
</style>
<template>
  <div class="cost" >
    <Header :showText='showText'></Header> 
    <div class="contextes">
      <Banner></Banner>
      <Tag></Tag>
      <Contast></Contast>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Banner from "../components/Cost/Banner";
import Tag from "../components/Cost/Tag";
import Contast from "../components/Cost/Contast";
import Footer from "../components/Cost/Footer";
export default {
  name: "cost",
  components: {
    Header,
    Banner,
    Tag,
    Contast,
    Footer
  },
  data() {
    return {
      showText: true,
      showHeader: false
    };
  }
};
</script>
<style scoped>
.contextes {
  width: 100%;
  margin-top: 100px;
  height: 4000px;
  /* background: paleturquoise; */
}
</style>
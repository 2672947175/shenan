<template>
  <div class="building container"
       ref="scrllele"
       @scroll="soll">
    <Header :showText='showText'></Header>
      <div class="contextes">
        <Tops></Tops>
        <No></No>
        <Six></Six>
        <My></My>
        <Ll></Ll>
        <Jx></Jx>
        <Qcbl></Qcbl>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header'
import Tops from '../components/Building/Top'
import No from '../components/Building/No'
import Six from '../components/Building/Six'
import My from '../components/Building/My'
import Ll from '../components/Building/Ll'
import Jx from '../components/Building/Jx'
import Qcbl from '../components/Building/Qcbl'
import Footer from '_c/Footer'
import { mapMutations } from "vuex";

export default {
  name: 'building',
  components: {
    Header,
    Tops,
    No,
    Six,
    My,
    Ll,
    Jx,
    Qcbl,
    Footer
  },
  data() {
    return {
      showText:true,
    }
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
  },
}
</script>
<style scoped>
  .contextes{
    width: 100%;
    margin-top:100px;
  }
</style>

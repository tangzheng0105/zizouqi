<template>
  <el-row>
    <el-col :span="14">
      <HeroTable class="hero-table"/>
      <div>
        <h1 style="color:red;text-align:center" >感谢打赏，祝君吃鸡！</h1>
        <img style="height:320px;" src="../assets/weixin.jpg" alt="">
        <img style="height:320px;margin-left:50px;" src="../assets/alipay.jpg" alt="">
      </div>
    </el-col>
    <el-col class="scheme" :span="10">
      <h3>英雄池</h3>
      <div>
          <el-tag 
          style="margin-right:10px;margin-top:10px;"
          v-for="(item, index) in heroInboard"
          closable
           @close="handleClose(index)"
          :type="typeMap[hero[item-1].price]" 
          :key="index">{{hero[item-1].name}}</el-tag>
      </div>
      <h3>可玩套路</h3>
      <Scheme></Scheme>
    </el-col>
  </el-row>
</template>

<script>
// @ is an alias to /src
import HeroTable from "@/components/HeroTable.vue";
import Scheme from "@/components/Scheme.vue";

export default {
  name: "home",
  data: function() {
    return {
      hero:[],
      typeMap: {
            '1':'info',
            '2':'success',
            '3':'',
            '4':'warning',
            '5':'danger',
        }
    }
  },
  methods: {
    handleClose(tag) {
      console.log(tag)
      this.$store.commit('deleteHero',tag)
    }
  },
  components: {
    HeroTable,
    Scheme
  },
  computed: {
    heroInboard: function() {
      var _heroInBoard = this.$store.state.heroInBoard
      return _heroInBoard
    }
  },
  mounted() {
    this.hero = this.$store.state.hero
  },
};
</script>
 
<style>
.scheme {
  box-sizing: border-box;
  padding: 20px;
}
</style>


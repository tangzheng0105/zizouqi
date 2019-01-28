<template>
  <el-row>
    <el-col :span="14">
      <HeroTable class="hero-table"/>
      <div>
        <h1 style="color:red;text-align:center">感谢打赏，祝君吃鸡！</h1>
        <img style="height:320px;" src="../assets/weixin.jpg" alt>
        <img
          style="height:320px;margin-left:50px;"
          src="../assets/alipay.jpg"
          alt
        >
      </div>
    </el-col>
    <el-col class="scheme" :span="10">
      <update-info></update-info>
      <h3>上场英雄</h3>
      <div>
        <el-tag
          style="margin-right:10px;margin-top:10px;"
          v-for="(item, index) in heroInboard"
          closable
          @close="handleClose(index)"
          :type="typeMap[hero[item-1].price]"
          :key="index"
        >{{hero[item-1].name}}</el-tag>
      </div>
      <el-alert
        v-if="heroInboard.length == 0"
        title="请在左侧点击加入棋盘选择上场英雄"
        type="info"
        :closable="false"
      ></el-alert>
      <h3>已触发BUFF效果</h3>
      <el-alert
        style="margin-bottom:10px;"
        v-for="(item, index) in buffMsg.complete"
        :key="index+'complete'"
        :title="item"
        type="warning"
        :closable="false"
      ></el-alert>
      <el-alert
        v-if="heroInboard.length == 0"
        title="暂无英雄"
        type="info"
        :closable="false"
      ></el-alert>
      <h3>待触发BUFF效果</h3>
      <el-alert
        style="margin-bottom:10px;"
        v-for="(item, index) in buffMsg.uncomplete"
        :key="index"
        :title="item"
        type="info"
        :closable="false"
      ></el-alert>
      <el-alert
        v-if="heroInboard.length == 0"
        title="暂无英雄"
        type="info"
        :closable="false"
      ></el-alert>
      <h3>可玩套路</h3>
      <Scheme></Scheme>
    </el-col>
  </el-row>
</template>

<script>
// @ is an alias to /src
import HeroTable from "@/components/HeroTable.vue";
import Scheme from "@/components/Scheme.vue";
import UpdateInfo from "@/components/UpdateInfo.vue";

export default {
  name: "home",
  data: function() {
    return {
      hero: [],
      typeMap: {
        "1": "info",
        "2": "success",
        "3": "",
        "4": "warning",
        "5": "danger"
      }
    };
  },
  methods: {
    handleClose(tag) {
      console.log(tag);
      this.$store.commit("deleteHero", tag);
    }
  },
  components: {
    HeroTable,
    Scheme,
    UpdateInfo
  },
  computed: {
    heroInboard: function() {
      return this.$store.state.heroInBoard;
    },
    buffMsg: function() {
      return this.$store.getters.buffMsg;
    }
  },
  mounted() {
    this.hero = this.$store.state.hero;
  }
};
</script>
 
<style>
.scheme {
  box-sizing: border-box;
  padding: 20px;
}
</style>


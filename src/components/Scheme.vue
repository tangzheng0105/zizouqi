<template>
  <div>
    <el-collapse
      style="width:100%;"
      v-model="activeNames"
      @change="handleChange"
    >
      <el-collapse-item
        v-for="(item,index) in activeSchemes"
        :title="item.name"
        :name="index"
        :key="index"
      >
        <div>{{item.description}}</div>
        <el-tag
          v-for="(_hero, heroIndex) in item.scheme"
          :type="typeMap[hero[_hero-1] && hero[_hero-1].price]"
          style="margin-right:10px;margin-top:10px;"
          :key="heroIndex"
        >{{hero[_hero-1] && hero[_hero-1].name}}</el-tag>
      </el-collapse-item>
    </el-collapse>
    <el-alert
      v-if="activeSchemes.length == 0"
      title="没有匹配的套路"
      type="error"
      :closable="false"
    ></el-alert>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: [],
      schemes: [],
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
    handleChange(val) {
      console.log(val);
    }
  },
  computed: {
    activeSchemes: function() {
      return this.$store.getters.activeSchemes;
    }
  },
  mounted() {
    this.schemes = this.$store.state.schemes;
    this.hero = this.$store.state.hero;
  }
};
</script>
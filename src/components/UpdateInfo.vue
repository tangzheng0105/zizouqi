<template>
  <div>
    <el-button type="text" @click="dialogVisible = true">点击查看最近更新</el-button>

    <el-dialog
      title="最近更新"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleClose"
    >
      <el-card class="box-card">
        <div class="text item">1.加入三个新英雄，小小、变体精灵和恶魔猎手</div>
        <div class="text item">2.增强了法师buff</div>
        <div class="text item">3.削弱了精灵buff，削弱了精灵核心大树技能</div>
        <div class="text item">4.削弱了战士buff</div>
        <div class="text item">5.更改了元素的buff，由魔抗变成石化效果</div>
      </el-card>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    }
  }
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 100%;
}
</style>
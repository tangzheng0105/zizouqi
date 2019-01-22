<template>
  <div>
    <el-alert
      v-if="description"
      :title="title"
      type="success"
      :closable="false"
      :center="false"
      :description="description"
    ></el-alert>
    <el-tabs
      tab-position="left"
      @tab-click="chooseRace"
      style="float:left;margin-top:40px;"
    >
      <el-tab-pane
        v-for="(item, index) in races"
        :label="item.name"
        :name="item.name"
        :key="index"
      ></el-tab-pane>
    </el-tabs>
    <el-tabs v-model="activeName" @tab-click="choosePro">
      <el-tab-pane
        v-for="(item, index) in professions"
        :label="item.name"
        :name="item.name"
        :key="index"
      >
        <el-table
          :data="hero"
          :row-class-name="tableRowClassName"
          style="width: 100%"
          height="650"
        >
          <el-table-column prop="id" label="ID" width="140"></el-table-column>
          <el-table-column prop="name" label="英雄" width="140"></el-table-column>
          <el-table-column prop="profession" label="职业" width="140"></el-table-column>
          <el-table-column prop="race" label="种族" width="140"></el-table-column>
          <el-table-column
            prop="price"
            :filters="[{text:'一星',value:1},{text:'二星',value:2},{text:'三星',value:3},{text:'四星',value:4},{text:'五星',value:5}]"
            :filter-method="filterTag"
            label="英雄星级"
          ></el-table-column>
          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <el-button
                @click="joinToChessboard(scope.row)"
                type="text"
                size="small"
              >加入棋盘</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "全部",
      professions: [],
      races: [],
      hero: [],
      title: "",
      description: ""
    };
  },
  methods: {
    filterTag(value, row) {
      return row.price == value;
    },
    choosePro(tab) {
      var hero = [];
      if (tab.label == "全部") {
        this.description = "";
        this.$store.state.hero.forEach(item => {
          hero.push(item);
        });
      } else {
        this.title = tab.label+"职业BUFF";
        this.$store.state.hero.forEach(item => {
          if (item.profession == tab.label) {
            hero.push(item);
          }
        });
      }
      this.hero = hero;
      this.$store.state.professions.forEach(item => {
        if (item.name == tab.label) {
          this.description = item.skill;
        }
      });
    },
    chooseRace(tab) {
      this.title = tab.label+"种族BUFF";
      var hero = [];
      if (tab.label == "全部") {
        this.$store.state.hero.forEach(item => {
          hero.push(item);
        });
      } else {
        this.$store.state.hero.forEach(item => {
          if (item.race.indexOf(tab.label) > -1) {
            hero.push(item);
          }
        });
      }
      this.hero = hero;
      this.$store.state.races.forEach(item => {
        if (item.name == tab.label) {
          this.description = item.skill;
        }
      });
    },
    tableRowClassName({ row }) {
      switch (row.price) {
        case "1":
          return "price1-row";
        case "2":
          return "price2-row";
        case "3":
          return "price3-row";
        case "4":
          return "price4-row";
        case "5":
          return "price5-row";
        default:
          console.log("没有这个等级");
          break;
      }
    },
    joinToChessboard(row) {
      this.$store.commit('addHero', row.id)
    }
  },
  mounted() {
    var professions = [{ id: 0, name: "全部", skill: "" }];
    var hero = [];
    var races = [];
    this.$store.state.professions.forEach(item => {
      professions.push(item);
    });
    this.$store.state.races.forEach(item => {
      races.push(item);
    });
    this.$store.state.hero.forEach(item => {
      hero.push(item);
    });
    this.professions = professions;
    this.races = races;
    this.hero = hero;
  }
};
</script>

<style>
.el-table .price1-row {
  background: #fff;
}

.el-table .price2-row {
  background: oldlace;
}

.el-table .price3-row {
  background: skyblue;
}

.el-table .price4-row {
  background: plum;
}

.el-table .price5-row {
  background: gold;
}
</style>

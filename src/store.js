import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
function isContained(aa, bb) {
	if(!(aa instanceof Array) || !(bb instanceof Array) || ((aa.length < bb.length))) {
		return false;
	}
	for (var i = 0; i < bb.length; i++) {
		var flag = false;
		for(var j = 0; j < aa.length; j++){
			if(aa[j] == bb[i]){
				flag = true;
                break;
			}
		}
		if(flag == false){
			return flag;
		}
	}	
	return true;
}

export default new Vuex.Store({
  state: {
    professions: [
      { id: 1, name: '战士', skill: '3/6:友方战士护甲+8/+10' },
      { id: 2, name: '术士', skill: '3/6：所有友军+20/30%吸血' },
      { id: 3, name: '恶魔猎手', skill: '1：破坏地方恶魔被动' },
      { id: 4, name: '工匠', skill: '2/4：友方生命回复+10/20' },
      { id: 5, name: '猎人', skill: '3/6：友方猎人攻击+25/35%' },
      { id: 6, name: '法师', skill: '3/6：所有敌方魔抗-30/-60' },
      { id: 7, name: '骑士', skill: '2/4/6：友方骑士有25/35/45%时间减伤护盾' },
      { id: 8, name: '萨满祭司', skill: '2：战斗开始随机羊一个地方英雄6s' },
      { id: 9, name: '德鲁伊', skill: '两单位升星所需场上种类' },
      { id: 10, name: '刺客', skill: '3/6：10/20%几率四倍暴击' }
    ],
    races: [
      { id: 1, name: '精灵', skill: '2/4/6：20/40/60%精灵闪避' },
      { id: 2, name: '龙', skill: '3：所有龙初始魔法值为100' },
      { id: 3, name: '人类', skill: '20/25/30%缴械' },
      { id: 4, name: '野兽', skill: '2/4/6：友军召唤物攻击+15/20/25%' },
      { id: 5, name: '恶魔', skill: '1：自身攻击50%' },
      { id: 6, name: '元素', skill: '2：友军元素魔抗+30' },
      { id: 7, name: '地精', skill: '3/6：随机/所有地精护甲+15、生命回复+10' },
      { id: 8, name: '巨魔', skill: '2/4：全体巨魔/友军攻速+30' },
      { id: 9, name: '矮人', skill: '1：自身攻击距离+300' },
      { id: 10, name: '食人魔', skill: '1：最大生命值+10%' },
      { id: 11, name: '娜迦', skill: '2/4：所有友军魔抗+20/40' },
      { id: 12, name: '兽人', skill: '2/4：兽人生命+250/350' },
      { id: 13, name: '亡灵', skill: '2/4：敌军护甲-5/-7' }
    ],
    hero: [
      { id: 1, name: '斧王', race: '兽人', profession: '战士', price: '1', avatar: '' },
      { id: 2, name: '魅惑魔女', race: '野兽', profession: '德鲁伊', price: '1', avatar: '' },
      { id: 3, name: '食人魔魔法师', race: '食人魔', profession: '法师', price: '1', avatar: '' },
      { id: 4, name: '巨牙海民', race: '野兽', profession: '战士', price: '1', avatar: '' },
      { id: 5, name: '卓尔游侠', race: '亡灵', profession: '猎人', price: '1', avatar: '' },
      { id: 6, name: '赏金猎人', race: '地精', profession: '刺客', price: '1', avatar: '' },
      { id: 7, name: '发条技师', race: '地精', profession: '工匠', price: '1', avatar: '' },
      { id: 8, name: '暗影萨满', race: '巨魔', profession: '萨满祭司', price: '1', avatar: '' },
      { id: 9, name: '蝙蝠骑士', race: '巨魔', profession: '骑士', price: '1', avatar: '' },
      { id: 10, name: '修补匠', race: '地精', profession: '工匠', price: '1', avatar: '' },
      { id: 11, name: '敌法师', race: '精灵', profession: '恶魔猎手', price: '1', avatar: '' },
      { id: 12, name: '水晶室女', race: '人类', profession: '法师', price: '2', avatar: '' },
      { id: 13, name: '兽王', race: '兽人', profession: '猎人', price: '2', avatar: '' },
      { id: 14, name: '剑圣', race: '兽人', profession: '战士', price: '2', avatar: '' },
      { id: 15, name: '伐木机', race: '地精', profession: '工匠', price: '2', avatar: '' },
      { id: 16, name: '痛苦女王', race: '恶魔', profession: '刺客', price: '2', avatar: '' },
      { id: 17, name: '精灵龙', race: '精灵/龙', profession: '法师', price: '2', avatar: '' },
      { id: 18, name: '巫医', race: '巨魔', profession: '术士', price: '2', avatar: '' },
      { id: 19, name: '鱼人守卫', race: '娜迦', profession: '战士', price: '2', avatar: '' },
      { id: 20, name: '混沌骑士', race: '恶魔', profession: '骑士', price: '2', avatar: '' },
      { id: 21, name: '树精卫士', race: '精灵', profession: '德鲁伊', price: '2', avatar: '' },
      { id: 22, name: '月之骑士', race: '精灵', profession: '骑士', price: '2', avatar: '' },
      { id: 23, name: '先知', race: '精灵', profession: '德鲁伊', price: '2', avatar: '' },
      { id: 24, name: '狼人', race: '人类/野兽', profession: '战士', price: '3', avatar: '' },
      { id: 25, name: '剧毒术士', race: '野兽', profession: '术士', price: '3', avatar: '' },
      { id: 26, name: '全能骑士', race: '人类', profession: '骑士', price: '3', avatar: '' },
      { id: 27, name: '闪电幽魂', race: '元素', profession: '法师', price: '3', avatar: '' },
      { id: 28, name: '风行者', race: '精灵', profession: '猎人', price: '3', avatar: '' },
      { id: 29, name: '幻影刺客', race: '精灵', profession: '刺客', price: '3', avatar: '' },
      { id: 30, name: '死亡骑士', race: '亡灵', profession: '骑士', price: '3', avatar: '' },
      { id: 31, name: '沙王', race: '野兽', profession: '刺客', price: '3', avatar: '' },
      { id: 32, name: '鱼人夜行者', race: '娜迦', profession: '刺客', price: '3', avatar: '' },
      { id: 33, name: '狙击手', race: '矮人', profession: '猎人', price: '3', avatar: '' },
      { id: 34, name: '冥界亚龙', race: '龙', profession: '刺客', price: '3', avatar: '' },
      { id: 35, name: '影魔', race: '恶魔', profession: '术士', price: '3', avatar: '' },
      { id: 36, name: '秀逗魔道士', race: '人类', profession: '法师', price: '3', avatar: '' },
      { id: 37, name: '末日使者', race: '恶魔', profession: '战士', price: '4', avatar: '' },
      { id: 38, name: '海军上将', race: '人类', profession: '战士', price: '4', avatar: '' },
      { id: 39, name: '巨魔战将', race: '巨魔', profession: '战士', price: '4', avatar: '' },
      { id: 40, name: '光之守卫', race: '人类', profession: '法师', price: '4', avatar: '' },
      { id: 41, name: '死灵法师', race: '亡灵', profession: '术士', price: '4', avatar: '' },
      { id: 42, name: '圣堂刺客', race: '精灵', profession: '刺客', price: '4', avatar: '' },
      { id: 43, name: '炼金术士', race: '地精', profession: '术士', price: '4', avatar: '' },
      { id: 44, name: '干扰者', race: '兽人', profession: '萨满祭司', price: '4', avatar: '' },
      { id: 45, name: '美杜莎', race: '娜迦', profession: '猎人', price: '4', avatar: '' },
      { id: 46, name: '龙骑士', race: '人类/龙', profession: '骑士', price: '4', avatar: '' },
      { id: 47, name: '德鲁伊', race: '野兽', profession: '德鲁伊', price: '4', avatar: '' },
      { id: 48, name: '矮人直升机	', race: '矮人', profession: '工匠', price: '5', avatar: '' },
      { id: 49, name: '巫妖	', race: '亡灵', profession: '法师', price: '5', avatar: '' },
      { id: 50, name: '潮汐猎人	', race: '娜迦', profession: '猎人', price: '5', avatar: '' },
      { id: 51, name: '谜团	', race: '元素', profession: '术士', price: '5', avatar: '' },
      { id: 52, name: '炸弹人	', race: '地精', profession: '工匠', price: '5', avatar: '' }
    ],
    heroInBoard: [],
    schemes: [
      { id: 1, name: '娜迦战士流', scheme: [19, 32, 45, 50, 1, 4, 24, 37, 38], description: '构成为2野兽2人类4娜迦、6战士（极高护甲和魔抗、输出低）' },
      { id: 2, name: '亡灵骑士流', scheme: [5, 30, 41, 49, 9, 20, 22, 26, 46], description: '构成为2人类4亡灵、6骑士（极肉、输出高）' },
      { id: 3, name: '地精刺客流', scheme: [6, 7, 10, 15, 43, 52, 29, 42, 31], description: '构成为6地精2精灵、4工匠3刺客（极高护甲和回血、输出高）' },
      { id: 4, name: '地精刺客流', scheme: [6, 7, 10, 15, 43, 52, 17, 34, 46], description: '构成为6地精3龙、4工匠（极高护甲和回血、输出高）' },
      { id: 5, name: '亡灵猎人流', scheme: [5, 30, 41, 49, 13, 28, 33, 45, 50], description: '构成为4亡灵2娜迦、6猎人（输出极高）' },
      { id: 6, name: '娜迦刺客流', scheme: [19, 32, 45, 50, 6, 16, 29, 31, 42], description: '构成为4娜迦2精灵、6刺客（输出极高、魔抗极高）' },
      { id: 7, name: '野兽刺客流', scheme: [2, 4, 24, 6, 16, 34, 29, 31, 32, 42], description: '构成为4野兽2精灵、6刺客（输出极高、成型极快）' },
      { id: 8, name: '精灵刺客流', scheme: [6, 16, 11, 21, 29, 42, 32, 42, 45], description: '构成为4精灵2娜迦、6刺客（输出极高、闪避高、成型极快）' },
      { id: 9, name: '巨龙法师流', scheme: [17, 34, 46, 3, 12, 40, 49, 36, 50], description: '构成为4人类3龙、6法师（输出极高）' },
      { id: 10, name: '野兽战士流', scheme: [1, 2, 4, 14, 19, 24, 31, 38, 12], description: '构成为4野兽3兽人、6战士（极高护甲、中输出、成型极快）' },
      { id: 11, name: '巨魔骑士流', scheme: [8, 9, 18, 20, 39, 22, 26, 30, 46], description: '构成为4巨魔2人类、6骑士（极肉、中输出、成型快）' },
      { id: 12, name: '巨龙骑士流', scheme: [17, 34, 46, 9, 20, 22, 26, 30, 12], description: '构成为3巨龙3人类2精灵、6骑士（极肉、中输出、成型快）' },
      { id: 13, name: '巨魔战士流', scheme: [8, 9, 18, 39, 4, 14, 19, 24, 39], description: '构成为4巨魔2野兽2人类、6战士（极高护甲、高输出、成型极快）' },
      { id: 14, name: '回蓝万金流', scheme: [17, 46, 34, 8, 9, 18, 39, 31, 49], description: '构成为3巨龙4巨魔、2骑士（极高输出、强控制）' },
      { id: 15, name: '双德巨兽流', scheme: [2, 21, 4, 24, 31, 8, 9, 18, 39], description: '构成为4巨魔4野兽、2小德3战士（双德速科，高输出，高护甲）' },
      { id: 16, name: '双德巨兽流', scheme: [1, 2, 19, 21, 4, 24, 31, 38, 39], description: '构成为4野兽、2小德6战士（双德速科，中输出，极高护甲）' },
      { id: 17, name: '双德灵龙流', scheme: [2, 21, 11, 17, 22, 29, 34, 42, 46], description: '构成为6精灵3巨龙、2小德3刺客2骑士（双德速科，极高输出，极高闪避）' },
      { id: 18, name: '双德刺客流', scheme: [2, 21, 16, 29, 31, 32, 42, 34, 45], description: '构成为2野兽2精灵2娜迦、2小德6刺客（双德速科，极高输出，高魔抗）' },
      { id: 19, name: '双德猎人流', scheme: [2, 21, 5, 13, 28, 33, 45, 50, 30], description: '构成为2亡灵2娜迦2精灵、2小德6猎人（双德速科，极高输出，高魔抗）' }
    ]
  },
  getters: {
    activeSchemes: (state) => {
      var _schemes = state.schemes
      var res = []
      console.log(state.heroInBoard)
      _schemes.forEach(item => {
        if(isContained(item.scheme, state.heroInBoard)) {
          res.push(item)
        }
      })
      return res
    }
  },
  mutations: {
    addHero: function (state, id) {
      if(state.heroInBoard.indexOf(id) > -1) return
      state.heroInBoard.push(id)
    },
    deleteHero: function(state, id) {
      state.heroInBoard.splice(id-1,1)
    }
  },
  actions: {

  }
})



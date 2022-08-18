import { reqGetSearchInfo } from "@/api";
//search模块的仓库
const state = {
  //仓库初始化
  searchList:{}
};
const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList
  }
};
const actions = {
  //获取search模块数据
  async getSearchList({ commit }, params = {}) {
    let result = await reqGetSearchInfo(params);
    if (result.code == 200) {
      commit('GETSEARCHLIST', result.data);
    }
  }
};
//计算属性
const getters = {
  //当前参数state
  goodsList(state){
    //这样会有问题,所以加一个空数组，以防没有数据
    return state.searchList.goodsList||[];
  },
  trademarkList(state){
    return state.searchList.trademarkList;
  },
  attrsList(state){
    return state.searchList.attrsList;
  }
};
export default {
  state,
  mutations,
  actions,
  getters,
};

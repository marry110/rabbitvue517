import { createStore } from 'vuex'
// vue2.0 创建仓库 new Vuex.Store({})
// vue3.0 创建仓库  createStore({})
export default createStore({
  // 状态
  state: {
    username: 'zs',
  },
  // 计算属性
  getters: {
    newName(state) {
      return state.username + '!!!'
    },
  },
  // 修改方法
  mutations: {
    updateName(state) {
      state.username = 'ls'
    },
  },
  // 拿数据
  actions: {
    updateName(ctx) {
      //发请求异步操作
      setTimeout(() => {
        ctx.commit('updateName')
      }, 1000)
      //  再修改name
    },
  },
  // 分模块
  modules: {},
})

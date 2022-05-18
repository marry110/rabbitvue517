import { createStore } from 'vuex'
// vue2.0 创建仓库 new Vuex.Store({})
// vue3.0 创建仓库  createStore({})

// 模块A
const moduleA = {
  state: {
    username: 'moduleA',
  },
  getters: {
    newName(state: any) {
      return state.username + '!!!'
    },
  },
  mutations: {
    updateName(state: any) {
      state.username = 'moduleAAAAA'
    },
  },
}
// 模块B
const moduleB = {
  namespaced: true,
  state: {
    username: 'moduleB',
  },
  getters: {
    newName(state: any) {
      return state.username + '!!!'
    },
  },

  mutations: {
    updateName(state: any) {
      state.username = 'moduleBBBBB'
    },
  },

  actions: {
    updateName(ctx: any) {
      setTimeout(() => {
        ctx.commit('updateName')
      }, 1000)
    },
  },
}

export default createStore({
  // 状态
  state: {},
  // 计算属性
  getters: {},
  // 修改方法
  mutations: {},
  // 拿数据
  actions: {},
  // 分模块
  modules: {
    moduleA,
    moduleB,
  },
})

import { createStore } from 'vuex'
import cart from './modules/cart'
import category from './modules/category'
import user from './modules/user'
import createPersistedState from 'vuex-persistedstate'
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
    cart,
    category,
    user,
  },
  // 配置文件
  plugins: [
    createPersistedState({
      // 本地储存名字
      key: 'erabbit-client-oc-518-store',
      // 指定需要储存的模块
      paths: ['user', 'cart'],
    }),
  ],
})

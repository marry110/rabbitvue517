<template>
  <!-- vue2.0需要跟元素 -->

  <!-- vue.0可以是代码片段 fragment -->
  <!-- 使用根模块state 的数据  -->

  <div>
    <p>{{ $store.state.username }}</p>
  </div>

  <!-- 2.使用根模块的getters数据  -->
  <p>{{ $store.getters.newName }}</p>
  <p>{{ $store.getters['newName'] }}</p>
  <button @click="mutationsFn">change</button>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'

import { useRouter } from 'vue-router'

export default {
  setup() {
    const state = reactive({
      count: 0,
    })

    // 使用vuex仓库
    const store = useStore()

    // 1.使用根模块state的数据
    console.log(store.state.username)
    //  2.使用根模块getters的数据
    console.log(store.getters.newName)

    // 3.提交根模块的mutations 方法
    // store.commit('updateName')
    const mutationsFn = () => {
      //  3.提交根模块的mutations 方法
      // store.commit('updateName')
      // 4.调用根模块的action函数
      store.dispatch('updateName')
    }
    return {
      ...toRefs(state),
      mutationsFn,
    }
  },
}
</script>

<style lang="scss" scoped></style>

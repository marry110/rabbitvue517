<template>
  <div>
    <!-- 1.1使用A模块的state数据  -->
    {{ $store.state.moduleA.username }}
    <!-- 1.2.使用模块B的getters  -->
    <p>{{ $store.getters.newName }}</p>
    <!-- 2.1使用B模块的state数据  -->
    {{ $store.state.moduleB.username }}
    <!-- 2.2使用模块B的getters 数据  -->
    <p>{{ $store.getters['moduleB/newName'] }}</p>
    <button @click="mutationsFn">mutationsFn</button>
    <button @click="actionsFn">actionsFn</button>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const state = reactive({
      count: 0,
    })
    const mutationsFn = () => {
      // store.commit('updateName')
      store.commit('moduleB/updateName')
    }
    const actionsFn = () => {
      store.dispatch('moduleB/updateName')
    }
    return {
      ...toRefs(state),
      mutationsFn,
      actionsFn,
    }
  },
}
</script>

<style lang="scss" scoped></style>

<template>
  <p>{{ $store.state.user.profile.account }}</p>
  <button @click="$store.commit('user/setUser', { account: 'jjjj' })">
    button
  </button>
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

    return {
      ...toRefs(state),
    }
  },
}
</script>

<style lang="scss" scoped></style>

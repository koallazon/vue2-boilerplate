<template>
  <div class="pa-12">
    <v-btn @click="logOut">로그아웃</v-btn>
  </div>
</template>

<script>
import { call } from 'vuex-pathify'
export default {
  methods: call('auth', ['logOut']),
}
</script>

<style lang="scss" scoped></style>

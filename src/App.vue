<template>
  <v-app v-resize-app>
    <transition
      :name="exclusionList.includes($route.name) ? '' : 'router-fade'"
      mode="out-in"
    >
      <router-view :key="$route.fullPath" />
    </transition>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      exclusionList: ['board-task', 'board'],
    }
  },
  directives: {
    resizeApp: {
      bind(el, binding, vnode) {
        let resizeTimeout
        el.__ResizeDocumentHandler__ = () => {
          if (resizeTimeout) return
          resizeTimeout = setTimeout(() => {
            resizeTimeout = undefined
            const store = vnode.context.$store
            store.commit('app/SET_WINDOW_SIZE', window.innerWidth)
            if (window.innerWidth > 959) {
              store.commit('app/SET_DRAWER', true)
            }
          }, 66) // 화면 업데이트가 느린 브라우저에서도 안정적인 서비스를 지원하기 위해 15fps로 설정함  1000ms/15 = 66, 웹 성능
        }
        window.addEventListener('resize', el.__ResizeDocumentHandler__)
      },
      unbind(el) {
        window.removeEventListener('resize', el.__ResizeDocumentHandler__)
      },
    },
  },
  created() {
    this.$store.commit('app/SET_WINDOW_SIZE', window.innerWidth)
  },
}
</script>

<style scoped>
/* transition */
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s ease-out;
}
.router-fade-enter,
.router-fade-leave-to {
  opacity: 0;
}
.app-spacing {
  padding: 0px 16px;
}
</style>

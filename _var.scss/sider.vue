<template>
  <transition name="fade">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button @click="visible=false">close</button>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'GSider',
  data() {
    return {
      visible: true
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.sider {
  position: relative;

  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: transform .5s;
}

.fade-enter, .fade-leave-to {
  margin-left: -200px;
}
</style>
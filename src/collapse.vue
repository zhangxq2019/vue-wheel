<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GCollapse'
}
</script>
<style lang="scss" scoped>
.collapse {
  border: 1px solid red;
  border-radius: 4px;
}
</style>
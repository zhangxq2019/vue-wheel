<template>
  <div class="layout-wrapper" :class="layoutClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GLayout',
  data(){
    return {
      layoutClass: {
        hasSider:false
      }
    }
  },
  mounted(){
    this.$children.forEach((vm)=>{
    if(vm.$options.name === 'GSider'){
      this.layoutClass.hasSider = true
    }
  })
  }
}
</script>
<style lang="scss" scoped>
.layout-wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  //border: 1px solid;
  &.hasSider {
    flex-direction: row;
  }
}
</style>